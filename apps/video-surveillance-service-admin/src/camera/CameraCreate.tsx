import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const CameraCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="ip" source="ip" />
        <TextInput label="location" source="location" />
        <TextInput label="name" source="name" />
        <TextInput label="rtspUrl" source="rtspUrl" />
      </SimpleForm>
    </Create>
  );
};
