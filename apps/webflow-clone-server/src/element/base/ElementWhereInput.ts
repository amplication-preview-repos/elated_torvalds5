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
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PageWhereUniqueInput } from "../../page/base/PageWhereUniqueInput";

@InputType()
class ElementWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: JsonFilter,
  })
  @Type(() => JsonFilter)
  @IsOptional()
  @Field(() => JsonFilter, {
    nullable: true,
  })
  properties?: JsonFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  typeField?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  parentElement?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => PageWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PageWhereUniqueInput)
  @IsOptional()
  @Field(() => PageWhereUniqueInput, {
    nullable: true,
  })
  page?: PageWhereUniqueInput;
}

export { ElementWhereInput as ElementWhereInput };
