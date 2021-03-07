import store from '@/store'

/**
 * 检测当前登录用户是否含有指定的角色，在页面使用，用于根据当前登录用户的角色显示不同的页面
 * @param {Array} value
 * @returns {Boolean}
 * @example see @/views/permission/directive.vue
 */
// 判断当前登录的用户是否包含指定的角色
export default function checkPermission(value) {
  if (value && value instanceof Array && value.length > 0) {
    const roles = store.getters && store.getters.roles
    const permissionRoles = value
    const hasPermission = roles.some(role => {
      return permissionRoles.includes(role)
    })

    if (!hasPermission) {
      return false
    }
    return true
  } else {
    console.error(`need roles! Like v-permission="['admin','editor']"`)
    return false
  }
}
