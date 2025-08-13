import { IsNumber, IsOptional, IsString, IsUUID, MaxLength,Min } from "class-validator";
import { IsCategoryExists } from "../../validators/IsCategoryExists";

export class UpdateProductDTO{
    @IsOptional()
    @MaxLength(100)
    @IsString()
    title?:string;
    
    @IsOptional()
    @IsString()
    description?:string;

    @IsOptional()
    @IsNumber()
    @Min(0)
    price?:number

    @IsOptional()
    @IsUUID()
    @IsCategoryExists({message: 'The provided categoryId does not exist in the database'})
    categoryId?:string;
}