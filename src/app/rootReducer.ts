import { combineReducers } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice';
import postReducer from '../features/posts/postSlice';
import commentReducer from '../features/comments/commentSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  posts: postReducer,
  comments: commentReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
