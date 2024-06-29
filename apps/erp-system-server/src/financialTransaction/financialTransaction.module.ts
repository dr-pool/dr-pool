import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FinancialTransactionModuleBase } from "./base/financialTransaction.module.base";
import { FinancialTransactionService } from "./financialTransaction.service";
import { FinancialTransactionController } from "./financialTransaction.controller";
import { FinancialTransactionResolver } from "./financialTransaction.resolver";

@Module({
  imports: [FinancialTransactionModuleBase, forwardRef(() => AuthModule)],
  controllers: [FinancialTransactionController],
  providers: [FinancialTransactionService, FinancialTransactionResolver],
  exports: [FinancialTransactionService],
})
export class FinancialTransactionModule {}
