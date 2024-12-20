/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Page as PrismaPage,
  Element as PrismaElement,
  Project as PrismaProject,
} from "@prisma/client";

import { Page } from "./Page";

export class PageServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.PageCountArgs, "select">): Promise<number> {
    return this.prisma.page.count(args);
  }

  async pages(args: Prisma.PageFindManyArgs): Promise<PrismaPage[]> {
    return this.prisma.page.findMany(args);
  }
  async page(args: Prisma.PageFindUniqueArgs): Promise<PrismaPage | null> {
    return this.prisma.page.findUnique(args);
  }
  async createPage(args: Prisma.PageCreateArgs): Promise<PrismaPage> {
    return this.prisma.page.create(args);
  }
  async updatePage(args: Prisma.PageUpdateArgs): Promise<PrismaPage> {
    return this.prisma.page.update(args);
  }
  async deletePage(args: Prisma.PageDeleteArgs): Promise<PrismaPage> {
    return this.prisma.page.delete(args);
  }

  async findElements(
    parentId: string,
    args: Prisma.ElementFindManyArgs
  ): Promise<PrismaElement[]> {
    return this.prisma.page
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .elements(args);
  }

  async getProject(parentId: string): Promise<PrismaProject | null> {
    return this.prisma.page
      .findUnique({
        where: { id: parentId },
      })
      .project();
  }
  async GetUserPages(args: number): Promise<Page[]> {
    throw new Error("Not implemented");
  }
}
