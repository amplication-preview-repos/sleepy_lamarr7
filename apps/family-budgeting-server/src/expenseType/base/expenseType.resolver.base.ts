/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { ExpenseType } from "./ExpenseType";
import { ExpenseTypeCountArgs } from "./ExpenseTypeCountArgs";
import { ExpenseTypeFindManyArgs } from "./ExpenseTypeFindManyArgs";
import { ExpenseTypeFindUniqueArgs } from "./ExpenseTypeFindUniqueArgs";
import { CreateExpenseTypeArgs } from "./CreateExpenseTypeArgs";
import { UpdateExpenseTypeArgs } from "./UpdateExpenseTypeArgs";
import { DeleteExpenseTypeArgs } from "./DeleteExpenseTypeArgs";
import { ExpenseFindManyArgs } from "../../expense/base/ExpenseFindManyArgs";
import { Expense } from "../../expense/base/Expense";
import { ExpenseTypeService } from "../expenseType.service";
@graphql.Resolver(() => ExpenseType)
export class ExpenseTypeResolverBase {
  constructor(protected readonly service: ExpenseTypeService) {}

  async _expenseTypesMeta(
    @graphql.Args() args: ExpenseTypeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ExpenseType])
  async expenseTypes(
    @graphql.Args() args: ExpenseTypeFindManyArgs
  ): Promise<ExpenseType[]> {
    return this.service.expenseTypes(args);
  }

  @graphql.Query(() => ExpenseType, { nullable: true })
  async expenseType(
    @graphql.Args() args: ExpenseTypeFindUniqueArgs
  ): Promise<ExpenseType | null> {
    const result = await this.service.expenseType(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ExpenseType)
  async createExpenseType(
    @graphql.Args() args: CreateExpenseTypeArgs
  ): Promise<ExpenseType> {
    return await this.service.createExpenseType({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => ExpenseType)
  async updateExpenseType(
    @graphql.Args() args: UpdateExpenseTypeArgs
  ): Promise<ExpenseType | null> {
    try {
      return await this.service.updateExpenseType({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => ExpenseType)
  async deleteExpenseType(
    @graphql.Args() args: DeleteExpenseTypeArgs
  ): Promise<ExpenseType | null> {
    try {
      return await this.service.deleteExpenseType(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Expense], { name: "expenses" })
  async findExpenses(
    @graphql.Parent() parent: ExpenseType,
    @graphql.Args() args: ExpenseFindManyArgs
  ): Promise<Expense[]> {
    const results = await this.service.findExpenses(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
