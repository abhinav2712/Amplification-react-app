import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ProjectEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="owners" source="owners" />
      </SimpleForm>
    </Edit>
  );
};
