&lt;template&gt;
  &lt;div class="app"&gt;
    &lt;Navbar /&gt;
    &lt;main class="main-content"&gt;
      &lt;router-view /&gt;
    &lt;/main&gt;
    &lt;Footer /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
&lt;/script&gt;

&lt;style scoped&gt;
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding-top: 2rem;
  padding-bottom: 3rem;
}
&lt;/style&gt;