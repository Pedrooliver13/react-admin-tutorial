import { Provider } from 'react-redux';
import { createHasHistory } from 'history';
import { Admin, Resource } from 'react-admin';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';

import { UserList } from 'pages/users';
import { PostList, PostCreate, PostEdit } from 'pages/posts';

import Dashboard from 'components/Dashboard';

import createAdminStore from 'config/store/createAdminStore';
import { dataProvider } from 'services/dataProvider';
import { authProvider } from 'services/authProvider';

const history = createHashHistory();

function App() {
  return (
    <Provider
      store={createAdminStore({
        authProvider,
        dataProvider,
        history,
      })}
    >
      <Admin
        dashboard={Dashboard}
        dataProvider={dataProvider}
        authProvider={authProvider}
        history={history}
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
    </Provider>
  );
}

export default App;
