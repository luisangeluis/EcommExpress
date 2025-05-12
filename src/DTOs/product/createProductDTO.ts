import { IsNumber, IsString, IsUUID, MaxLength,Min } from "class-validator";
import { IsCategoryExists } from "../../validators/IsCategoryExists";

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
    @IsCategoryExists({message: 'The provided categoryId does not exist in the database'})
    categoryId!:string;
}