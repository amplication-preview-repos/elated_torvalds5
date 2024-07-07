/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ElementWhereUniqueInput } from "../../element/base/ElementWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ElementUpdateManyWithoutPagesInput {
  @Field(() => [ElementWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ElementWhereUniqueInput],
  })
  connect?: Array<ElementWhereUniqueInput>;

  @Field(() => [ElementWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ElementWhereUniqueInput],
  })
  disconnect?: Array<ElementWhereUniqueInput>;

  @Field(() => [ElementWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ElementWhereUniqueInput],
  })
  set?: Array<ElementWhereUniqueInput>;
}

export { ElementUpdateManyWithoutPagesInput as ElementUpdateManyWithoutPagesInput };