import { Module } from "@nestjs/common";
import { ExpenseTypeModuleBase } from "./base/expenseType.module.base";
import { ExpenseTypeService } from "./expenseType.service";
import { ExpenseTypeController } from "./expenseType.controller";
import { ExpenseTypeResolver } from "./expenseType.resolver";

@Module({
  imports: [ExpenseTypeModuleBase],
  controllers: [ExpenseTypeController],
  providers: [ExpenseTypeService, ExpenseTypeResolver],
  exports: [ExpenseTypeService],
})
export class ExpenseTypeModule {}
