 <template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a
          v-on:click="toggleNav"
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="#philanavbar"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
      <div id="philanavbar" class="navbar-menu">
        <div class="navbar-end">
          <div v-if="items.length" class="items">
            <div v-for="item in items" :key="item.url">
              <router-link v-bind:to="item.slug" class="navbar-item">
                {{ item.title }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import request from "@/api/request";
export default {
  name: "Nav",
  data() {
    return {
      loading: false,
      items: [],
      error: null,
    };
  },
  created() {
    this.$watch(
      () => this.$route.params,
      () => {
        this.fetchData();
      },
      { immediate: true }
    );
  },
  methods: {
    toggleNav(ev) {
      ev.target.classList.toggle("is-active");
      document.querySelector("#philanavbar").classList.toggle("is-active");
    },
    fetchData() {
      this.loading = true;
      request(
        "https://locations-staging-admin.phila.gov/love-park/wp-json/menus/v1/menus/main-menu",
        (data, err) => {
          if (err) return (this.error = err.toString());
          this.items = data.items;
        }
      );
    },
  },
};
</script>

<style scoped>
.banner-image {
  height: 220px;
  padding-bottom: 25px;
}
nav {
  color: #444;
  font-weight: bold;
}
.navbar-item:hover {
  background: #444 !important;
  color: #fff !important;
}
.items {
  display: flex;
}
.navbar-menu.is-active {
  background: none !important;
}
.navbar-menu.is-active .items {
  text-align: center;
  display: block !important;
}
</style>