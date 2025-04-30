import { IsNumber, IsOptional, IsString, IsUUID, MaxLength,Min } from "class-validator";

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
    categoryId?:string;
}