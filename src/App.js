import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from "./app/layouts/Layout";
import Main from "./app/pages/Main";
import Users from "./app/pages/Users";
import User from "./app/pages/User";
import PageNotFound from "./app/pages/PageNotFound";

// import "./app/styles/style.css";

class App extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Layout}>
                    <IndexRoute component={Main}/>
                    <Route path="users" component={Users}>
                        <Route path=":userId" component={User}></Route>
                    </Route>
                    <Route path="*" component={PageNotFound} />
                </Route>
            </Router>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));
