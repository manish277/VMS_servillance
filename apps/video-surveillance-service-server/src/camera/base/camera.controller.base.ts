/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { CameraService } from "../camera.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { CameraCreateInput } from "./CameraCreateInput";
import { Camera } from "./Camera";
import { CameraFindManyArgs } from "./CameraFindManyArgs";
import { CameraWhereUniqueInput } from "./CameraWhereUniqueInput";
import { CameraUpdateInput } from "./CameraUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class CameraControllerBase {
  constructor(
    protected readonly service: CameraService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Camera })
  @nestAccessControl.UseRoles({
    resource: "Camera",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createCamera(@common.Body() data: CameraCreateInput): Promise<Camera> {
    return await this.service.createCamera({
      data: data,
      select: {
        createdAt: true,
        id: true,
        ip: true,
        location: true,
        name: true,
        rtspUrl: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Camera] })
  @ApiNestedQuery(CameraFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Camera",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async cameras(@common.Req() request: Request): Promise<Camera[]> {
    const args = plainToClass(CameraFindManyArgs, request.query);
    return this.service.cameras({
      ...args,
      select: {
        createdAt: true,
        id: true,
        ip: true,
        location: true,
        name: true,
        rtspUrl: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Camera })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Camera",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async camera(
    @common.Param() params: CameraWhereUniqueInput
  ): Promise<Camera | null> {
    const result = await this.service.camera({
      where: params,
      select: {
        createdAt: true,
        id: true,
        ip: true,
        location: true,
        name: true,
        rtspUrl: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Camera })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Camera",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateCamera(
    @common.Param() params: CameraWhereUniqueInput,
    @common.Body() data: CameraUpdateInput
  ): Promise<Camera | null> {
    try {
      return await this.service.updateCamera({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          ip: true,
          location: true,
          name: true,
          rtspUrl: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Camera })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Camera",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteCamera(
    @common.Param() params: CameraWhereUniqueInput
  ): Promise<Camera | null> {
    try {
      return await this.service.deleteCamera({
        where: params,
        select: {
          createdAt: true,
          id: true,
          ip: true,
          location: true,
          name: true,
          rtspUrl: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
