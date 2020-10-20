import React, { Component, Suspense } from 'react';
import { Route, Router, Redirect } from "react-router-dom";

import Routers from "./routes"
import * as Layout from "../layout";
import * as Pages from "../pages"
import { history } from "../helpers"
// import { languages } from 'languages';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux'
// import { STAFF_ROLE_ID } from 'helpers/variables'

class RoutesClass extends Component {

    constructor(props) {
        super(props)
        this.state = {
            renderRoute: false,
            pathname: null,
            loading: true,
        }
    }

    render() {
        console.log(Routers,"Routers")

        return (
            <Suspense fallback="asdasd">
                {/* <ThemeContext.Provider value={languages[languageSelected]}> */}
                    <Router history={history} >

                        {Routers.map(({ component, redirect, path, exact = false,  childrens = [] }) => {

                            if (childrens.length > 0) {


                                return (
                                    <Route
                                        path={path}
                                        exact={exact}
                                        key={path}
                                        render={(props) => {


                                            if (redirect) {
                                                if (props.location.pathname === path) {
                                                    props.history.push(redirect)
                                                }
                                            }

                                            const LayoutComponent = Layout[component]

                                            return (

                                                <LayoutComponent {...props} >

                                                    {childrens.map(({ component: ChildrenComponent, path: childrenPath, exact = false, auth = true }) => {

                                                        return <Route
                                                            path={path + childrenPath}
                                                            exact={exact}
                                                            key={path + childrenPath}
                                                            render={(props) => {

                                                                let PageComponent = Pages[ChildrenComponent]

                                                                return <PageComponent {...props} />
                                                            }}

                                                        />

                                                    })}
                                                </LayoutComponent>
                                            )

                                        }}

                                    />
                                )


                            }

                            return <Route
                                path={path}
                                exact={exact}
                                key={component || 2322}
                                render={(props) => {
                                    // if (redirect) {
                                    //     if (props.location.pathname === path) {
                                    //         props.history.push(redirect)
                                    //     }
                                    // }
                                    // if (auth) {
                                    //     this.handleRedirection()
                                    // }
                                    if (component) {
                                        let PageComponent = Pages[component]
                                        return <PageComponent />
                                    }
                                    return <div>tsrdgs</div>
                                }}

                            />

                        })}
                    </Router>
                {/* </ThemeContext.Provider> */}
            </Suspense>


        );

    }

}


// const mapStateToProps = (state) => {
//     return state.theme
// }

export default RoutesClass;