import { Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { CommentsService } from '../services/comments.service';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentService: CommentsService) { }
  @ApiOperation({
    summary: '모든 고양이 프로필 댓글 가져오기다 냥',
  })
  @Get()
  async getAllComments() {
    return this.commentService.getAllComments();
  }

  @ApiOperation({
    summary: '특정 고양이에 댓글 남기기다냥',
  })
  @Post(':id')
  async createComment(@Param('id') id: string) {
    return this.commentService.createComment(id);
  }
}
