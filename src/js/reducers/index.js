import { combineReducers } from "redux"

import posts from "./postsReducer"
import post from "./postReducer"
import comments from "./commentsReducer"
import users from "./usersReducer"

export default combineReducers({
  posts: posts,
  post: post,
  comments: comments,
  users: users,
})

/* store.state

{
  posts: {
    posts: [],
    fetching: false,
    fetched: false,
    error: null,
  },
  comments: {
    comments: [],
    fetching: false,
    fetched: false,
    error: null,
  },
  users: {
    users: [],
    fetching: false,
    fetched: false,
    error: null,
  },
}

*/