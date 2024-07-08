import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ExpenseTypeTitle } from "../expenseType/ExpenseTypeTitle";

export const ExpenseCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <TextInput label="description" source="description" />
        <DateTimeInput label="date" source="date" />
        <TextInput label="type" source="typeField" />
        <ReferenceInput
          source="expenseType.id"
          reference="ExpenseType"
          label="ExpenseType"
        >
          <SelectInput optionText={ExpenseTypeTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
