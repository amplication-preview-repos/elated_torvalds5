import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { PageTitle } from "../page/PageTitle";

export const ElementCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="page.id" reference="Page" label="Page">
          <SelectInput optionText={PageTitle} />
        </ReferenceInput>
        <TextInput label="ParentElement" source="parentElement" />
        <div />
        <TextInput label="type" source="typeField" />
      </SimpleForm>
    </Create>
  );
};
