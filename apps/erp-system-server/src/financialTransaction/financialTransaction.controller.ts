import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FinancialTransactionService } from "./financialTransaction.service";
import { FinancialTransactionControllerBase } from "./base/financialTransaction.controller.base";

@swagger.ApiTags("financialTransactions")
@common.Controller("financialTransactions")
export class FinancialTransactionController extends FinancialTransactionControllerBase {
  constructor(
    protected readonly service: FinancialTransactionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
