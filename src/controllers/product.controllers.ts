import { Request, Response } from "express";

export const getAll=(req: Request,res:Response)=>{
    res.status(200).json({message:"hola"});
}