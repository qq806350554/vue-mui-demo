<template>
  	<!--侧滑菜单部分-->
			<aside id="offCanvasSide" class="mui-off-canvas-left">
				<div id="offCanvasSideScroll" class="mui-scroll-wrapper">
					<div class="mui-scroll">
						<div class="content">
				<span  class="touxiang" >
						<img src="../assets/touxiang.jpg"/>
					</span> 
							<p   class="qianming" style="margin: 10px 15px;" >
								<a  v-link = "'/index99'">锄禾日当午，汗滴禾下土。</a>
							</p>

						</div>
						<ul class="mui-table-view mui-table-view-chevron mui-table-view-inverted">
							<li  class="mui-table-view-cell" >
								<a v-link="'/index'" class="mui-navigate-right"  >
									首页
								</a>
							</li>
							<!--<li class="mui-table-view-cell">
								<a class="mui-navigate-right">
									活动
								</a>
							</li>-->
							<li class="mui-table-view-cell">
								<a class="mui-navigate-right">
<button id='alertBtn' type="button" class="" @click="_alert">赞助</button>
								</a>
							</li>
							<li class="mui-table-view-cell ok">
								<a class="mui-navigate-right " v-link="'/about'">
									关于
								</a>
							</li>
							<!--<li class="mui-table-view-cell">
								<a class="mui-navigate-right">
									宣传
								</a>
							</li>-->
							<li class="mui-table-view-cell ok">
								<a class=" mui-navigate-right" v-link="'/feedback'">
									反馈
								</a>
							</li>
						</ul>
					</div>
				</div>
			</aside>
		 <div id="info"></div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello World!'
    }
  },
  methods:{
  	href: function(){	
  		
		alert(555666)
  		},
  	_close: function(){
  				mui('#offCanvasWrapper').offCanvas('close');
  	},
  	_alert:function(){
    			mui.alert('哈哈，不用了', '你还真捐啊', function() {
					info.innerText = '';
				});
    	}
  },ready () {
 mui('.ok').on('tap','a',function(){document.location.href=this.href;});
 }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.touxiang img{
	    width: 100%;
    height: 100%;
}
span.touxiang {
    display: block;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    margin: 40px auto;
    border: 2px solid #060606;
}
p.qianming {
    background-color: #3c3838;
    color: #fff;
    padding: 15px 10px;
    border-radius: 5px;
}
button#alertBtn {
    font-size: 17px;
    padding: 0px;
    border: 0px solid;
    color: #42b983;
    width: 100%;
    text-align: left;
    
    background-color: inherit;
}
</style>
