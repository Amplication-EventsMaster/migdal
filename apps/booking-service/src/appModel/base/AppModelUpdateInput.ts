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
import { ApiKeyUpdateManyWithoutAppModelsInput } from "./ApiKeyUpdateManyWithoutAppModelsInput";
import { ValidateNested, IsOptional, IsEnum, IsString } from "class-validator";
import { Type } from "class-transformer";
import { EnumAppModelCategories } from "./EnumAppModelCategories";
import { CredentialUpdateManyWithoutAppModelsInput } from "./CredentialUpdateManyWithoutAppModelsInput";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { WebhookUpdateManyWithoutAppModelsInput } from "./WebhookUpdateManyWithoutAppModelsInput";

@InputType()
class AppModelUpdateInput {
  @ApiProperty({
    required: false,
    type: () => ApiKeyUpdateManyWithoutAppModelsInput,
  })
  @ValidateNested()
  @Type(() => ApiKeyUpdateManyWithoutAppModelsInput)
  @IsOptional()
  @Field(() => ApiKeyUpdateManyWithoutAppModelsInput, {
    nullable: true,
  })
  apiKey?: ApiKeyUpdateManyWithoutAppModelsInput;

  @ApiProperty({
    required: false,
    enum: EnumAppModelCategories,
    isArray: true,
  })
  @IsEnum(EnumAppModelCategories, {
    each: true,
  })
  @IsOptional()
  @Field(() => [EnumAppModelCategories], {
    nullable: true,
  })
  categories?: Array<
    "calendar" | "messaging" | "other" | "payment" | "video" | "web3"
  >;

  @ApiProperty({
    required: false,
    type: () => CredentialUpdateManyWithoutAppModelsInput,
  })
  @ValidateNested()
  @Type(() => CredentialUpdateManyWithoutAppModelsInput)
  @IsOptional()
  @Field(() => CredentialUpdateManyWithoutAppModelsInput, {
    nullable: true,
  })
  credentials?: CredentialUpdateManyWithoutAppModelsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  dirName?: string;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  keys?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: () => WebhookUpdateManyWithoutAppModelsInput,
  })
  @ValidateNested()
  @Type(() => WebhookUpdateManyWithoutAppModelsInput)
  @IsOptional()
  @Field(() => WebhookUpdateManyWithoutAppModelsInput, {
    nullable: true,
  })
  webhook?: WebhookUpdateManyWithoutAppModelsInput;
}

export { AppModelUpdateInput as AppModelUpdateInput };