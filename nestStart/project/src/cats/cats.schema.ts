import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IsEmail, IsNotEmpty, IsString, validate } from 'class-validator';

const options: SchemaOptions = {
  timestamps: true,
}

@Schema(options) // 스키마 데코레이션으로 스키마 정의
export class Cat extends Document { // 몽구스 도큐먼트 상속받아서 Cat을 생성.
  @Prop({
    required: true,
    unique: true,
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Prop({
    required: true,
  })
  @IsEmail()
  @IsNotEmpty()
  name: string;

  @Prop({
    required: true,
  })
  @IsEmail()
  @IsNotEmpty()
  password: string;

  @Prop()
  imgUrl: string;
 }

export const CatSchema = SchemaFactory.createForClass(Cat) //Cat 클래스를 CatSchema로 만들어줌