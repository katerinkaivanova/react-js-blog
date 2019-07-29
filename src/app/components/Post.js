import React from 'react';

export default class Post extends React.Component {
    render() {
        return (
            <div className="post-block">
                <h3 className="post-title">{this.props.children}</h3>
                <p className="post-body">{this.props.postBody}</p>
                <p className="post-date">{this.props.postDate}</p>
            </div>
        );
    }
}
