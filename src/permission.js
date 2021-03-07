import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login'] // no redirect whitelist

// 路由跳转之前，获取当前登录用户信息，动态加载用户角色对应的路由
router.beforeEach(async(to, from, next) => {
  // 全局的NProgress开始工作
  NProgress.start()
  // 设置页面标题
  document.title = getPageTitle(to.meta.title)
  // 获取用户tocken
  const hasToken = getToken()
  // 如果用户已经登录了
  if (hasToken) {
    // 不能再访问登录页面，跳转首页
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } else {
      const hasGetUserInfo = store.getters.name
      // 如果已经获取过用户信息了，直接放行
      if (hasGetUserInfo) {
        next()
      } else {
        // 如果没有获取过用户信息，调用vuex的user/getInfo获取用户信息
        try {
          const { roles } = await store.dispatch('user/getInfo')
          // 获取用户对应的权限菜单(这里通过vuex保存用户菜单信息，router.addRoutes没有意义)
          const accessRoutes = await store.dispatch('permission/generateRoutes', roles)
          router.addRoutes(accessRoutes)
          // replace: true 确保导航不会有历史记录
          next({ ...to, replace: true })
        } catch (error) {
          // 如果有错，重置tocken并且来到登录页面
          await store.dispatch('user/resetToken')
          Message.error(error || 'Has Error')
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else {
    // 没有tocken
    if (whiteList.indexOf(to.path) !== -1) {
      // 在白名单中直接放行
      next()
    } else {
      // 不在白名单中来到登录页面
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
