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
import { Page } from "./Page";
import { PageCountArgs } from "./PageCountArgs";
import { PageFindManyArgs } from "./PageFindManyArgs";
import { PageFindUniqueArgs } from "./PageFindUniqueArgs";
import { CreatePageArgs } from "./CreatePageArgs";
import { UpdatePageArgs } from "./UpdatePageArgs";
import { DeletePageArgs } from "./DeletePageArgs";
import { ElementFindManyArgs } from "../../element/base/ElementFindManyArgs";
import { Element } from "../../element/base/Element";
import { Project } from "../../project/base/Project";
import { PageService } from "../page.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Page)
export class PageResolverBase {
  constructor(
    protected readonly service: PageService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Page",
    action: "read",
    possession: "any",
  })
  async _pagesMeta(
    @graphql.Args() args: PageCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Page])
  @nestAccessControl.UseRoles({
    resource: "Page",
    action: "read",
    possession: "any",
  })
  async pages(@graphql.Args() args: PageFindManyArgs): Promise<Page[]> {
    return this.service.pages(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Page, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Page",
    action: "read",
    possession: "own",
  })
  async page(@graphql.Args() args: PageFindUniqueArgs): Promise<Page | null> {
    const result = await this.service.page(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Page)
  @nestAccessControl.UseRoles({
    resource: "Page",
    action: "create",
    possession: "any",
  })
  async createPage(@graphql.Args() args: CreatePageArgs): Promise<Page> {
    return await this.service.createPage({
      ...args,
      data: {
        ...args.data,

        project: args.data.project
          ? {
              connect: args.data.project,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Page)
  @nestAccessControl.UseRoles({
    resource: "Page",
    action: "update",
    possession: "any",
  })
  async updatePage(@graphql.Args() args: UpdatePageArgs): Promise<Page | null> {
    try {
      return await this.service.updatePage({
        ...args,
        data: {
          ...args.data,

          project: args.data.project
            ? {
                connect: args.data.project,
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

  @graphql.Mutation(() => Page)
  @nestAccessControl.UseRoles({
    resource: "Page",
    action: "delete",
    possession: "any",
  })
  async deletePage(@graphql.Args() args: DeletePageArgs): Promise<Page | null> {
    try {
      return await this.service.deletePage(args);
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
  @graphql.ResolveField(() => [Element], { name: "elements" })
  @nestAccessControl.UseRoles({
    resource: "Element",
    action: "read",
    possession: "any",
  })
  async findElements(
    @graphql.Parent() parent: Page,
    @graphql.Args() args: ElementFindManyArgs
  ): Promise<Element[]> {
    const results = await this.service.findElements(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Project, {
    nullable: true,
    name: "project",
  })
  @nestAccessControl.UseRoles({
    resource: "Project",
    action: "read",
    possession: "any",
  })
  async getProject(@graphql.Parent() parent: Page): Promise<Project | null> {
    const result = await this.service.getProject(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
