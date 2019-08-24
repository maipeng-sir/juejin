import React, { Component } from 'react'
import {routeConfig} from "@router"
import {Switch,Redirect} from "react-router-dom"
export default class App extends Component {
  render() {
    return (
      <Switch>
        <Redirect from="/" to="/home" exact/>
        {
          routeConfig.map((item,index)=>(
            <Route path={item.path} key={index} render={()=>(
              <item.component/>
            )}/>
          ))
        }
      </Switch>
    )
  }
}

