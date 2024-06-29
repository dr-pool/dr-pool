/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { KycVerificationWhereInput } from "./KycVerificationWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class KycVerificationListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => KycVerificationWhereInput,
  })
  @ValidateNested()
  @Type(() => KycVerificationWhereInput)
  @IsOptional()
  @Field(() => KycVerificationWhereInput, {
    nullable: true,
  })
  every?: KycVerificationWhereInput;

  @ApiProperty({
    required: false,
    type: () => KycVerificationWhereInput,
  })
  @ValidateNested()
  @Type(() => KycVerificationWhereInput)
  @IsOptional()
  @Field(() => KycVerificationWhereInput, {
    nullable: true,
  })
  some?: KycVerificationWhereInput;

  @ApiProperty({
    required: false,
    type: () => KycVerificationWhereInput,
  })
  @ValidateNested()
  @Type(() => KycVerificationWhereInput)
  @IsOptional()
  @Field(() => KycVerificationWhereInput, {
    nullable: true,
  })
  none?: KycVerificationWhereInput;
}
export { KycVerificationListRelationFilter as KycVerificationListRelationFilter };