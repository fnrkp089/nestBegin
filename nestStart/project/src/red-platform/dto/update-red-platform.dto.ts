import { PartialType } from '@nestjs/mapped-types';
import { CreateRedPlatformDto } from './create-red-platform.dto';

export class UpdateRedPlatformDto extends PartialType(CreateRedPlatformDto) {}
