import React from "react";
import {connect} from 'react-redux';

import {fetchUsers} from '../actions/usersActions';

import UserProfile from "./UserProfile";

class Users extends React.Component {

    render() {
        const mappedUsers = this.props.users.map((user, index) => {
            return <UserProfile key={index} {...user}/>
        });

        return (
            <>
                {mappedUsers}
            </>
        );
    }

    componentDidMount() {
        this.props.dispatch(fetchUsers());
    }
}

function mapStateToProps(state) {

    return {
        users: state.users.users
    };
}

export default connect(mapStateToProps)(Users);