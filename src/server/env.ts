import { z } from "zod";

const serverEnvSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  APP_URL: z
    .url()
    .transform((value) => new URL(value).toString())
    .optional(),
});

export type ServerEnv = z.infer<typeof serverEnvSchema>;

export function parseServerEnv(input: NodeJS.ProcessEnv): ServerEnv {
  return serverEnvSchema.parse({
    NODE_ENV: input.NODE_ENV,
    APP_URL: input.APP_URL,
  });
}

export const serverEnv = parseServerEnv(process.env);
