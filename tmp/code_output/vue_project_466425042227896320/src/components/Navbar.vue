&lt;template&gt;
  &lt;nav class="navbar"&gt;
    &lt;div class="container navbar-content"&gt;
      &lt;router-link to="/" class="brand"&gt;&lt;span class="logo-icon"&gt;✍️&lt;/span&gt;Blog&lt;/router-link&gt;
      &lt;div class="nav-links"&gt;
        &lt;router-link to="/" class="nav-item" :class="{ active: $route.path === '/' }"&gt;首页&lt;/router-link&gt;
        &lt;router-link to="/articles" class="nav-item" :class="{ active: $route.path.startsWith('/article') || $route.path === '/articles' }"&gt;文章列表&lt;/router-link&gt;
        &lt;router-link to="/about" class="nav-item" :class="{ active: $route.path === '/about' }"&gt;关于我&lt;/router-link&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/nav&gt;
&lt;/template&gt;

&lt;script setup&gt;
// No logic needed
&lt;/script&gt;

&lt;style scoped&gt;
.navbar {
  background-color: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.brand {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.brand:hover {
  color: #4A90D9;
}

.logo-icon {
  font-size: 1.2em;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-item {
  text-decoration: none;
  color: #555;
  font-size: 1rem;
  transition: color 0.3s ease;
  position: relative;
}

.nav-item:hover,
.nav-item.active {
  color: #4A90D9;
}

.nav-item.active::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #4A90D9;
}

@media (max-width: 768px) {
  .navbar-content {
    flex-direction: column;
    gap: 1rem;
  }

  .nav-links {
    gap: 1rem;
  }
}
&lt;/style&gt;