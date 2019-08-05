import React, {Component} from 'react';
import CommentsList from "../components/CommentsList";

class Comments extends Component {
    render() {
        return (
            <div>
                {
                    (!this.props.children) ? (<CommentsList />) : (this.props.children)
                }
            </div>
        );
    }
}

export default Comments;
