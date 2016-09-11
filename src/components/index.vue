<template>
  <!--<div class="hello">
  	  <a v-link="{ path: '/index' }">Go to Foo</a>
    <a v-link="{ path: '/bar' }">Go to Bar</a>
  </div>-->
  <!--开始-->
	<div id="offCanvasWrapper" class="mui-off-canvas-wrap mui-draggable mui-scalable">
			<!--侧滑菜单部分-->
			<index-left></index-left>
			<!--主界面部分-->
			<index-right></index-right>
</template>
<script>
import indexLeft from './index_left.vue';
import indexRight from './index_right.vue'
export default {
  data () {
    return {
      msg: 'Hello World!'
    }
  },  methods:{

  	
  },components: {
  	
		indexLeft,
		indexRight
  			}
}

//开始

//结束


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
			html,body {
				background-color: #efeff4;
			}
			p {
				text-indent: 22px;
			}
			span.mui-icon {
				font-size: 14px;
				color: #007aff;
				margin-left: -15px;
				padding-right: 10px;
			}
			.mui-off-canvas-left {
				color: #fff;
			}
			.title {
				margin: 35px 15px 10px;
			}
			.title+.content {
				margin: 10px 15px 35px;
				color: #bbb;
				text-indent: 1em;
				font-size: 14px;
				line-height: 24px;
			}
			input {
				color: #000; 
			}
</style>
