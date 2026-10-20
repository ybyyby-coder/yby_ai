/**
 * TagMark 核心逻辑
 * 功能：书签增删、标签云生成、关键词/标签双筛、LocalStorage 持久化
 */

// DOM 引用
const bookmarkForm = document.getElementById('bookmarkForm');
const bmTitleInput = document.getElementById('bmTitle');
const bmUrlInput = document.getElementById('bmUrl');
const bmTagsInput = document.getElementById('bmTags');
const searchInput = document.getElementById('searchInput');
const tagCloud = document.getElementById('tagCloud');
const bookmarksGrid = document.getElementById('bookmarksGrid');
const emptyState = document.getElementById('emptyState');

// 状态管理
let bookmarks = JSON.parse(localStorage.getItem('tagMarkData')) || [];
let activeTag = ''; // 当前选中的筛选标签

// 初始化
document.addEventListener('DOMContentLoaded', init);

function init() {
    bindEvents();
    renderBookmarks();
    renderTagCloud();
}

function bindEvents() {
    // 表单提交
    bookmarkForm.addEventListener('submit', handleAddSubmit);
    // 搜索框输入
    searchInput.addEventListener('input', renderBookmarks);
    // 标签云点击（事件委托）
    tagCloud.addEventListener('click', handleTagClick);
}

/**
 * 处理新增书签
 */
function handleAddSubmit(e) {
    e.preventDefault();
    
    const title = bmTitleInput.value.trim();
    const url = bmUrlInput.value.trim();
    const tagsRaw = bmTagsInput.value.trim();
    // 兼容逗号、空格分隔，并去除首尾空白和可能的 '#' 前缀
    const tags = tagsRaw ? tagsRaw.split(/[\s,]+/).map(t => t.replace(/^#/, '').trim()).filter(Boolean) : [];

    const newEntry = {
        id: Date.now(),
        title,
        url,
        tags,
        date: new Date().toLocaleDateString('zh-CN', { year: 'numeric', month: '2-digit', day: '2-digit' })
    };

    bookmarks.unshift(newEntry); // 最新置顶
    persistToStorage();
    renderBookmarks();
    renderTagCloud();
    
    bookmarkForm.reset();
}

/**
 * 删除书签
 */
window.deleteBookmark = function(id) {
    if (!confirm('确定要从标签库中移除此书签吗？')) return;
    
    bookmarks = bookmarks.filter(bm => bm.id !== id);
    persistToStorage();
    renderBookmarks();
    renderTagCloud();
};

/**
 * 处理标签筛选切换
 */
function handleTagClick(e) {
    if (!e.target.classList.contains('tag')) return;
    
    // 切换激活状态
    document.querySelectorAll('.tag').forEach(t => t.classList.remove('active'));
    e.target.classList.add('active');
    
    activeTag = e.target.dataset.tag === '' ? '' : e.target.dataset.tag;
    renderBookmarks();
}

/**
 * 渲染书签卡片列表
 */
function renderBookmarks() {
    const keyword = searchInput.value.toLowerCase().trim();
    
    const filtered = bookmarks.filter(item => {
        const matchSearch = item.title.toLowerCase().includes(keyword) || 
                            item.url.toLowerCase().includes(keyword);
        const matchTag = activeTag === '' || item.tags.includes(activeTag);
        return matchSearch && matchTag;
    });

    // 清空网格
    bookmarksGrid.innerHTML = '';

    // 处理空状态提示
    if (bookmarks.length === 0) {
        emptyState.textContent = '📭 暂无书签，快去添加第一个吧！';
    } else if (filtered.length === 0) {
        emptyState.textContent = '🔍 没有找到匹配的书签，请检查关键词或标签筛选条件。';
    } else {
        emptyState.textContent = ''; // 隐藏文字，保留容器结构
    }
    emptyState.style.display = filtered.length === 0 ? 'block' : 'none';

    // 生成卡片
    filtered.forEach(item => {
        const card = document.createElement('div');
        card.className = 'bookmark-card';
        card.innerHTML = `
            <div>
                <h3 class="bm-title">${escapeHtml(item.title)}</h3>
                <p class="bm-url">${escapeHtml(item.url)}</p>
                <div class="bm-tags">
                    ${item.tags.map(tag => `<span class="bm-tag">${escapeHtml(tag)}</span>`).join('')}
                </div>
            </div>
            <div class="bm-footer">
                <span class="bm-date">🕒 ${item.date}</span>
                <button class="btn btn-danger" onclick="deleteBookmark(${item.id})">移除</button>
            </div>
        `;
        bookmarksGrid.appendChild(card);
    });
}

/**
 * 动态生成顶部标签云
 */
function renderTagCloud() {
    // 收集所有不重复的标签
    const uniqueTags = new Set();
    bookmarks.forEach(bm => bm.tags.forEach(tag => uniqueTags.add(tag)));

    // 清除旧标签（保留“全部”）
    const oldTags = tagCloud.querySelectorAll('.tag[data-tag]:not([data-tag=""])');
    oldTags.forEach(el => el.remove());

    // 按字母顺序追加新标签
    Array.from(uniqueTags).sort().forEach(tag => {
        const span = document.createElement('span');
        span.className = `tag ${tag === activeTag ? 'active' : ''}`;
        span.dataset.tag = tag;
        span.textContent = tag;
        tagCloud.appendChild(span);
    });
}

/**
 * 数据持久化到 LocalStorage
 */
function persistToStorage() {
    try {
        localStorage.setItem('tagMarkData', JSON.stringify(bookmarks));
    } catch (e) {
        console.warn('存储失败，可能超出配额或浏览器禁止写入:', e);
    }
}

/**
 * XSS 防护工具函数
 */
function escapeHtml(text) {
    const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
    return text.replace(/[&<>"']/g, m => map[m]);
}