import React, { Component } from 'react'
import {Navbar} from "../components/Navbar"

export class StaticLayout extends Component {

    render() {

        let { children } = this.props
        return (
            <>
                <Navbar/>
                {children}
            </>
        )
    }
}
