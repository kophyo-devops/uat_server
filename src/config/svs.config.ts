import { env } from "./env";

export const svsConfig = Object.freeze({
    name: env.SERVICE_NAME,
    host: env.SERVICE_HOST,
    port: env.SERVICE_PORT,
    environment: env.NODE_ENV,

    isDevelopment: env.NODE_ENV === "development",
    isProduction: env.NODE_ENV === "production",
    isTest: env.NODE_ENV === "test",
});