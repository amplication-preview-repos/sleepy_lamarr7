import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ExpenseTypeService } from "./expenseType.service";
import { ExpenseTypeControllerBase } from "./base/expenseType.controller.base";

@swagger.ApiTags("expenseTypes")
@common.Controller("expenseTypes")
export class ExpenseTypeController extends ExpenseTypeControllerBase {
  constructor(protected readonly service: ExpenseTypeService) {
    super(service);
  }
}
