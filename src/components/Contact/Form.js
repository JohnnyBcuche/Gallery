// import React from 'react';
// import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, DisabledInput, TextInput, LongTextInput, DateInput } from 'react-admin';
// // export PostIcon from '@material-ui/core/svg-icons/action/book';
 
// export const PostList = (props) => (
//   <List {...props}>
//     <Datagrid>
//       <TextField source="id" />
//       <TextField source="name" />
//       <DateField source="published_at" />
//       <TextField source="average_note" />
//       <TextField source="views" />
//       <EditButton basePath="/posts" />
//     </Datagrid>
//   </List>
// );
 
// const PostTitle = ({ record }) => {
//   return <span>Post {record ? `"${record.name}"` : ''}</span>;
// };
 
// export const PostEdit = (props) => (
//   <Edit title={<PostTitle />} {...props}>
//     <SimpleForm>
//       <DisabledInput source="id" />
//       <TextInput source="title" />
//       <TextInput source="teaser" options={{ multiLine: true }} />
//       <LongTextInput source="body" />
//       <DateInput label="Publication date" source="published_at" />
//       <TextInput source="average_note" />
//       <DisabledInput label="Nb views" source="views" />
//     </SimpleForm>
//   </Edit>
// );
 
// export const PostCreate = (props) => (
//   <Create title="Create a Post" {...props}>
//     <SimpleForm>
//       <TextInput source="title" />
//       <TextInput source="teaser" options={{ multiLine: true }} />
//       <LongTextInput source="body" />
//       <TextInput label="Publication date" source="published_at" />
//       <TextInput source="average_note" />
//     </SimpleForm>
//   </Create>
// );

import React from 'react';
import { List, Datagrid, TextField, EmailField, UrlField, ReferenceField, EditButton, Edit, SimpleForm, DisabledInput, ReferenceInput, SelectInput, TextInput, LongTextInput, Create } from 'react-admin';

export const UserList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="username" />
      <EmailField source="email" />
      <TextField source="address.street" />
      <TextField source="phone" />
      <UrlField source="website" />
      <TextField source="company.name" />
    </Datagrid>
  </List>
);

export const PostList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <ReferenceField source="userId" reference="users">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="body" />
      <EditButton />
    </Datagrid>
  </List>
);

const PostTitle = ({ record }) => {
  return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const PostEdit = props => (
  <Edit title={<PostTitle />} {...props}>
      <SimpleForm>
          <DisabledInput source="id" />
          <ReferenceInput source="userId" reference="users">
              <SelectInput optionText="name" />
          </ReferenceInput>
          <TextInput source="title" />
          <LongTextInput source="body" />
      </SimpleForm>
  </Edit>
);

export const PostCreate = props => (
  <Create {...props}>
      <SimpleForm>
          <ReferenceInput source="userId" reference="users">
              <SelectInput optionText="name" />
          </ReferenceInput>
          <TextInput source="title" />
          <LongTextInput source="body" />
      </SimpleForm>
  </Create>
);