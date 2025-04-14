import dotenv from "dotenv";

dotenv.config({
    path: process.env.NODE_ENV === "development" ? ".dev.env" : ".env"
});

// PORT=5000
// DB_NAME=luisangel_ecomm
// DB_USER=luisangel_2
// DB_PASSWORD=Nxtlxer00 
export const port = process.env.PORT || 3000;
export const host = process.env.DB_HOST;
export const dbName = process.env.DB_NAME as string;
export const dbUser = process.env.DB_USER as string;
export const dbPassword = process.env.DB_PASSWORD;