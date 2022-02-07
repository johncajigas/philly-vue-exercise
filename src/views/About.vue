<template>
    <div class="about">
        <Header></Header>
        <div class="container content-align is-overlay">
          <h2>About</h2>
        </div>
        <div class="columns">
            <div class="column is-one-quarter is-offset-4">
                <figure class="image">
                    <img src="../assets/images/parks-and-rec-logo.png">
                </figure>
            </div>
        </div>
        <div class="has-background-link">
            <div class="container">
                <Footer bgcolor="has-background-link" textcolor="has-text-white"></Footer>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "@/views/Header.vue"
import Footer from "@/components/Footer.vue"

export default {
  name: "About",
  components: {
    Header, 
    Footer
  },
  data() {
      return {
      }
  }
}
</script>