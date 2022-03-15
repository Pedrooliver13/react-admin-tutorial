import { Edit, EditProps } from "react-admin";

import { PostTitle } from "pages/posts/PostTitle";
import { PostForm } from "pages/posts/PostForm";

export const PostEdit = (props: EditProps) => (
  <Edit title={<PostTitle />} {...props}>
    <PostForm />
  </Edit>
);
