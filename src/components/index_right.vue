<template>
	<script   src="https://code.jquery.com/jquery-3.1.0.js"  ></script>
 		<div class="mui-inner-wrap">
				<header class="mui-bar mui-bar-nav">
					<a href="#offCanvasSide" class="mui-icon mui-action-menu mui-icon-bars mui-pull-left"></a>
					<a class="mui-action-back mui-btn mui-btn-link mui-pull-right">关闭</a>
					<h1 class="mui-title">美拍</h1>
				</header>
				<div id="offCanvasContentScroll" class="mui-content mui-scroll-wrapper">
					<div class="mui-scroll">
						<div class="mui-content-padded">
							<p>
							
					<div class="pic" v-for='i in data' >
						<a v-link="'/index/'+encodeURIComponent(i.mp4_url)">
						<img class="pic_big"  v-bind:src=i.pic_url alt="" />
						<img class="touxiang"  v-bind:src=i.tx_url alt="" />
						</a>
					</div>
							</p>

						</div>

					</div>
				</div>
				<div class="mui-off-canvas-backdrop"></div>
			</div>
	
</template>

<script>

export default {
  data () {
    return {
      msg: '9999',
			data:[]
    }
  },ready () {
 mui('.pic').on('tap','a',function(){document.location.href=this.href;});
  	  mui('#offCanvasSideScroll').scroll();
			mui('#offCanvasContentScroll').scroll();
  	
 var me = this
$.ajax(  
    {  
        type:'get',  
        url : 'http://asdf666.herokuapp.com/',  
        dataType : 'jsonp',  
        success  : function(data) {  
    	me.data=data

        },  
        error : function() {  
            alert('请刷新重试');  
        }  
    }  
);  
	 }
	
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pic .pic_big {
    width: 100%;
    height: 100%;
}
.pic {
    position: relative;
    width: 50%;
    float: left;
    margin-bottom: 4px;
    padding-bottom: 20px;
    background-color: #fff;
    border: 2px solid #efeff4;
}

img.touxiang {
    width: 30px;
    height: 30px;
    position: absolute;
    bottom: 5px;
    left: 10px;
    border-radius: 50%;
    border: 2px solid #fff;
}

</style>
