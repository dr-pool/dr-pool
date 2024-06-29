import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { KycVerificationModuleBase } from "./base/kycVerification.module.base";
import { KycVerificationService } from "./kycVerification.service";
import { KycVerificationController } from "./kycVerification.controller";
import { KycVerificationResolver } from "./kycVerification.resolver";

@Module({
  imports: [KycVerificationModuleBase, forwardRef(() => AuthModule)],
  controllers: [KycVerificationController],
  providers: [KycVerificationService, KycVerificationResolver],
  exports: [KycVerificationService],
})
export class KycVerificationModule {}
