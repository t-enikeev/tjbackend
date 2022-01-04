import { IsEmail, Length, Min } from 'class-validator';

export class CreateUserDto {
  @Length(3, null, { message: 'Длина логина не менее 3 символа' })
  fullName: string;

  @IsEmail({}, { message: 'Неверная почта' })
  email: string;

  @Length(6, 32, { message: 'Минимум 6 символов, максимум 32' })
  password?: string;
}
