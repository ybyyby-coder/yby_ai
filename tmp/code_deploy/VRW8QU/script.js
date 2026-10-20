/**
 * script.js
 * 包含站点核心交互逻辑：移动端导航切换、文章实时搜索过滤、平滑滚动
 */
document.addEventListener('DOMContentLoaded', () => {
    
    // 获取关键 DOM 元素
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-item');
    const searchInput = document.getElementById('search-input');
    const postCards = document.querySelectorAll('.post-card');
    const noResultsMsg = document.getElementById('no-results');

    /**
     * 1. 移动端菜单切换逻辑
     */
    const toggleMenu = () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
    };

    menuToggle.addEventListener('click', toggleMenu);

    // 点击导航链接后自动收起菜单（移动端体验优化）
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // 窗口大小改变时，若回到桌面端则强制关闭菜单
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
            toggleMenu();
        }
    });

    /**
     * 2. 文章实时搜索/过滤逻辑
     */
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim().toLowerCase();
        let visibleCount = 0;

        postCards.forEach(card => {
            // 获取预存的数据属性用于模糊匹配
            const title = card.dataset.title.toLowerCase();
            const excerpt = card.dataset.excerpt.toLowerCase();

            if (query === '' || title.includes(query) || excerpt.includes(query)) {
                card.style.display = 'flex'; // 恢复 Flex 布局
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        // 控制“无结果”提示显隐
        if (visibleCount === 0) {
            noResultsMsg.classList.remove('hidden');
        } else {
            noResultsMsg.classList.add('hidden');
        }
    });

    /**
     * 3. 平滑滚动 (兼容不支持 CSS scroll-behavior 的旧环境)
     */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // 考虑固定导航栏的高度偏移
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    /**
     * 4. 导航栏滚动高亮指示器
     */
    const sections = document.querySelectorAll('section[id]');
    
    const highlightNavOnScroll = () => {
        const scrollY = window.scrollY;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navItems.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').slice(1) === sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };

    window.addEventListener('scroll', highlightNavOnScroll);
});