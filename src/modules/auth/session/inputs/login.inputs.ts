import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, MinLength } from 'class-validator';
import { IsString } from 'class-validator';

@InputType()
export class LoginInput {
  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  login: string;

  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  password: string;
}
