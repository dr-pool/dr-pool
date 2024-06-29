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
import { FinancialTransactionWhereInput } from "./FinancialTransactionWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class FinancialTransactionListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => FinancialTransactionWhereInput,
  })
  @ValidateNested()
  @Type(() => FinancialTransactionWhereInput)
  @IsOptional()
  @Field(() => FinancialTransactionWhereInput, {
    nullable: true,
  })
  every?: FinancialTransactionWhereInput;

  @ApiProperty({
    required: false,
    type: () => FinancialTransactionWhereInput,
  })
  @ValidateNested()
  @Type(() => FinancialTransactionWhereInput)
  @IsOptional()
  @Field(() => FinancialTransactionWhereInput, {
    nullable: true,
  })
  some?: FinancialTransactionWhereInput;

  @ApiProperty({
    required: false,
    type: () => FinancialTransactionWhereInput,
  })
  @ValidateNested()
  @Type(() => FinancialTransactionWhereInput)
  @IsOptional()
  @Field(() => FinancialTransactionWhereInput, {
    nullable: true,
  })
  none?: FinancialTransactionWhereInput;
}
export { FinancialTransactionListRelationFilter as FinancialTransactionListRelationFilter };
