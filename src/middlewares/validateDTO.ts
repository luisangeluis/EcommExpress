import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { NextFunction, Request, Response } from "express";

export function validateDTO(dtoClass: any) {
    return (req: Request, res: Response, next: NextFunction) => {
        const dtoObject = plainToInstance(dtoClass, req.body);
        
        validate(dtoObject).then(errors => {
            console.log({errors});
            
            if (errors.length > 0) {
                return res.status(400).json({ message: 'Validation failed', errors });
            }

            next();
        })
    }
}