import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ExpenseTypeServiceBase } from "./base/expenseType.service.base";

@Injectable()
export class ExpenseTypeService extends ExpenseTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
