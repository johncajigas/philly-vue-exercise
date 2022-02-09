<template>
   <Header v-bind:bg_color="bg_color"></Header>
   
    <PageContent v-bind:page_content="page_content" v-bind:title="title"/>
    <Footer/>
</template>

<script>
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
  import PageContent from '@/components/PageContent.vue'
  import {getPage} from '../api/request'
  export default {
    name: 'Home',
    components: {
        Header,
        PageContent,
        Footer,
        
    },
    data(){
      return {
        loading:false,
        title:null,
        bg_color:null,
        page_content:[],
        content:null,
        error:null
      }
    },
    created(){
       this.$watch(
           ()=>this.$route.params,
           ()=>{
               this.fetchData()
           },
           {immediate:true}
       )
    },
    methods : {
      fetchData(){
        this.loading = true;
        getPage(4,(data,err)=>{
              this.loading = false;
            if(err) return this.error = err.toString();
            this.title = data.title;
            this.bg_color = data.bg_color;
            this.content = data.content;
            this.page_content = data.page_content;
        });
      }   
    }
  }
</script>
