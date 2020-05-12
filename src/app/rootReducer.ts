import { combineReducers } from '@reduxjs/toolkit'
import postReducer from '../features/posts/postSlice';
import commentReducer from '../features/comments/commentSlice';

const rootReducer = combineReducers({
  posts: postReducer,
  comments: commentReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
