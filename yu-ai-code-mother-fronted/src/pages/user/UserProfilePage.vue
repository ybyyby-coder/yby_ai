<template>
  <div id="userProfilePage">
    <div class="page-heading">
      <div>
        <div class="eyebrow">ACCOUNT</div>
        <h2>个人中心</h2>
        <p>管理你的头像、昵称和登录密码</p>
      </div>
      <a-avatar :src="loginUserStore.loginUser.userAvatar" :size="64">
        {{ loginUserStore.loginUser.userName?.charAt(0) || 'U' }}
      </a-avatar>
    </div>

    <a-row :gutter="24" class="profile-grid">
      <a-col :xs="24" :lg="14">
        <a-card title="基本资料" :bordered="false" class="profile-card">
          <a-form :model="profileForm" layout="vertical" @finish="saveProfile">
            <a-form-item
              label="昵称"
              name="userName"
              :rules="[
                { required: true, message: '请输入昵称' },
                { min: 1, max: 20, message: '昵称长度必须为 1～20 个字符' },
              ]"
            >
              <a-input v-model:value="profileForm.userName" maxlength="20" show-count placeholder="请输入昵称" />
            </a-form-item>
            <a-form-item label="头像">
              <div class="avatar-grid">
                <button
                  v-for="avatar in avatars"
                  :key="avatar"
                  type="button"
                  class="avatar-option"
                  :class="{ selected: profileForm.userAvatar === avatar }"
                  :aria-label="`选择头像 ${avatar}`"
                  @click="profileForm.userAvatar = avatar"
                >
                  <a-avatar :src="avatar" :size="58" />
                  <CheckCircleFilled v-if="profileForm.userAvatar === avatar" class="selected-icon" />
                </button>
              </div>
            </a-form-item>
            <a-form-item>
              <a-button type="primary" html-type="submit" :loading="profileLoading">保存资料</a-button>
            </a-form-item>
          </a-form>
        </a-card>
      </a-col>

      <a-col :xs="24" :lg="10">
        <a-card title="修改密码" :bordered="false" class="profile-card">
          <a-form :model="passwordForm" layout="vertical" @finish="savePassword">
            <a-form-item label="旧密码" name="oldPassword" :rules="[{ required: true, message: '请输入旧密码' }]">
              <a-input-password v-model:value="passwordForm.oldPassword" autocomplete="current-password" />
            </a-form-item>
            <a-form-item
              label="新密码"
              name="newPassword"
              :rules="[
                { required: true, message: '请输入新密码' },
                { min: 8, max: 20, message: '新密码长度必须为 8～20 位' },
              ]"
            >
              <a-input-password v-model:value="passwordForm.newPassword" autocomplete="new-password" />
            </a-form-item>
            <a-form-item
              label="确认新密码"
              name="checkPassword"
              :rules="[
                { required: true, message: '请确认新密码' },
                { validator: validatePasswordMatch },
              ]"
            >
              <a-input-password v-model:value="passwordForm.checkPassword" autocomplete="new-password" />
            </a-form-item>
            <a-form-item>
              <a-button html-type="submit" :loading="passwordLoading">更新密码</a-button>
            </a-form-item>
          </a-form>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import { message } from 'ant-design-vue'
import { CheckCircleFilled } from '@ant-design/icons-vue'
import { updateMyPassword, updateMyProfile } from '@/api/userController.ts'
import { useLoginUserStore } from '@/stores/loginUser.ts'

const avatars = Array.from({ length: 8 }, (_, index) => `/avatars/avatar-${String(index + 1).padStart(2, '0')}.svg`)
const loginUserStore = useLoginUserStore()
const profileLoading = ref(false)
const passwordLoading = ref(false)

const profileForm = reactive<API.UserProfileUpdateRequest>({
  userName: '',
  userAvatar: avatars[0],
})
const passwordForm = reactive<API.UserPasswordUpdateRequest>({
  oldPassword: '',
  newPassword: '',
  checkPassword: '',
})

const validatePasswordMatch = (_rule: unknown, value: string, callback: (error?: Error) => void) => {
  callback(value === passwordForm.newPassword ? undefined : new Error('两次输入的密码不一致'))
}

const saveProfile = async () => {
  profileLoading.value = true
  try {
    const res = await updateMyProfile(profileForm)
    if (res.data.code === 0 && res.data.data) {
      loginUserStore.setLoginUser(res.data.data)
      message.success('资料保存成功')
    } else {
      message.error(res.data.message || '资料保存失败')
    }
  } finally {
    profileLoading.value = false
  }
}

const savePassword = async () => {
  passwordLoading.value = true
  try {
    const res = await updateMyPassword(passwordForm)
    if (res.data.code === 0) {
      message.success('密码修改成功')
      passwordForm.oldPassword = ''
      passwordForm.newPassword = ''
      passwordForm.checkPassword = ''
    } else {
      message.error(res.data.message || '密码修改失败')
    }
  } finally {
    passwordLoading.value = false
  }
}

onMounted(() => {
  profileForm.userName = loginUserStore.loginUser.userName || ''
  profileForm.userAvatar = loginUserStore.loginUser.userAvatar || avatars[0]
})
</script>

<style scoped>
#userProfilePage {
  max-width: 1120px;
  margin: 0 auto;
  padding: 40px 24px 56px;
}

.page-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}

.eyebrow {
  color: var(--color-primary);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1.5px;
}

h2 {
  margin: 6px 0;
  color: var(--color-ink);
}

.page-heading p {
  margin: 0;
  color: var(--color-ink-muted);
}

.profile-card {
  height: 100%;
  border: 1px solid var(--color-border-soft);
  box-shadow: var(--shadow-card);
}

.avatar-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(60px, 1fr));
  gap: 12px;
  max-width: 360px;
}

.avatar-option {
  position: relative;
  display: grid;
  place-items: center;
  aspect-ratio: 1;
  padding: 5px;
  border: 2px solid transparent;
  border-radius: 12px;
  background: var(--color-surface-muted);
  cursor: pointer;
}

.avatar-option.selected {
  border-color: var(--color-primary);
  background: var(--color-surface-accent);
}

.selected-icon {
  position: absolute;
  right: 2px;
  bottom: 2px;
  color: var(--color-primary);
  background: var(--color-surface);
  border-radius: 50%;
}

@media (max-width: 600px) {
  #userProfilePage {
    padding: 24px 16px 40px;
  }
}
</style>
