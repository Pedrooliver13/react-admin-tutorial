import { Admin, Resource } from "react-admin";
import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";

import { UserList } from "pages/users";
import { PostList, PostCreate, PostEdit } from "pages/posts";

import Dashboard from "components/Dashboard";

import { dataProvider } from "services/dataProvider";
import { authProvider } from "services/authProvider";

function App() {
  return (
    <Admin
      dashboard={Dashboard}
      dataProvider={dataProvider}
      authProvider={authProvider}
    >
      <Resource name="users" list={UserList} icon={UserIcon} />
      <Resource
        name="posts"
        list={PostList}
        create={PostCreate}
        edit={PostEdit}
        icon={PostIcon}
      />
    </Admin>
  );
}

export default App;
