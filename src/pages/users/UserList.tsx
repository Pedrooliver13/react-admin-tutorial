import {
  List,
  Datagrid,
  TextField,
  EmailField,
  ListProps,
} from "react-admin";

import { MyUrlField } from 'components/MyUrlField/index';

export const UserList = (props: ListProps) => (
  <List {...props}>
    <Datagrid rowClick="edit">
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
