import { IsEmail, IsString, IsStrongPassword, IsUUID } from "class-validator";

export class CreateProductDTO{
    @IsString()
    firstName!: string;
    
    @IsString()
    lastName!: string;

    @IsEmail()
    email!: string;

    @IsStrongPassword()
    password!: string;

    @IsUUID()
    roleId!: string;
}