<template>
  <section class="hero" :style="headerStyle">
    <div class="hero-head">
      <Nav />
    </div>
    <div class="hero-body">
      <div class="container has-text-left">
        <div class="columns header-content">
          <div class="column is-2-desktop is-4-tablet">
          
            <figure class="image">
                <router-link to="/">
                  <img
                    class="banner-image"
                    src="../assets/images/love-park-logo.png"
                  />
                    </router-link>
            </figure>
          
          </div>
          <div class="column is-10-desktop is-8-tablet">
            <h1>
              Spring into LOVE
            </h1>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Nav from "./Nav";
export default {
  name: "Header",
  components: {
    Nav,
  },
  props: {
    bg_color: {
      type: String,
      default: "#b3e8f9",
    }
  },
  computed: {
    headerStyle() {
      return {
        "background-color": this.bg_color,
      };
    },
  },
};
</script>

<style scoped>
figure.image a {
  display: inline-block;
}
.banner-image {
  max-width:200px; 

}
.header-content {
  align-items: flex-end;
}

</style>