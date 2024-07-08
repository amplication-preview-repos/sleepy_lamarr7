import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ExpenseTitle } from "../expense/ExpenseTitle";

export const ExpenseTypeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="description" source="description" />
        <ReferenceArrayInput
          source="expenses"
          reference="Expense"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ExpenseTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
