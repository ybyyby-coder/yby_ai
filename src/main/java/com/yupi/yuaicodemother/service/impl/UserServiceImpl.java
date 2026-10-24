package com.yupi.yuaicodemother.service.impl;

import cn.hutool.core.bean.BeanUtil;
import cn.hutool.core.collection.CollUtil;
import com.mybatisflex.core.query.QueryWrapper;
import com.mybatisflex.spring.service.impl.ServiceImpl;
import com.yupi.yuaicodemother.constant.UserConstant;
import com.yupi.yuaicodemother.constant.UserProfileConstant;
import com.yupi.yuaicodemother.exception.BusinessException;
import com.yupi.yuaicodemother.exception.ErrorCode;
import com.yupi.yuaicodemother.exception.ThrowUtils;
import com.yupi.yuaicodemother.model.dto.user.UserQueryRequest;
import com.yupi.yuaicodemother.model.dto.user.UserPasswordUpdateRequest;
import com.yupi.yuaicodemother.model.dto.user.UserProfileUpdateRequest;
import com.yupi.yuaicodemother.model.entity.User;
import com.yupi.yuaicodemother.mapper.UserMapper;
import com.yupi.yuaicodemother.model.enums.UserRoleEnum;
import com.yupi.yuaicodemother.model.vo.user.LoginUserVO;
import com.yupi.yuaicodemother.model.vo.user.UserVO;
import com.yupi.yuaicodemother.service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import org.springframework.util.DigestUtils;
import org.springframework.dao.DuplicateKeyException;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import static com.yupi.yuaicodemother.constant.UserProfileConstant.*;

import static com.yupi.yuaicodemother.constant.UserConstant.USER_LOGIN_STATE;

/**
 * 用户 服务层实现。
 *
 * @author <a href="https://github.com/ybynb">yby</a>
 */
@Service
public class UserServiceImpl extends ServiceImpl<UserMapper, User>  implements UserService{
    /**
     * 校验用户登录
     */
    @Override
    public long userRegister(String userAccount, String userPassword, String checkPassword) {
        //1. 校验
        if (StringUtils.isAnyBlank(userAccount, userPassword, checkPassword)) {
            throw new BusinessException(ErrorCode.PARAMS_ERROR,"参数为空");
        }
        if(userAccount.length() < 4) {
            throw new BusinessException(ErrorCode.PARAMS_ERROR,"用户账号长度过短");
        }
        if(userPassword.length() < 8) {
            throw new BusinessException(ErrorCode.PARAMS_ERROR,"用户密码长度过短");
        }
        //校验两次密码是否一致
        if(!userPassword.equals(checkPassword)) {
            throw new BusinessException(ErrorCode.PARAMS_ERROR,"两次密码不一致");
        }
        //2. 检查是否重复
        QueryWrapper queryWrapper = new QueryWrapper();
        queryWrapper.eq(User::getUserAccount, userAccount);
        long count = count(queryWrapper);
        if(count > 0) {
            throw new BusinessException(ErrorCode.PARAMS_ERROR,"用户账号重复");
        }
        //3. 加密
        String encryptPassword = getEncryptPassword(userPassword);
        //4. 插入数据库
        User user = new User();
        user.setUserAccount(userAccount);
        user.setUserPassword(encryptPassword);
        user.setUserRole(UserRoleEnum.USER.getValue());
        boolean saveResult= this.save(user);
        //判断是否保存成功
        if(!saveResult) {
            throw new BusinessException(ErrorCode.SYSTEM_ERROR,"注册失败,数据库错误");
            //返回错误信息
        }
        // 使用雪花 ID 生成唯一的默认昵称，避免昵称唯一约束阻塞注册。
        user.setUserName("用户" + user.getId());
        this.updateById(user);
        //返回用户id，表示注册成功
        return user.getId();
    }
    @Override
    public String getEncryptPassword(String userPassword) {
        // 盐值，混淆密码
        final String SALT = "yby";
        return DigestUtils.md5DigestAsHex((SALT + userPassword).getBytes());
    }

