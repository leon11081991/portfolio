<template>
  <footer class="web_footer">
    <div class="web_footer__inner">
      <div class="web_footer__sitemap">
        <ul class="sitemap-list">
          <li class="sitemap-item">
            <router-link class="sitemap-item-link" to="#">Info</router-link>
          </li>
          <li class="sitemap-item">
            <router-link class="sitemap-item-link" to="#">Articles</router-link>
          </li>
          <li class="sitemap-item">
            <router-link class="sitemap-item-link" to="#"
              >Create Post</router-link
            >
          </li>
          <li class="sitemap-item">
            <router-link class="sitemap-item-link" to="#"
              ><li class="web_nav__item">
                <router-link class="web_nav__item-link" to="#"
                  >Login/Register</router-link
                >
              </li></router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
<script setup></script>
<style lang="scss" scoped>
.web_footer {
  position: relative;
  padding: 30px;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: $border-color;
  }
}
.sitemap {
  &-list {
    display: flex;
  }
  &-item {
    margin: 0 20px;
  }
}
</style>
