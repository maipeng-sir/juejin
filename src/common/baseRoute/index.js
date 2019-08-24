import React, { Component } from 'react'
import Layout from "@layout"
import {Route} from "react-router-dom"
import auth from "@common/auth"
class BaseRoute extends Component {
    render() {
        let {component,path,...rest} = this.props;
        return (
            <layout>
                
            </layout>
        )
    }
}
export default BaseRoute;