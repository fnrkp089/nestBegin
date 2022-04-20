import { ApiProperty, PickType } from "@nestjs/swagger";
import { Cat } from '../cats.schema';

export class ReadOnlyCatDto extends PickType(Cat, ['email', 'name'] as const){ //Picktype을 사용해 필요한 부분만 뽑아낼수잇다
  @ApiProperty({
    example: 'fnrkp089@gmail.com',
    description: 'email',
    required: true
  })
  id: string;
}