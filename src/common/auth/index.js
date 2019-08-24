import React, { Component} from 'react'
import {Redirect} from "react-router-dom";
export default (PageWrapper)=>{
  return class  extends Component {
        render() {
            let {path,meta} = this.props
            //判断当前组件是否需要权限校验 并且路径不为login
            if(meta.auth && path!="/login"){
                //判断用户是否登陆
                let token = sessionStorage.getItem("token")              
                if(!token){
                    //如果没有登陆则跳转到登陆页面
                    return <Redirect to="/login"/>
                }else{
                    //如果已经登陆则去相对应的页面
                    return <PageWrapper {...this.props}/>
                }          
            }
            //如果当前组件不需要权限校验的时候
            return <PageWrapper {...this.props}/>
        }
    }
}
