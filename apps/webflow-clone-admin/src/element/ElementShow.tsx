import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { PAGE_TITLE_FIELD } from "../page/PageTitle";

export const ElementShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Page" source="page.id" reference="Page">
          <TextField source={PAGE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ParentElement" source="parentElement" />
        <TextField label="properties" source="properties" />
        <TextField label="type" source="typeField" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
