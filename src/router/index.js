import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import Login from '../views/login/login.vue'
import Reg from '../views/register/register.vue'
import GameContent from '../views/GameContent/GameContent'
import userCenter from "../views/userCenter/userCenter"
import mydetails from "../views/userCenter/mydetails"
import overview from "../views/userCenter/overview"
import games from "../views/userCenter/games"
import security from "../views/userCenter/security"
import about from '../views/about/About.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
	path:'/login',
	component:Login
  },
  {
  	path:'/register',
  	component:Reg
  },
  {
    path: '/GameContent',
    component: GameContent
  },
    {
      // TODO: 路由守护
      path: '/userCenter',
      meta: {
        requireAuth: true,
      },
      component: userCenter,
      children: [
        {
          path: 'mydetails',//以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;在生成路由时，主路由上的path会被自动添加到子路由之前，所以子路由上的path不用在重新声明主路由上的path了。
          name: 'mydetails',
          meta: {
            requireAuth: true,
          },
          component: mydetails
        },
        {
          path: 'overview',
          name: 'overview',
          meta: {
            requireAuth: true,
          },
          component: overview
        },
        {
          path: 'games',
          name: 'games',
          meta: {
            requireAuth: true,
          },
          component: games
        },
        {
          path: 'security',
          name: 'security',
          meta: {
            requireAuth: true,
          },
          component: security
        },

      ]
    },
    {
      path: '/about',
      component: about
    }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
    if (localStorage.Authorization) {  // 获取当前的token是否存在
      console.log("token存在");
      console.log(localStorage.Authorization)
      next();
    } else {
      console.log("token不存在");
      alert('请先登陆账号');
      next({
        path: '/login', // 将跳转的路由path作为参数，登录成功后跳转到该路由
        query: {redirect: to.fullPath}
      })
    }
  }
  else { // 如果不需要权限校验，直接进入路由界面
    console.log("啥也没事")
    next();
  }
});

export default router
