import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { ElementTitle } from "../element/ElementTitle";
import { ProjectTitle } from "../project/ProjectTitle";

export const PageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <ReferenceArrayInput source="elements" reference="Element">
          <SelectArrayInput
            optionText={ElementTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput source="project.id" reference="Project" label="Project">
          <SelectInput optionText={ProjectTitle} />
        </ReferenceInput>
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
