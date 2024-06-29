import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { KycVerificationServiceBase } from "./base/kycVerification.service.base";

@Injectable()
export class KycVerificationService extends KycVerificationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
