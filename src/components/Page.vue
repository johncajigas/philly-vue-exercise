<template>
  <Header v-bind:bg_color="bg_color" />
  <PageContent
    v-bind:page_content="page_content"
    v-bind:content="content"
    v-bind:title="title"
  />
  <Logo v-if="bottomLogo"/>
  <Footer/>
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import PageContent from '@/components/PageContent.vue';
import Logo from "@/components/Logo.vue";
import { getPage } from "../api/request";
export default {
  name: "Page",
  components: {
    Header,
    Footer,
    PageContent,
    Logo
  },
  props: {
    id: Number,
    bottomLogo: {
      type: Boolean,
      default: false,
    },
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
      getPage(this.id, (data, err) => {
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