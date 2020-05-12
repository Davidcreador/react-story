import { createSlice } from '@reduxjs/toolkit';
import Service from "../../services";
import { PostType } from '../../types';

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    loading: 'idle',
    posts: [],
  },
  reducers: {
    postsLoading(state, action) {
      if (state.loading === 'idle') {
        state.loading = 'pending'
      }
    },
    postsReceived: (state: any, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle'
        state.posts = action.payload
      }
    },
  },
});

export const { postsLoading, postsReceived } = postsSlice.actions;

export const fetchAllPosts = () => async (dispatch: any) => {
  // @ts-ignore
  dispatch(postsLoading())
  let response: [PostType] = await Service.fetchPosts();
  dispatch(postsReceived(response));
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectPosts = (state: any) => state.posts;

export default postsSlice.reducer;
