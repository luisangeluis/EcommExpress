import { IsNumber, IsString, IsUUID, MaxLength,Min } from "class-validator";

export class CreateProductDTO{
    @MaxLength(100)
    @IsString()
    title!:string;
    
    @IsString()
    description!:string;

    @IsNumber()
    @Min(0)
    price!:number

    @IsUUID()
    categoryId!:string;
}