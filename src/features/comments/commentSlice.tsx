import { createSlice } from '@reduxjs/toolkit';
import Service from "../../services";
import { PostType } from '../../types';

export const commentSlice = createSlice({
  name: 'comments',
  initialState: {
    loading: 'idle',
    comments: [],
  },
  reducers: {
    commentsLoading(state, action) {
      if (state.loading === 'idle') {
        state.loading = 'pending'
      }
    },
    commentsReceived: (state: any, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle'
        state.comments = action.payload
      }
    }
  },
});

export const { commentsLoading, commentsReceived } = commentSlice.actions;

export const fetchAllCommentsById = (post: PostType) => async (dispatch: any) => {
  // @ts-ignore
  dispatch(commentsLoading())
  const response = await Service.fetchCommentsByPostId(post.id);

  dispatch(commentsReceived(response));
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectComments = (state: any) => state.comments;

export default commentSlice.reducer;
