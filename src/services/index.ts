import axios from 'axios';

const API_URL = "https://jsonplaceholder.typicode.com";

export default {
  async fetchPosts() {
    const res = await axios.get(`${API_URL}/posts`);
    return res.data
  },

  async fetchComments() {
    const res = await axios.get(`${API_URL}/comments`);
    return res.data
  },

  async fetchCommentsByPostId(id: number) {
    const res = await axios.get(`${API_URL}/posts/${id}/comments`);
    return res.data
  }
}
