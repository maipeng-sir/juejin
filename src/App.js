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
           <BaseRoute key={index} {...item}/>
        ))
      }
      </Switch>
    )
  }
}

