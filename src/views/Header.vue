<template>
  <section class="hero is-info is-small">
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div id="" class="navbar-menu">
            <div class="navbar-end has-text-black">
              <router-link to="about">
                  About
              </router-link>
            </div>
          </div>
      </div>
    </nav>
  </div>
  <div class="hero-body">
      <div class="container has-text-left">
          <p class="title has-text-black">
              <router-link to="/">
                <a>
                  <img class="banner-image" src="../assets/images/love-park-logo.png">
                </a>
              </router-link>
          </p>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Header',
  }
</script>

<style scoped>
  .banner-image {
    height: 220px;
    padding-bottom: 25px;
  }
</style>