import {
  EditProps,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
  EditController,
  EditView,
  EditControllerProps,
} from "react-admin";

import { PostTitle } from "pages/posts/PostTitle";

export const PostEdit = (props: EditProps) => {
  return (
    <EditController title={<PostTitle />} {...props}>
      {(controllerProps: EditControllerProps) => (
        <EditView {...props} {...controllerProps}>
          <SimpleForm>
            <ReferenceInput source="userId" reference="users">
              <SelectInput disabled optionText="name" />
            </ReferenceInput>

            {controllerProps.record?.id && <TextInput source="title" />}
            
            <TextInput multiline source="body" />
          </SimpleForm>
        </EditView>
      )}
    </EditController>
  );
};
