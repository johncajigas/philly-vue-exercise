<template>
     <div class="column">
                <div class="img-placeholder bg-dark"/>
                <div class="img-overlay bg-light">
                       <a href="#"><font-awesome-icon :icon="['fa','smile']"/><br/>Lorem ip sum do</a>
                </div>
                <div class="post-content">
                <p>Character count 115 dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>
            </div>
</template>
<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSmile } from "@fortawesome/free-solid-svg-icons";
library.add(faSmile)
export default {
    
    name:'PostPreview'
}
</script>
<style scoped>

.img-placeholder {
    aspect-ratio: 1;
 
}
.img-overlay{
    width:169px;
    height:129px;
    display:flex;
   align-items:center;
   justify-content: center;
   margin:0 auto;
   margin-top:-50px;
   text-align: center;
   color:#0f4d90!important;
   font-family: 'Montserrat';
   font-size:25px;
}
.post-content {
    margin:25px 0;
}
</style>