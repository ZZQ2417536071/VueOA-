import Mock from 'mockjs'


const data = {
    items: [{
        "id": 101,
        "name": "离职申请",
        "title": "离职申请-张三",
        "people": "张三",
        "add_time": "2021-1-11",
        "taskname": "部门审批"
    },
    {
        "id": 102,
        "name": "离职申请",
        "title": "离职申请-李四",
        "people": "李四",
        "add_time": "2021-1-12",
        "taskname": "部门审批"
    },
    {
        "id": 103,
        "name": "请假申请",
        "title": "请假申请-王五",
        "people": "王五",
        "add_time": "2021-1-13",
        "taskname": "部门审批"
    },
    {
        "id": 104,
        "name": "请假申请",
        "title": "请假申请-张飞",
        "people": "张飞",
        "add_time": "2021-1-13",
        "taskname": "部门审批"
    },
    {
        "id": 105,
        "name": "调休申请",
        "title": "调休申请-赵云",
        "people": "赵云",
        "add_time": "2021-1-13",
        "taskname": "部门审批"
    },
    {
        "id": 106,
        "name": "住房补贴申请",
        "title": "住房补贴申请-刘飞",
        "people": "刘飞",
        "add_time": "2021-1-14",
        "taskname": "部门审批"
    },
    {
        "id": 107,
        "name": "体温检测",
        "title": "体温检测表-黄章",
        "people": "黄章",
        "add_time": "2021-1-14",
        "taskname": "部门审批"
    },
    {
        "id": 108,
        "name": "体温检测",
        "title": "体温检测表-张五",
        "people": "张五",
        "add_time": "2021-1-14",
        "taskname": "部门审批"
    },
    {
        "id": 109,
        "name": "体温检测",
        "title": "体温检测表-李老八",
        "people": "李老八",
        "add_time": "2021-1-14",
        "taskname": "部门审批"
    },
    {
        "id": 110,
        "name": "离职申请",
        "title": "离职申请-张三",
        "people": "张三",
        "add_time": "2021-1-11",
        "taskname": "部门审批"
    },
    {
        "id": 111,
        "name": "离职申请",
        "title": "离职申请-张三",
        "people": "张三",
        "add_time": "2021-1-11",
        "taskname": "部门审批"
    },
    {
        "id": 112,
        "name": "离职申请",
        "title": "离职申请-张三",
        "people": "张三",
        "add_time": "2021-1-11",
        "taskname": "部门审批"
    },
    {
        "id": 113,
        "name": "离职申请",
        "title": "离职申请-张三",
        "people": "张三",
        "add_time": "2021-1-11",
        "taskname": "部门审批"
    },
    {
        "id": 114,
        "name": "离职申请",
        "title": "离职申请-张三",
        "people": "张三",
        "add_time": "2021-1-11",
        "taskname": "部门审批"
    },
    {
        "id": 115,
        "name": "离职申请",
        "title": "离职申请-张三",
        "people": "张三",
        "add_time": "2021-1-11",
        "taskname": "部门审批"
    },
    {
        "id": 116,
        "name": "离职申请",
        "title": "离职申请-张三",
        "people": "张三",
        "add_time": "2021-1-11",
        "taskname": "部门审批"
    },
    {
        "id": 117,
        "name": "离职申请",
        "title": "离职申请-张三",
        "people": "张三",
        "add_time": "2021-1-11",
        "taskname": "部门审批"
    },
    {
        "id": 118,
        "name": "离职申请",
        "title": "离职申请-张三",
        "people": "张三",
        "add_time": "2021-1-11",
        "taskname": "部门审批"
    },
    {
        "id": 119,
        "name": "离职申请",
        "title": "离职申请-张三",
        "people": "张三",
        "add_time": "2021-1-11",
        "taskname": "部门审批"
    },
    {
        "id": 120,
        "name": "离职申请",
        "title": "离职申请-张三",
        "people": "张三",
        "add_time": "2021-1-11",
        "taskname": "部门审批"
    }
    ]
}

export default [
    {
        url: '/personal/todo',
        type: 'get',
        response: config => {
            // 获取分页信息
            const { page = 1, limit = 15 } = config.query
            const items = data.items
            return {
                code: 20000,
                data: {
                    total: items.length,
                    //根据分页信息返回数据
                    items: items.slice((page - 1) * limit, limit * page)
                }
            }
        }
    },

    // 删除事件
    {
        url: '/personal/deletetodo',
        type: 'get',
        response: config => {
            var id = config.query.id;
            const items = data.items
            var index = items.findIndex(item => {
                if (item.id == id) {
                    return true;
                }
            })
            items.splice(index, 1);
            return {
                code: 20000,
                data: {
                    message: "删除代办成功"
                }
            }
        }
    },
    // 新增代办
    {
        url: '/personal/addtodo',
        type: 'post',
        response: config => {
            var todo = config.body;
            // console.log(todo, "99999999999999999999999999")
            data.items.push(todo);
            return {
                code: 20000,
                data: {
                    message: "添加代办成功"
                }
            }
        }
    }
]