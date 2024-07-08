import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { IncomeList } from "./income/IncomeList";
import { IncomeCreate } from "./income/IncomeCreate";
import { IncomeEdit } from "./income/IncomeEdit";
import { IncomeShow } from "./income/IncomeShow";
import { ExpenseList } from "./expense/ExpenseList";
import { ExpenseCreate } from "./expense/ExpenseCreate";
import { ExpenseEdit } from "./expense/ExpenseEdit";
import { ExpenseShow } from "./expense/ExpenseShow";
import { PeriodList } from "./period/PeriodList";
import { PeriodCreate } from "./period/PeriodCreate";
import { PeriodEdit } from "./period/PeriodEdit";
import { PeriodShow } from "./period/PeriodShow";
import { ExpenseTypeList } from "./expenseType/ExpenseTypeList";
import { ExpenseTypeCreate } from "./expenseType/ExpenseTypeCreate";
import { ExpenseTypeEdit } from "./expenseType/ExpenseTypeEdit";
import { ExpenseTypeShow } from "./expenseType/ExpenseTypeShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"FamilyBudgeting"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Income"
          list={IncomeList}
          edit={IncomeEdit}
          create={IncomeCreate}
          show={IncomeShow}
        />
        <Resource
          name="Expense"
          list={ExpenseList}
          edit={ExpenseEdit}
          create={ExpenseCreate}
          show={ExpenseShow}
        />
        <Resource
          name="Period"
          list={PeriodList}
          edit={PeriodEdit}
          create={PeriodCreate}
          show={PeriodShow}
        />
        <Resource
          name="ExpenseType"
          list={ExpenseTypeList}
          edit={ExpenseTypeEdit}
          create={ExpenseTypeCreate}
          show={ExpenseTypeShow}
        />
      </Admin>
    </div>
  );
};

export default App;
