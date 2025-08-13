import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { NextFunction, Request, Response } from "express";

export function validateDTOMiddleware(dtoClass: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
        const instance = plainToInstance(dtoClass, req.body);

        const errors = await validate(instance, {
            whitelist: true
        });

        if (errors.length > 0) {

            const formattedErrors = errors.map(err=>({
                field:err.property,
                errors:Object.values(err.constraints || {})
            }));
            // console.log()
            res.status(400).json(formattedErrors);
            return; 
        }

        req.body = instance;
        next();
    };
}