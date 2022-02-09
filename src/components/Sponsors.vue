<template>
    <div class="sponsors">

   <h3>Lorem ipsum dolor</h3>
    <Sponsor/>
    <Sponsor/>
    <Sponsor/>
    </div>
     <div class="see-all-link">   
            <a href="#">SEE ALL ></a>
        </div>
</template>

<script>
    import Sponsor from '@/components/Sponsor.vue'
    export default {
        name:'Sponsors',
        components:{
            Sponsor
        }

    }
</script>
<style scoped>
.sponsors {
    margin-bottom:50px;
}
</style>