import { z } from "zod";

const envSchema = z.object({

    // ENV
    NODE_ENV: z.enum([
        "development",
        "production",
        "test",
    ]).default("development"),

    // SERVICE
    SERVICE_NAME: z.string().min(1).default("UAT Service"),
    SERVICE_HOST: z.string().default("0.0.0.0"),
    SERVICE_PORT: z.coerce.number().int().min(1).max(65535).default(3000),


});

const result = envSchema.safeParse(process.env);

if (!result.success) {
    console.error(" Invalid environment configuration:")

    for (const issue of result.error.issues) {
        console.error(
            ` - ${issue.path.join(".")}: ${issue.message}`
        );
    }
    process.exit(1);
}

export const env = result.data;

export type Environment = z.infer<typeof envSchema>;