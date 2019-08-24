import {
    Bought,
    Mine,
    Allbook
} from "@pages"

export const tabBarRoute = [
    {
        path:"/allbook",
        component:Allbook,
        meta:{
            flag:true
        },
        name:"全部小册",
        icon:"\ue61b"
    },
    {
        path:"/bought",
        component:Bought,
        meta:{
            flag:true
        },
        name:"已购",
        icon:"\ue717"
    },
    {
        path:"/mine",
        component:Mine,
        meta:{
            flag:true,
            auth:true
        },
        name:"我",
        icon:"\ue64b"
    }
]

export const noTabBarRoute = [
    {
        // path:"/login",
        // component:Login,
        // meta:{
        //     flag:false
        // },
        // name:"登录",
       
    }
]

export const routeConfig = tabBarRoute.concat(noTabBarRoute)