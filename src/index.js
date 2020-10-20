import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes/index';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import { store } from "./helpers";
import "./assets/css/style.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

// let env = process.env.NODE_ENV

// if(env !== 'development')
//     console.log = () => {}

ReactDOM.render(
    <Fragment>
        <Provider store={store}>
                <Routes />
        </Provider>
    </Fragment>
,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
