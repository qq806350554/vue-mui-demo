<template>
<header class="mui-bar mui-bar-nav">
    <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
    <h1 class="mui-title">关于</h1>
</header>
<div class="mui-content">
     <ul>
  	<li class="mui-icon mui-icon-star">VUE前端框架</li>
  	<li class="mui-icon mui-icon-star " >vue-cli脚手架</li>
  	<li class="mui-icon mui-icon-star ">MUI侧滑导航</li>
  	<li class="mui-icon mui-icon-star ">后台是一个简单的nodejs做的小爬虫</li>
  	<li class="mui-icon mui-icon-star ">ajaX 跨域接收json数据</li>
  	<li class="mui-icon mui-icon-star ">Hbuilder开发与打包</li>
  </ul>
</div>
  
</template>

<script>




			



export default {
  data () {
    return {
      msg: 'Hello World!'
    }
    	
    },ready (){
    	mui.init({
				swipeBack: true //启用右滑关闭功能
			});
    	
    },methods:{
    	a:function(){
    		alert(111)
    	}
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.mui-icon-star:before {
    content: '\e408';
    position: absolute;
    left: 15px;
    font-size: 15px;
    color: #42b983;
    font-weight: bolder;
}
li {
    list-style-type: none;
    line-height: 50px;
    font-size: 14px;
    display: block;
}
</style>
