<template>
 <div class="container content-align is-overlay">
            <div v-if="heroImage">
                <figure class="image">
                    <img src="../assets/images/love-park-hero.jpeg" > 
                </figure>
                
            </div>
            <h2 v-if="!heroImage">{{title}}</h2>
    </div>
</template>
<script>
export default {
    name: 'Hero',
    props:{
        heroImage:Boolean,
        title: {
            type:String,
            default:null
        }
    },
   
}
</script>