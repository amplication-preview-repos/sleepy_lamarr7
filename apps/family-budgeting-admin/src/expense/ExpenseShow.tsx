import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { EXPENSETYPE_TITLE_FIELD } from "../expenseType/ExpenseTypeTitle";

export const ExpenseShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="amount" source="amount" />
        <TextField label="description" source="description" />
        <TextField label="date" source="date" />
        <TextField label="type" source="typeField" />
        <ReferenceField
          label="ExpenseType"
          source="expensetype.id"
          reference="ExpenseType"
        >
          <TextField source={EXPENSETYPE_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
