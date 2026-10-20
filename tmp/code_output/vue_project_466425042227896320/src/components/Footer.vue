&lt;template&gt;
  &lt;footer class="footer"&gt;
    &lt;div class="container footer-content"&gt;
      &lt;div class="footer-section"&gt;
        &lt;p class="copyright"&gt;© 2024 个人博客. All rights reserved.&lt;/p&gt;
        &lt;p class="powered-by"&gt;Powered by Vue 3 &amp; Vite&lt;/p&gt;
      &lt;/div&gt;
      &lt;nav class="footer-nav"&gt;
        &lt;a href="#" class="footer-link"&gt;GitHub&lt;/a&gt;
        &lt;a href="#" class="footer-link"&gt;微博&lt;/a&gt;
        &lt;a href="#" class="footer-link"&gt;邮箱&lt;/a&gt;
      &lt;/nav&gt;
    &lt;/div&gt;
  &lt;/footer&gt;
&lt;/template&gt;

&lt;script setup&gt;
// No logic needed
&lt;/script&gt;

&lt;style scoped&gt;
.footer {
  background-color: #f8f9fa;
  border-top: 1px solid #e9ecef;
  padding: 2rem 0;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.copyright {
  margin: 0;
  color: #6c757d;
  font-size: 0.9rem;
}

.powered-by {
  margin: 0.5rem 0 0;
  color: #adb5bd;
  font-size: 0.8rem;
}

.footer-nav {
  display: flex;
  gap: 1.5rem;
}

.footer-link {
  color: #6c757d;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #007bff;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    text-align: center;
  }

  .footer-nav {
    justify-content: center;
  }
}
&lt;/style&gt;