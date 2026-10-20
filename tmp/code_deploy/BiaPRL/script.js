/**
 * MarkSpace - 书签管理核心逻辑
 * 功能：增删改查、本地存储、标签筛选、关键词搜索
 */

(function() {
    // DOM 元素引用
    const form = document.getElementById('bookmarkForm');
    const urlInput = document.getElementById('urlInput');
    const titleInput = document.getElementById('titleInput');
    const tagsInput = document.getElementById('tagsInput');
    const searchInput = document.getElementById('searchInput');
    const tagFiltersContainer = document.getElementById('tagFilters');
    const clearFilterBtn = document.getElementById('clearFilterBtn');
    const bookmarksGrid = document.getElementById('bookmarksGrid');
    const emptyState = document.getElementById('emptyState');
    const yearSpan = document.getElementById('year');

    // 状态管理
    let bookmarks = [];
    let activeTagFilter = null;
    let searchQuery = '';

    // 初始化
    function init() {
        yearSpan.textContent = new Date().getFullYear();
        loadFromStorage();
        setupEventListeners();
        render();
    }

    // 从 localStorage 加载数据
    function loadFromStorage() {
        const stored = localStorage.getItem('marksapce_bookmarks');
        if (stored) {
            bookmarks = JSON.parse(stored);
        } else {
            // 首次访问提供演示数据
            bookmarks = [
                { id: 'demo-1', title: 'MDN Web 文档', url: 'https://developer.mozilla.org/zh-CN/', tags: ['前端', '开发', '参考'] },
                { id: 'demo-2', title: 'Picsum Photos', url: 'https://picsum.photos/', tags: ['图片', '素材', '测试'] },
                { id: 'demo-3', title: 'Figma Community', url: 'https://www.figma.com/community', tags: ['设计', 'UI', '灵感'] }
            ];
            saveToStorage();
        }
    }

    // 保存到 localStorage
    function saveToStorage() {
        localStorage.setItem('marksapce_bookmarks', JSON.stringify(bookmarks));
    }

    // 事件监听绑定
    function setupEventListeners() {
        // 表单提交
        form.addEventListener('submit', handleAddBookmark);
        
        // 搜索输入
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.trim().toLowerCase();
            render();
        });

        // 清除标签筛选
        clearFilterBtn.addEventListener('click', () => {
            activeTagFilter = null;
            render();
        });
    }

    // 处理添加书签
    function handleAddBookmark(e) {
        e.preventDefault();
        
        const url = urlInput.value.trim();
        const title = titleInput.value.trim();
        const rawTags = tagsInput.value.split(',').map(t => t.trim()).filter(t => t !== '');

        if (!url || !title) return;

        const newBookmark = {
            id: Date.now().toString(),
            title,
            url,
            tags: rawTags
        };

        bookmarks.unshift(newBookmark); // 最新添加到最前面
        saveToStorage();
        render();

        // 清空表单并重置焦点
        form.reset();
        urlInput.focus();
    }

    // 删除书签
    window.deleteBookmark = function(id) {
        if(confirm('确定要删除这条书签吗？')) {
            bookmarks = bookmarks.filter(b => b.id !== id);
            saveToStorage();
            render();
        }
    };

    // 获取所有唯一标签（用于生成筛选器）
    function getAllUniqueTags() {
        const tagSet = new Set();
        bookmarks.forEach(b => b.tags.forEach(t => tagSet.add(t)));
        return Array.from(tagSet).sort();
    }

    // 过滤并渲染
    function render() {
        // 1. 计算当前筛选结果
        const filtered = bookmarks.filter(b => {
            const matchesTag = !activeTagFilter || b.tags.includes(activeTagFilter);
            const matchesSearch = !searchQuery || 
                                  b.title.toLowerCase().includes(searchQuery) || 
                                  b.url.toLowerCase().includes(searchQuery);
            return matchesTag && matchesSearch;
        });

        // 2. 渲染标签筛选按钮
        renderTagFilters();

        // 3. 渲染书签卡片
        bookmarksGrid.innerHTML = '';
        if (filtered.length === 0) {
            emptyState.style.display = 'block';
            emptyState.textContent = bookmarks.length === 0 ? '暂无书签数据，请在上方添加第一条记录吧！' : '没有找到匹配的书签。';
        } else {
            emptyState.style.display = 'none';
            filtered.forEach(bookmark => {
                const card = createBookmarkCard(bookmark);
                bookmarksGrid.appendChild(card);
            });
        }
    }

    // 创建书签卡片 DOM
    function createBookmarkCard(data) {
        const article = document.createElement('article');
        article.className = 'bookmark-card';

        const tagsHtml = data.tags.map(tag => `<span class="tag-pill">${escapeHtml(tag)}</span>`).join('');
        
        article.innerHTML = `
            <div class="card-header">
                <h3 class="card-title">${escapeHtml(data.title)}</h3>
                <button class="btn btn-delete" onclick="deleteBookmark('${data.id}')">✕</button>
            </div>
            <a href="${escapeHtml(data.url)}" target="_blank" rel="noopener noreferrer" class="card-url" title="${escapeHtml(data.url)}">
                ${escapeHtml(data.url)}
            </a>
            <div class="tags-container">
                ${tagsHtml}
            </div>
        `;
        return article;
    }

    // 渲染筛选标签区
    function renderTagFilters() {
        const tags = getAllUniqueTags();
        tagFiltersContainer.innerHTML = '';
        
        if (tags.length === 0) {
            clearFilterBtn.style.display = 'none';
            return;
        }

        tags.forEach(tag => {
            const btn = document.createElement('button');
            btn.className = `tag-btn ${activeTagFilter === tag ? 'active' : ''}`;
            btn.textContent = tag;
            btn.addEventListener('click', () => {
                activeTagFilter = activeTagFilter === tag ? null : tag;
                render();
            });
            tagFiltersContainer.appendChild(btn);
        });

        clearFilterBtn.style.display = activeTagFilter ? 'inline-block' : 'none';
    }

    // XSS 防护辅助函数
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // 启动应用
    document.addEventListener('DOMContentLoaded', init);
})();