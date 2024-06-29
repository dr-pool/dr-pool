import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { FinancialTransactionResolverBase } from "./base/financialTransaction.resolver.base";
import { FinancialTransaction } from "./base/FinancialTransaction";
import { FinancialTransactionService } from "./financialTransaction.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => FinancialTransaction)
export class FinancialTransactionResolver extends FinancialTransactionResolverBase {
  constructor(
    protected readonly service: FinancialTransactionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
