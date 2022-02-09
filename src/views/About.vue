<template>
  <Header v-bind:bg_color="bg_color"></Header>
  <Hero v-bind:title="title" />

  <div v-html="content" class="container" />
  <Logo />
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Hero from "@/components/Hero.vue";
import Logo from "@/components/Logo.vue";
import { getPage } from "../api/request";
export default {
  name: "About",
  components: {
    Header,
    Hero,
    Footer,
    Logo,
  },
  data() {
    return {
      loading: false,
      bg_color: null,
      page_content: [],
      content: null,
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
    fetchData() {
      this.loading = true;
      getPage(7, (data, err) => {
        this.loading = false;
        if (err) return (this.error = err.toString());
        this.title = data.title;
        this.bg_color = data.bg_color;
        this.content = data.content;
        this.page_content = data.page_content;
      });
    },
  },
};
</script>