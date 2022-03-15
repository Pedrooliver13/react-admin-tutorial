import { Create, CreateProps } from "react-admin";

import { PostForm } from "pages/posts/PostForm";

export const PostCreate = (props: CreateProps) => (
  <Create {...props}>
    <PostForm />
  </Create>
);
