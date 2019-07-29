import React from 'react';

import Post from "./Post";

export default class Blog extends React.Component {
    render() {
        const posts = this.props.posts.map((post, index) => {
            return (
                <Post key={index} postBody={post.postBody} postDate={post.postDate}>
                    {post.title}
                </Post>
            );
        });

        return (
            <div>
                {posts}
            </div>
        );
    }
}
