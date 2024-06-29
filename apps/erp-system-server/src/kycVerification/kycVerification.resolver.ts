import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { KycVerificationResolverBase } from "./base/kycVerification.resolver.base";
import { KycVerification } from "./base/KycVerification";
import { KycVerificationService } from "./kycVerification.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => KycVerification)
export class KycVerificationResolver extends KycVerificationResolverBase {
  constructor(
    protected readonly service: KycVerificationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
