import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AccountingService } from "./accounting.service";
import { AccountingControllerBase } from "./base/accounting.controller.base";

@swagger.ApiTags("accountings")
@common.Controller("accountings")
export class AccountingController extends AccountingControllerBase {
  constructor(
    protected readonly service: AccountingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
