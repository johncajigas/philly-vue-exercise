<template>
  <div class="event-list">
    <h3>Lorem ipsum dolor</h3>
    <div class="columns is-vcentered">
      <div class="column">
          <div class="img-placeholder bg-dark"/>
          <Event />
      </div>
      <div class="column">
        <Event />
        <Event />
        <Event />
      </div>
    </div>
  </div>
  <div class="see-all-link">
    <a href="#">SEE ALL ></a>
  </div>
</template>
<script>
import Event from "@/components/Event.vue";
export default {
  name: "EventList",
  components: {
    Event,
  },
};
</script>

<style scoped>
.img-placeholder {
    height:400;
    aspect-ratio:1.5;
}
.event-list {
  margin-bottom: 50px;
}
</style>