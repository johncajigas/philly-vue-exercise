<template>
  <Hero
    v-bind:title="title"
    :heroImage="getSections.includes('phila_homepage_image')"
  />
  <div class="container content-align">
    <div v-if="getSections.includes('phila_connect')">
      <Connect />
    </div>

    <div v-if="getSections.includes('phila_single_wysiwyg')">
      <SingleWysiwyg />
    </div>
    <div v-if="getSections.includes('phila_three_posts')">
      <ThreePost />
    </div>
    <div v-if="getSections.includes('phila_events_list')">
      <EventList />
    </div>
    <div v-if="getSections.includes('phila_sponsors_and_partners')">
      <Sponsors />
    </div>
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import Connect from "@/components/Connect.vue";
import SingleWysiwyg from "@/components/SingleWysiwyg.vue";
import ThreePost from "@/components/ThreePost.vue";
import EventList from "@/components/EventsList.vue";
import Sponsors from "@/components/Sponsors.vue";
const getPageSectionNames = (arr) =>
  arr.map((e) => e.selected_option.phila_page_content_select);
export default {
  name: "PageContent",
  components: {
    Hero,
    Connect,
    SingleWysiwyg,
    ThreePost,
    EventList,
    Sponsors,
  },
  props: {
    page_content: Array,
    title: String,
    heroImage: Boolean,
  },
  computed: {
    getSections() {
      return getPageSectionNames(this.page_content);
    },
   
  },
};
</script>