<template>
    <div class="sponsor">
        <div class="img-placeholder bg-dark"/>
        <div class="sponsor-content">
            <div class="date">Jun. 01, 2019</div>
            <div class="description">
<a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sodales ex eget puru tempus convallis. Donec non fermentum </a></div>
        </div>
    </div>
</template>
<script>
    export default {
        name:'Sponsor'
    }
</script>
<style scoped>
    .sponsor {
        display:flex;
         align-items: center;
         border-bottom: solid 1px #4a4a4a;
         padding:15px 0;
    }
    .img-placeholder {
        height:64px;
        width:112px;
    }
    .sponsor-content{
        padding-left:25px;
    }
</style>