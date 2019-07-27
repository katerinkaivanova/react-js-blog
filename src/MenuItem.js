import React from 'react';
import PropTypes from 'prop-types';

export default class MenuItem extends React.Component {
    render() {
        return (
            <a href={this.props.href}>{this.props.children}</a>
        );
    }
}

MenuItem.defaultProps = {
    href: '/',
    children: 'Главная страница'
};

MenuItem.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired
};
