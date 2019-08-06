import React, {Component} from 'react';
import axios from 'axios';

import PostBody from "./PostBody";

class PostsList extends Component {

    render() {
        if (!this.props.posts.length) {
            return null
        }

        const posts = this.props.posts.map((post, index) => {
            return <PostBody key={index} {...post}/>
        });

        return (
            <>
                <h1>Посты</h1>
                {posts}
            </>
        );
    }
}

export default PostsList;
