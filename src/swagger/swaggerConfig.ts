import swaggerJsdoc from "swagger-jsdoc";

const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Ecomm Express Api",
            version: "1.0.0",
            description: "API documentation with Swagger",
        },
        servers: [
            {
                url: "https://bookish-zebra-xxrpjv6696x3vqgv-3000.app.github.dev/api",
            },
        ],
    },
    apis: [__dirname +"/annotations/*.yaml"], 
}

const swaggerSpec = swaggerJsdoc(swaggerOptions);

export default swaggerSpec;