import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRouterMap = [
    {
        path: '/',
        component: () => import('@/view/index'),
        redirect:'Index'
    },
    {
      path: '/Index',
      name: 'Index',
      component: () => import('@/view/index'),
      redirect:'Productpage',
      children:[
        {
          path: '/Productpage',
          name: 'Productpage',
          meta:{title:"产品首页",noCache:true},
          component: () => import('@/view/Index/index'),
        },
        {
          path: '/servicecontent',
          name: 'servicecontent',
          meta:{title:"服务内容",noCache:true},
          component: () => import('@/view/servicecontent/index'),
        },
        {
          path:"/hostcommodities",
          name:'hostcommodities',
          meta:{title:"热卖商品",noCache:true},
          component:() => import("@/view/hostcommodities/index")
        }
      ]
    },  
]

export default new Router({
  // mode:'hash ',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap,
})