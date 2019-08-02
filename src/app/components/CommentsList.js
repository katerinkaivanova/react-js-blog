import React, {Component} from 'react';
import axios from 'axios';

import CommentBody from "./CommentBody";

class CommentsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        }
    }

    render() {
        if (!this.state.comments) {
            return null
        }

        const comments = this.state.comments.map(comment => {
            return <CommentBody key={comment.id} {...comment}/>
        });

        return (
            <div>
                <h1>Комментарии</h1>
                {comments}
            </div>
        );
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/comments`).then(response => {
            this.setState({comments: response.data});
        });
    }
}

export default CommentsList;

