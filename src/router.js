module.exports = function(router,Vue,App){
//引入 三个参数
var Foo = Vue.extend({
    template: '<p>This is foo!</p>'
})

var Bar = Vue.extend({
    template: '<p>This is bar!</p>'
})
//配置路由跳转
router.map({
    '/index': {
        component: function(reslove){
				 require(['./components/index.vue'],reslove)
			},auth: true,
    },
    '/index/:url': {
        component: function(reslove){
				 require(['./components/index_content.vue'],reslove)
			},auth: true,
    },
    '/feedback': {
         component: function(reslove){
				 require(['./components/feedback.vue'],reslove)
			},auth: true,
    },
    '/about': {
         component: function(reslove){
				 require(['./components/about.vue'],reslove)
			},auth: true,
    }
})
   router.redirect({
'*': '/index'
})


//路由起始位置
router.start(App, '#app')

}