import {
  Edit,
  EditProps,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";

import { PostTitle } from "pages/posts/PostTitle";

export const PostEdit = (props: EditProps) => (
  <Edit title={<PostTitle />} {...props}>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users">
        <SelectInput disabled optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <TextInput multiline source="body" />
    </SimpleForm>
  </Edit>
);