    /**
     * 获取用户登录后的脱敏信息
     * @param user
     * @return
     */
    @Override
    public LoginUserVO getLoginUserVO(User user) {
        if(user == null){
            return null;
        }
        LoginUserVO loginUserVO = new LoginUserVO();
        BeanUtils.copyProperties(user,loginUserVO);
        return loginUserVO;
    }
    @Override
    public LoginUserVO userLogin(String userAccount, String userPassword, HttpServletRequest request){
        //1. 校验
        if (StringUtils.isAnyBlank(userAccount, userPassword)) {
            throw new BusinessException(ErrorCode.PARAMS_ERROR,"参数为空");
        }
        if(userAccount.length() < 4) {
            throw new BusinessException(ErrorCode.PARAMS_ERROR,"用户账号错误");
        }
        if(userPassword.length() < 8) {
            throw new BusinessException(ErrorCode.PARAMS_ERROR,"用户密码错误");
        }
        //2. 加密
        String encryptPassword = getEncryptPassword(userPassword);
        //3. 查询用户
        QueryWrapper queryWrapper = new QueryWrapper();
        queryWrapper.eq(User::getUserAccount, userAccount);
        queryWrapper.eq(User::getUserPassword, encryptPassword);
        User user = this.mapper.selectOneByQuery(queryWrapper);
        //用户不存在
        if(user == null){
            throw new BusinessException(ErrorCode.PARAMS_ERROR,"用户不存在或密码错误");
        }
        //4. 记录用户的登录态
        request.getSession().setAttribute(USER_LOGIN_STATE, user);
        //5. 返回脱敏信息
        return getLoginUserVO(user);
    }
    @Override
    public User getLoginUser(HttpServletRequest request) {
        // 先判断是否已登录
        Object userObj = request.getSession().getAttribute(USER_LOGIN_STATE);
        User currentUser = (User) userObj;
        if (currentUser == null || currentUser.getId() == null) {
            throw new BusinessException(ErrorCode.NOT_LOGIN_ERROR);
        }
        // 从数据库查询（追求性能的话可以注释，直接返回上述结果）
        long userId = currentUser.getId();
        currentUser = this.getById(userId);
        if (currentUser == null) {
            throw new BusinessException(ErrorCode.NOT_LOGIN_ERROR);
        }
        return currentUser;
    }
    @Override
    public boolean userLogout(HttpServletRequest request) {
        // 先判断是否已登录
        Object userObj = request.getSession().getAttribute(USER_LOGIN_STATE);
        if (userObj == null) {
            throw new BusinessException(ErrorCode.OPERATION_ERROR, "未登录");
        }
        // 移除登录态
        request.getSession().removeAttribute(USER_LOGIN_STATE);
        return true;
    }

    /**
     * 更新用户
     * @param request
     * @param httpRequest
     * @return
     */
    @Override
    public LoginUserVO updateMyProfile(UserProfileUpdateRequest request, HttpServletRequest httpRequest) {
        ThrowUtils.throwIf(request == null, ErrorCode.PARAMS_ERROR);
        User loginUser = getLoginUser(httpRequest);
        String userName = request.getUserName() == null ? "" : request.getUserName().trim();
        String userAvatar = request.getUserAvatar();
        // 校验昵称长度
        int nicknameLength = userName.codePointCount(0, userName.length());
        ThrowUtils.throwIf(nicknameLength < MIN_NICKNAME_LENGTH || nicknameLength > MAX_NICKNAME_LENGTH,
                ErrorCode.NICKNAME_LENGTH_ERROR);
        // 校验昵称是否包含敏感词
        for (String sensitiveWord : SENSITIVE_WORDS) {
            if (userName.contains(sensitiveWord)) {
                throw new BusinessException(ErrorCode.SENSITIVE_WORD_ERROR);
            }
        }
        // 校验头像是否合法
        ThrowUtils.throwIf(!AVATAR_WHITELIST.contains(userAvatar), ErrorCode.AVATAR_ERROR);

        // 校验昵称是否重复
        QueryWrapper duplicateQuery = QueryWrapper.create()
                .eq("userName", userName)
                .ne("id", loginUser.getId());
        ThrowUtils.throwIf(count(duplicateQuery) > 0, ErrorCode.NICKNAME_CONFLICT_ERROR);
        //更新用户信息
        User updateUser = new User();
        updateUser.setId(loginUser.getId());
        updateUser.setUserName(userName);
        updateUser.setUserAvatar(userAvatar);
        try {
            ThrowUtils.throwIf(!updateById(updateUser), ErrorCode.OPERATION_ERROR);
        } catch (DuplicateKeyException e) {
            throw new BusinessException(ErrorCode.NICKNAME_CONFLICT_ERROR);
        }
        return getLoginUserVO(getById(loginUser.getId()));
    }


