import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/401',
    name: '401',
    component: () => import('@/views/401'),
    hidden: true
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      // name: 'Dashboard',
      hidden: true,
      component: () => import('@/views/dashboard/index'),
      meta: { title: '', icon: 'dashboard' }
    }]
  },
  {
    path: '/personal',
    component: Layout,
    redirect: '/personal/todo',
    meta: { title: '个人事务', icon: 'user' },
    children: [
      {
        path: 'todo',
        name: 'todo',
        component: () => import('@/views/personal/Todo'),
        meta: { title: '代办事项', icon: 'todo' }
      },
      {
        path: 'addtodo',
        name: 'addtodo',
        component: () => import('@/views/personal/addTodo'),
        meta: { title: '新增代办', icon: 'todo' },
        hidden: true
      },
      {
        path: 'timelist',
        name: 'timelist',
        component: () => import('@/views/personal/Timelist'),
        meta: { title: '日程安排', icon: 'data' }
      },
      // {
      //   path: 'allocMenu',
      //   name: 'allocMenu',
      //   component: () => import('@/views/ums/role/allocMenu'),
      //   meta: {title: '分配权限'},
      //   hidden: true
      // },

    ]
  },
  {
    path: '/office',
    component: Layout,
    name: 'office',
    meta: { title: '信息管理', icon: 'msg' },
    children: [
      {
        path: 'carlist',
        name: 'office',
        component: () => import('@/views/office/Carlist'),
        meta: { title: '车辆管理', icon: 'car' }
      },
      {
        path: 'meetlist',
        name: 'office',
        component: () => import('@/views/office/MeetList'),
        meta: { title: '会议管理', icon: 'meet' }
      },
      {
        path: 'employeelist',
        name: 'office',
        component: () => import('@/views/office/EmployeeList'),
        meta: { title: '员工信息管理', icon: 'emp' }
      },
      {
        path: 'employeeadd',
        name: 'office',
        component: () => import('@/views/office/EmployeeAdd'),
        meta: { title: '新增员工', icon: 'emp' },
        hidden: true
      },
      {
        path: 'employeesalary',
        name: 'office',
        component: () => import('@/views/office/EmployeeSalary'),
        meta: { title: '员工工资管理', icon: 'money' }
      },

    ]
  },
  
  {
    path: '/data',
    component: Layout,
    name: 'data',
    meta: { title: '数据汇总', icon: '数据' },
    children: [
      {
        path: 'mainwatch',
        name: 'Data',
        component: () => import('@/views/data/Salary'),
        meta: { title: '工资数据', icon: '工资管理' }
      },
      {
        path: 'watch',
        name: 'Data',
        component: () => import('@/views/data/People'),
        meta: { title: '人员数据', icon: '员工' }
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true },
  {
    path: '/setting',
    component: Layout,
    alwaysShow: true,
    redirect: '/setting/index',
    meta: { title: '系统设置', icon: '设置' },
    children: [{
      path: 'index',
      name: 'Setting',
      component: () => import('@/views/setting/authority'),
      meta: { title: '权限设置', icon: '权限' }
    }]
  },

]

// asyncRouterMap：需要进行权限过滤的页面
export const asyncRoutes = [
  {
    path: '/govfile',
    component: Layout,
    name: 'govfile',
    meta: {
      title: '公文管理', icon: 'article'
    },
    children: [{
      path: 'acceptfile',
      name: 'govfile',
      component: () => import('@/views/govfile/AcceptFile'),
      meta: {
        title: '收文管理', icon: '收文',
        roles: ['admin', 'editor']
      }
    },
    {
      path: 'sendfile',
      name: 'govfile',
      component: () => import('@/views/govfile/SendFile'),
      meta: {
        title: '发文管理', icon: '发文',
        roles: ['admin']
      }
    },
    ]
  },
  // {
  //   path: '/permission',
  //   component: Layout,
  //   redirect: '/permission/page',
  //   alwaysShow: true, // will always show the root menu
  //   name: 'Permission',
  //   meta: {
  //     title: 'Permission',
  //     icon: 'tree',
  //     roles: ['admin', 'editor'] // you can set roles in root nav
  //   },
  //   children: [
  //     {
  //       path: 'page',
  //       component: () => import('@/views/permission/page'),
  //       name: 'PagePermission',
  //       meta: {
  //         title: 'Page Permission',
  //         roles: ['admin'] // or you can only set roles in sub nav
  //       }
  //     },
  //     {
  //       path: 'directive',
  //       component: () => import('@/views/permission/directive'),
  //       name: 'DirectivePermission',
  //       meta: {
  //         title: 'Directive Permission'
  //         // if do not set roles, means: this page does not require permission
  //       }
  //     }
  //   ]
  // }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
