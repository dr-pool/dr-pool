import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FinancialTransactionServiceBase } from "./base/financialTransaction.service.base";

@Injectable()
export class FinancialTransactionService extends FinancialTransactionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