    /**
     * 更新用户密码
     * @param request
     * @param httpRequest
     * @return
     */
    @Override
    public boolean updateMyPassword(UserPasswordUpdateRequest request, HttpServletRequest httpRequest) {
        ThrowUtils.throwIf(request == null, ErrorCode.PARAMS_ERROR);
        User loginUser = getLoginUser(httpRequest);
        String oldPassword = request.getOldPassword();
        String newPassword = request.getNewPassword();
        String checkPassword = request.getCheckPassword();
        if (StringUtils.isAnyBlank(oldPassword, newPassword, checkPassword)) {
            throw new BusinessException(ErrorCode.PARAMS_ERROR, "密码不能为空");
        }
        int passwordLength = newPassword.codePointCount(0, newPassword.length());
        ThrowUtils.throwIf(passwordLength < MIN_PASSWORD_LENGTH || passwordLength > MAX_PASSWORD_LENGTH,
                ErrorCode.PASSWORD_LENGTH_ERROR);
        ThrowUtils.throwIf(!getEncryptPassword(oldPassword).equals(loginUser.getUserPassword()),
                ErrorCode.OLD_PASSWORD_ERROR);
        ThrowUtils.throwIf(!newPassword.equals(checkPassword), ErrorCode.PASSWORD_CONFIRM_ERROR);
        ThrowUtils.throwIf(oldPassword.equals(newPassword), ErrorCode.PASSWORD_SAME_ERROR);

        User updateUser = new User();
        updateUser.setId(loginUser.getId());
        updateUser.setUserPassword(getEncryptPassword(newPassword));
        ThrowUtils.throwIf(!updateById(updateUser), ErrorCode.OPERATION_ERROR);
        return true;
    }
    @Override
    public UserVO getUserVO(User user) {
        if (user == null) {
            return null;
        }
        UserVO userVO = new UserVO();
        BeanUtil.copyProperties(user, userVO);
        return userVO;
    }

    @Override
    public List<UserVO> getUserVOList(List<User> userList) {
        if (CollUtil.isEmpty(userList)) {
            return new ArrayList<>();
        }
        return userList.stream().map(this::getUserVO).collect(Collectors.toList());
    }
    @Override
    public QueryWrapper getQueryWrapper(UserQueryRequest userQueryRequest) {
        if (userQueryRequest == null) {
            throw new BusinessException(ErrorCode.PARAMS_ERROR, "请求参数为空");
        }
        Long id = userQueryRequest.getId();
        String userAccount = userQueryRequest.getUserAccount();
        String userName = userQueryRequest.getUserName();
        String userProfile = userQueryRequest.getUserProfile();
        String userRole = userQueryRequest.getUserRole();
        String sortField = userQueryRequest.getSortField();
        String sortOrder = userQueryRequest.getSortOrder();
        return QueryWrapper.create()
                .eq("id", id)
                .eq("userRole", userRole)
                .like("userAccount", userAccount)
                .like("userName", userName)
                .like("userProfile", userProfile)
                .orderBy(sortField, "ascend".equals(sortOrder));
    }

}
