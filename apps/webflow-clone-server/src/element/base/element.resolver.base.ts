/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Element } from "./Element";
import { ElementCountArgs } from "./ElementCountArgs";
import { ElementFindManyArgs } from "./ElementFindManyArgs";
import { ElementFindUniqueArgs } from "./ElementFindUniqueArgs";
import { CreateElementArgs } from "./CreateElementArgs";
import { UpdateElementArgs } from "./UpdateElementArgs";
import { DeleteElementArgs } from "./DeleteElementArgs";
import { Page } from "../../page/base/Page";
import { ElementService } from "../element.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Element)
export class ElementResolverBase {
  constructor(
    protected readonly service: ElementService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Element",
    action: "read",
    possession: "any",
  })
  async _elementsMeta(
    @graphql.Args() args: ElementCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Element])
  @nestAccessControl.UseRoles({
    resource: "Element",
    action: "read",
    possession: "any",
  })
  async elements(
    @graphql.Args() args: ElementFindManyArgs
  ): Promise<Element[]> {
    return this.service.elements(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Element, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Element",
    action: "read",
    possession: "own",
  })
  async element(
    @graphql.Args() args: ElementFindUniqueArgs
  ): Promise<Element | null> {
    const result = await this.service.element(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Element)
  @nestAccessControl.UseRoles({
    resource: "Element",
    action: "create",
    possession: "any",
  })
  async createElement(
    @graphql.Args() args: CreateElementArgs
  ): Promise<Element> {
    return await this.service.createElement({
      ...args,
      data: {
        ...args.data,

        page: args.data.page
          ? {
              connect: args.data.page,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Element)
  @nestAccessControl.UseRoles({
    resource: "Element",
    action: "update",
    possession: "any",
  })
  async updateElement(
    @graphql.Args() args: UpdateElementArgs
  ): Promise<Element | null> {
    try {
      return await this.service.updateElement({
        ...args,
        data: {
          ...args.data,

          page: args.data.page
            ? {
                connect: args.data.page,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Element)
  @nestAccessControl.UseRoles({
    resource: "Element",
    action: "delete",
    possession: "any",
  })
  async deleteElement(
    @graphql.Args() args: DeleteElementArgs
  ): Promise<Element | null> {
    try {
      return await this.service.deleteElement(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Page, {
    nullable: true,
    name: "page",
  })
  @nestAccessControl.UseRoles({
    resource: "Page",
    action: "read",
    possession: "any",
  })
  async getPage(@graphql.Parent() parent: Element): Promise<Page | null> {
    const result = await this.service.getPage(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}