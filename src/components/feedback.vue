<template>
	<link rel="stylesheet" type="text/css" href=" ../../static/mui/css/feedback.css" />
 <header class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<button id="submit" class="mui-btn mui-btn-blue mui-btn-link mui-pull-right">发送</button>
			<h1 class="mui-title">问题反馈</h1>
		</header>
		<div class="mui-content">
			<div class="mui-content-padded">
				<div class="mui-inline">问题和意见</div>
				<!--<a class="mui-pull-right mui-inline" href="#popover">
					快捷输入
					<span class="mui-icon mui-icon-arrowdown"></span>
				</a>-->
				<!--快捷输入具体内容，开发者可自己替换常用语-->
				<div id="popover" class="mui-popover">
					<div class="mui-popover-arrow"></div>
					<div class="mui-scroll-wrapper">
						<div class="mui-scroll">
							<ul class="mui-table-view">
								<!--仅流应用环境下显示-->
								<li class="mui-table-view-cell stream">
									<a href="#">桌面快捷方式创建失败</a>
								</li>
								<li class="mui-table-view-cell" @click="_copy($event)">界面显示错乱</li>
								<li class="mui-table-view-cell" @click="_copy($event)">启动缓慢，卡出翔了</li>
								<li class="mui-table-view-cell" @click="_copy($event)">偶发性崩溃</li>
								<li class="mui-table-view-cell" @click="_copy($event)">UI无法直视，丑哭了</li>
							</ul>
						</div>
					</div>

				</div>
			</div>
			<div class="row mui-input-row">
				<textarea id='question' class="mui-input-clear question" placeholder="请详细描述你的问题和意见..."></textarea>
			</div>

			<p class='e-mail'>QQ/邮箱</p>
			<div class="mui-input-row">
				<input id='contact' type="text" class="mui-input-clear contact" placeholder="(选填,方便我们联系你 )" />
			</div>

		</div>
		<script src=" ../../static/mui/js/feedback.js" ></script>

</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello World!'
    }
  },ready(){
			mui.init();
			mui('.mui-scroll-wrapper').scroll();
		
  },methods:{
  	_copy:function(text){
  		document.getElementById("question").value = document.getElementById("question").value + text.toElement.innerHTML
;
	  mui('.mui-popover').popover('toggle')
  	}
  	
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mui-input-row {
    padding: 10px;

}.mui-content-padded {
    margin: 10px;
    margin-top: 50px;
}
p {
    color: #000;
}
.e-mail{padding: 10px;}
</style>
