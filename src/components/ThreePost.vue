<template>

        <h3>Lorem ipsum dolor</h3>
        <div class="columns">
            <PostPreview/>
            <PostPreview/>
            <PostPreview/>
          
        </div>
          <div class="see-all-link">   
            <a href="#">SEE ALL ></a>
        </div>
        
</template>
<script>
import PostPreview from '@/components/PostPreview'
export default {
    name:'ThreePost',
    components:{    
        PostPreview
    }

}

</script>