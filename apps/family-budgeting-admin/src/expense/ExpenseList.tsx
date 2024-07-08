import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { EXPENSETYPE_TITLE_FIELD } from "../expenseType/ExpenseTypeTitle";

export const ExpenseList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Expenses"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
