import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AccountingModuleBase } from "./base/accounting.module.base";
import { AccountingService } from "./accounting.service";
import { AccountingController } from "./accounting.controller";
import { AccountingResolver } from "./accounting.resolver";

@Module({
  imports: [AccountingModuleBase, forwardRef(() => AuthModule)],
  controllers: [AccountingController],
  providers: [AccountingService, AccountingResolver],
  exports: [AccountingService],
})
export class AccountingModule {}
