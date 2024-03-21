import { z } from "zod";

export const stoneListSchema = z.array(
  z.object({
    id: z.string(),
    name: z.string(),
    element: z.string(),
    icon: z.string().url().optional(),
    stone: z.array(
      z.object({
        name: z.string(),
        icon: z.string().url(),
        quality: z.number(),
      })
    ),
    character: z.array(
      z.object({ name: z.string(), icon: z.string().url(), id: z.string() })
    ),
    description: z.string().nullish(),
  })
);

export const stoneDetailsSchema = z.object({
  id: z.string(),
  name: z.string(),
  element: z.string().optional(),
  icon: z.string().url().optional(),
  stone: z.array(
    z.object({ name: z.string(), icon: z.string().url(), quality: z.number() })
  ),
  character: z.array(
    z.object({ name: z.string(), icon: z.string().url(), id: z.string() })
  ),
  description: z.string().optional(),
  weeklyBoss: z
    .array(
      z.object({ name: z.string(), icon: z.string().url(), id: z.string() })
    )
    .optional(),
  normalBoss: z
    .array(
      z.object({ name: z.string(), icon: z.string().url(), id: z.string() })
    )
    .optional(),
});
