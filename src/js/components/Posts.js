import React from "react";
import {connect} from 'react-redux';

import {fetchPosts} from '../actions/postsActions';

import PostBody from "./PostBody";

class Posts extends React.Component {

    render() {
        const mappedPosts = this.props.posts.map((post, index) => {
            return <PostBody key={index} {...post}/>
        });

        return (
            <>
                {mappedPosts}
            </>
        );
    }

    componentDidMount() {
        this.props.dispatch(fetchPosts());
    }
}

function mapStateToProps(state) {

    return {
        posts: state.posts.posts
    };
}

export default connect(mapStateToProps)(Posts);