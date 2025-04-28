import { Request,Response,NextFunction } from "express"

export const bodyIsEmptyMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const body = req.body;

    if (Object.keys(body).length === 0) {
        res.status(400).json({ message: "Body must not be empty" });
        return;
    }

    next();
}