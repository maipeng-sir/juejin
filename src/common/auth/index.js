import React, { Component,Fragment } from 'react'

export default class index extends Component {
    render() {
        let {path,meta} = this.props
       
        if(meta.auth && path!="/login"){
            let token = sessionStorage.getItem("token")
            if(!token){
                return <Redirect to="/login"/>
            }else{
                return <pageWrapper {...this.props}/>
            }
        }
        return  <pageWrapper {...this.props}/>
    }
}
