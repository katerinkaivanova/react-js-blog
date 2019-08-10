import React from "react";
import {connect} from 'react-redux';

import {fetchPost} from '../actions/postActions';

import PostBody from "./PostBody";

class Post extends React.Component {

    render() {
        console.log(this.props.params.postId);
        return (
            <>
                {this.props.post && <PostBody {...this.props.post}/>}
            </>
        );
    }

    componentDidMount() {
        this.props.dispatch(fetchPost(this.props.params.postId));
    }
}

function mapStateToProps(state) {
    return {
        post: state.post.post
    };
}

export default connect(mapStateToProps)(Post);