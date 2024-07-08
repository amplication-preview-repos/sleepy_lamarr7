import * as graphql from "@nestjs/graphql";
import { ExpenseTypeResolverBase } from "./base/expenseType.resolver.base";
import { ExpenseType } from "./base/ExpenseType";
import { ExpenseTypeService } from "./expenseType.service";

@graphql.Resolver(() => ExpenseType)
export class ExpenseTypeResolver extends ExpenseTypeResolverBase {
  constructor(protected readonly service: ExpenseTypeService) {
    super(service);
  }
}
