import { IsNumber, IsString, IsUUID, MaxLength,Min } from "class-validator";

export class UpdateProductDTO{
    @MaxLength(100)
    @IsString()
    title?:string;
    
    @IsString()
    description?:string;

    @IsNumber()
    @Min(0)
    price?:number

    @IsUUID()
    categoryId?:string;
}