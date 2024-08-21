import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const CameraEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="ip" source="ip" />
        <TextInput label="location" source="location" />
        <TextInput label="name" source="name" />
        <TextInput label="rtspUrl" source="rtspUrl" />
      </SimpleForm>
    </Edit>
  );
};
