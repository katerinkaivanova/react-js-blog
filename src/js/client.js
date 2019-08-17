import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import 'bootstrap/dist/css/bootstrap.min.css';

import store from './store';

import Layout from './components/Layout';
import Main from "./components/Main";
import Users from "./components/Users";
import Posts from "./components/Posts";
import Post from "./components/Post";
import Comments from "./components/Comments";
import PageNotFound from "./components/PageNotFound";


class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={browserHistory}>
                    <Route path="/" component={Layout}>
                        <IndexRoute component={Main}/>
                        <Route path="posts" component={Posts} />
                        <Route path="posts/:postId" component={Post} />
                        <Route path="comments" component={Comments} />
                        <Route path="users" component={Users} />
                        <Route path="*" component={PageNotFound} />
                    </Route>
                </Router>
            </Provider>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#app'));