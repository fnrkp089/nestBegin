import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import { ApiProperty } from "@nestjs/swagger";
import { Document, Types } from 'mongoose';
import { IsEmail, IsNotEmpty, IsPositive, IsString, validate } from 'class-validator';

const options: SchemaOptions = {
  timestamps: true,
}

@Schema(options) // 스키마 데코레이션으로 스키마 정의
export class Comments extends Document { // 몽구스 도큐먼트 상속받아서 Cat을 생성.
  @ApiProperty({
    description: '작성한 고냥이 아이디',
    required: true
  })
  @Prop({
    type: Types.ObjectId,
    required: true,
    ref: 'cats',
  })
  @IsNotEmpty()
  author: Types.ObjectId;

  @ApiProperty({
    description: '댓글 콘텐츠',
    required: true
  })
  @Prop({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  contents: string;

  @ApiProperty({
    description: '좋아요 수',
    required: true
  })
  @Prop({
    default: 0,
  })
  @IsPositive()
  likeCount: number;

  @ApiProperty({
    description: '작성 대상(게시물, 정보글)',
    required: true
  })
  @Prop({
    type: Types.ObjectId,
    required: true,
    ref: 'cats',
  })
  @IsNotEmpty()
  info: Types.ObjectId;

}

export const CommentsSchema = SchemaFactory.createForClass(Comments) //Comments 클래스를 CommentsSchema로 만들어줌
