import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import { ApiProperty } from "@nestjs/swagger";
import { Document } from 'mongoose';
import { IsEmail, IsNotEmpty, IsString, validate } from 'class-validator';
import { throws } from 'assert';

const options: SchemaOptions = {
  timestamps: true,
}

@Schema(options) // 스키마 데코레이션으로 스키마 정의
export class Cat extends Document { // 몽구스 도큐먼트 상속받아서 Cat을 생성.
  @ApiProperty({
    example: 'fnrkp089@gmail.com',
    description: 'email',
    required: true
  })
  @Prop({
    required: true,
    unique: true,
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: 'name',
    description: 'name',
    required: true
  })
  @Prop({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'password',
    description: 'password',
    required: true
  })
  @Prop({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    example: 'imgurl',
    description: 'imgurl',
    required: false
  })
  @Prop()
  @IsString()
  imgUrl: string;

  readonly readOnlyData:{ id: string, email: string, name: string}
}

export const CatSchema = SchemaFactory.createForClass(Cat) //Cat 클래스를 CatSchema로 만들어줌
CatSchema.virtual('readOnlyData').get(function(this:Cat){
  return{
    id: this.id,
    email: this.email,
    name: this.name,
  }
})