import React from "react";
import {connect} from 'react-redux';

import {fetchComments} from '../actions/commentsActions';

import CommentBody from "./CommentBody";

class Comments extends React.Component {

    render() {

        console.log(this.props);

        const mappedComments = this.props.comments.map((comment, index) => {
            return <CommentBody key={index} {...comment}/>
        });

        return (
            <>
                {mappedComments}
            </>
        );
    }

    componentDidMount() {
        this.props.dispatch(fetchComments());
    }
}

function mapStateToProps(state) {

    return {
        comments: state.comments.comments
    };
}

export default connect(mapStateToProps)(Comments);