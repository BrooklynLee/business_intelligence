import { ArgsType, Field } from '@nestjs/graphql';
import { IsBoolean, IsString, Length } from 'class-validator';

@ArgsType()
export class CreatePcbangDto {
  @Field(() => String)
  @IsString()
  @Length(5, 10)
  name: string;

  @Field(() => Boolean)
  @IsBoolean()
  isVip: boolean;

  @Field(() => String)
  @IsString()
  address: string;

  @Field(() => String)
  @IsString()
  ownersName: string;
}
