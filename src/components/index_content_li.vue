<template>
					<li class="mui-table-view-cell">

					<div class="mui-slider-right mui-disabled" id="{{ isActive ? 'on' : 'off'  }}" @click="_click(this.isActive?this.isActive=false:this.isActive=true)">
						<a class="mui-btn mui-btn-grey mui-icon mui-icon-qq"></a>
					</div>
					<div class="mui-slider-handle">
						右滑显示多功能菜单
					</div>
					</li>
</template>

<script>
export default {
  data () {
    return {
       isActive: true
    }
  }
}
</script>

<style scoped>
#on>a{ color: #afaeae;}
#off>a{ color: #f00;}
.mui-table-view-cell>.mui-slider-left>.mui-btn, .mui-table-view-cell>.mui-slider-right>.mui-btn{
	padding: 0px 20px;
	border-radius: 5px;

}
</style>
