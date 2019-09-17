import VueRouter from 'vue-router'

import Home from './components/Home.vue'
import Detail from './components/Detail.vue'
import Add from './components/Add.vue'
import Edit from './components/Edit.vue'

export default new VueRouter({
    routes: [{
        path: '/',
        component: Home,
        name: 'root'
    },
    {
        path: '/detail/:id',
        component: Detail,
        name : 'detail'
    },
    {
        path: '/add',
        component: Add
    },
    {
        path: '/edit/:id',
        component: Edit
    },
    {
        path: '*',
        redirect: '/'
    }
    ]
})