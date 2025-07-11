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
import { ReviewService } from "../review.service";
import { ReviewCreateInput } from "./ReviewCreateInput";
import { Review } from "./Review";
import { ReviewFindManyArgs } from "./ReviewFindManyArgs";
import { ReviewWhereUniqueInput } from "./ReviewWhereUniqueInput";
import { ReviewUpdateInput } from "./ReviewUpdateInput";

export class ReviewControllerBase {
  constructor(protected readonly service: ReviewService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Review })
  async createReview(@common.Body() data: ReviewCreateInput): Promise<Review> {
    return await this.service.createReview({
      data: {
        ...data,

        product: data.product
          ? {
              connect: data.product,
            }
          : undefined,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        comment: true,
        createdAt: true,
        id: true,

        product: {
          select: {
            id: true,
          },
        },

        rating: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Review] })
  @ApiNestedQuery(ReviewFindManyArgs)
  async reviews(@common.Req() request: Request): Promise<Review[]> {
    const args = plainToClass(ReviewFindManyArgs, request.query);
    return this.service.reviews({
      ...args,
      select: {
        comment: true,
        createdAt: true,
        id: true,

        product: {
          select: {
            id: true,
          },
        },

        rating: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Review })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async review(
    @common.Param() params: ReviewWhereUniqueInput
  ): Promise<Review | null> {
    const result = await this.service.review({
      where: params,
      select: {
        comment: true,
        createdAt: true,
        id: true,

        product: {
          select: {
            id: true,
          },
        },

        rating: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Review })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateReview(
    @common.Param() params: ReviewWhereUniqueInput,
    @common.Body() data: ReviewUpdateInput
  ): Promise<Review | null> {
    try {
      return await this.service.updateReview({
        where: params,
        data: {
          ...data,

          product: data.product
            ? {
                connect: data.product,
              }
            : undefined,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          comment: true,
          createdAt: true,
          id: true,

          product: {
            select: {
              id: true,
            },
          },

          rating: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
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
  @swagger.ApiOkResponse({ type: Review })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteReview(
    @common.Param() params: ReviewWhereUniqueInput
  ): Promise<Review | null> {
    try {
      return await this.service.deleteReview({
        where: params,
        select: {
          comment: true,
          createdAt: true,
          id: true,

          product: {
            select: {
              id: true,
            },
          },

          rating: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
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
