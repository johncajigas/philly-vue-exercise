<template>
  <div class="footer bg-blue">
    <Connect/>
    <div class="bottom">This is an unofficial City of Philadelphia website. Visit <a href="#">phila.gov</a> for the full site experience.</div> 
    </div>
</template>
<script>
import Connect from '@/components/Connect.vue'
export default {
  name:'Footer',
  components:{
    Connect
  }
}
</script>

<style scoped>
.footer {

position: relative;
}
 .bottom {
   position:absolute;
  bottom:0;
  text-align: center;
  width: 100%;
 }
</style>