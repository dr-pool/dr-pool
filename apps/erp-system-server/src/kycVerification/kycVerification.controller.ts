import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { KycVerificationService } from "./kycVerification.service";
import { KycVerificationControllerBase } from "./base/kycVerification.controller.base";

@swagger.ApiTags("kycVerifications")
@common.Controller("kycVerifications")
export class KycVerificationController extends KycVerificationControllerBase {
  constructor(
    protected readonly service: KycVerificationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
