<template>
 <header class="mui-bar mui-bar-nav">
     <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
     <h1 class="mui-title">视频</h1>
 </header>
 <div class="mui-content">
     <!--{{$route.params.url}}-->
     <!--decodeURIComponent()-->
    
 <video v-bind:src=decodeURIComponent($route.params.url) controls="controls">
你的浏览器该换了
</video>
     
     
     
			<ul id="OA_task_2" class="mui-table-view">
				
	<content-li v-for="i in 15"></content-li>
				
				
			</ul>
     
     
 </div>
</template>

<script>
import contentLi from './index_content_li.vue';
export default {
  data () {
    return {
      msg: 'Hello World!',
    
    }
  },ready(){
  },methods:{
  },components: {
  	
		contentLi
  			}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
video{width: 100%;}
.mui-icon-qq {
    background-color: #d2d1d1;
}

</style>
