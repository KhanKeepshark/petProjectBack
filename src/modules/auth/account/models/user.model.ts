import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';

enum Role {
  USER,
  ADMIN,
}

registerEnumType(Role, {
  name: 'Role',
});

@ObjectType()
export class UserModel {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  password: string;

  @Field(() => String, { nullable: true })
  avatar: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => Role)
  role: Role;
}
