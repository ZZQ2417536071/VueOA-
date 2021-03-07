import request from '@/utils/request'

export function getTodoList(params) {
    return request({
        url: '/personal/todo',
        method: 'get',
        params
    })
}

export function deleteTodoList(params) {
    return request({
        url: '/personal/deletetodo',
        method: 'get',
        params
    })
}

// 注意post请求参数需要通过data来传递
export function addTodo(params) {
    return request({
        url: '/personal/addtodo',
        method: 'post',
        data:params
    })
}