import React, {Component} from 'react';
import {connect} from 'react-redux';

import Menu from "./Menu";
import MenuItem from "./MenuItem";

class Layout extends Component {
    constructor(props) {
        super(props);
        this.brand = "Redux blog!";
    }

    isActive(href) {
        return window.location.pathname === href;
    }

    render() {
        return (
            <>
                <Menu brand={this.brand}>
                    <MenuItem href="/" active={this.isActive("/")}>Главная</MenuItem>
                    <MenuItem href="/posts" active={this.isActive("/posts")}>Посты</MenuItem>
                    <MenuItem href="/comments" active={this.isActive("/comments")}>Комментарии</MenuItem>
                    <MenuItem href="/users" active={this.isActive("/users")}>Пользователи</MenuItem>
                </Menu>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {this.props.children}
                        </div>
                    </div>
                </div>
                <footer className="card-footer">
                    &copy; 2019
                </footer>
            </>
        );
    }
}

export default Layout;
