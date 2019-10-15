// import React, { Component } from 'react';

// import './Contact.css';
// import { Admin, Resource } from 'react-admin';
// import restProvider from 'ra-data-simple-rest';
// import { PostList, PostEdit, PostCreate } from './Form';
// import { createMuiTheme } from '@material-ui/core/styles';

// class Contact extends Component {
//   render() {
//     const theme = createMuiTheme({
//       palette: {
//         type: 'dark'
//       },
//     });

//     return (
//       <Admin theme={theme} dataProvider={restProvider('https://jsonplaceholder.typicode.com/users')}>
//         <Resource name="users" list={PostList} edit={PostEdit} create={PostCreate}/>
//       </Admin>
//     );
//   }
// }

// export default Contact;

import React from 'react';
import { Admin, Resource } from 'react-admin';
import { UserList, PostList, PostEdit, PostCreate } from './Form';
import { createMuiTheme } from '@material-ui/core/styles';
import jsonServerProvider from 'ra-data-json-server';

const theme = createMuiTheme({
  palette: {
    type: 'dark'
  }
});
const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
// const Contact = () => <Admin dataProvider={dataProvider} />;
const Contact = () => (
    <Admin theme={theme} dataProvider={dataProvider}>
      <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} />
      <Resource name="users" list={UserList} />
    </Admin>
);

export default Contact;