import { createApp } from 'vue'
import {createRouter,  createWebHistory } from 'vue-router'
import {createStore} from 'vuex';
import App from './App.vue'

import Login from './components/Authentication/Login'
import Welcome from './components/Authentication/Welcome'
import UserList from "@/components/Authentication/UserList";


const store  = createStore({
    state(){
        return {
            counter:0,
            isloading: false
        }
    },
    mutations: {
        increment(state, payload){
            state.counter= state.counter  + payload.value
        },
        setLoadingState(state, payload){
            state.isloading = payload.value
        }
    },
    //actions best in handling asynchronous changes
    actions:{
        _addCounter(context, payload){
            context.commit('setLoadingState', {"value": true})

            console.log("Vuex Action triggered (context)" , JSON.stringify(context) )
            console.log("Vuex Action triggerd (payload)", JSON.stringify(payload))
            setTimeout( ()=>{
                     context.commit('increment',payload)
                     context.commit('setLoadingState', {"value": false})
            },2000)
        }
    },
    getters: {
        get_counter(state){
            return state.counter
        },
        get_loading(state){
            return state.isloading
        }
    }
});

const router = new createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/login', component: Login },
        { path: '/home', component: Welcome },
    ]
})


const app = createApp(App)


app.component("user-list",UserList)
app.use(router)
app.use(store)


router.isReady().then(()=>{
    app.mount('#app')
})

