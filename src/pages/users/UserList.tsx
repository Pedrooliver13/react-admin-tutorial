import {
  List,
  Datagrid,
  TextField,
  EmailField,
  FunctionField,
  ListProps,
} from "react-admin";

import { MyUrlField } from "components/MyUrlField/index";

export const UserList = (props: ListProps) => {
  const defaultName = 'Leanne Graham'
  
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <FunctionField
          label="name"
          render={(record: any) =>
            record.name === defaultName ? record.name : ""
          }
        />
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="username" />
        <EmailField source="email" />
        <TextField source="address.street" />
        <TextField source="phone" />
        <MyUrlField source="website" />
        <TextField source="company.name" />
      </Datagrid>
    </List>
  );
};
