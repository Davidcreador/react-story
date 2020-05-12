export type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
  comments?: [CommentType]
}

export type CommentType = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
