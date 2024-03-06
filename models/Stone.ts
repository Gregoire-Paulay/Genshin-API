import { z } from "zod";

export const stoneListSchema = z.array(
  z.object({
    id: z.string(),
    name: z.string(),
    element: z.string(),
    icon: z.string(),
    stone: z.array(
      z.object({ name: z.string(), icon: z.string(), quality: z.number() })
    ),
    character: z.array(
      z.object({ name: z.string(), icon: z.string(), id: z.string() })
    ),
    description: z.string().nullish(),
  })
);

export const stoneDetailsSchema = z.object({
  id: z.string(),
  name: z.string(),
  element: z.string(),
  icon: z.string(),
  stone: z.array(
    z.object({ name: z.string(), icon: z.string(), quality: z.number() })
  ),
  character: z.array(
    z.object({ name: z.string(), icon: z.string(), id: z.string() })
  ),
  description: z.string().nullish(),
  weeklyBoss: z
    .array(z.object({ name: z.string(), icon: z.string(), id: z.string() }))
    .nullish(),
  normalBoss: z
    .array(z.object({ name: z.string(), icon: z.string(), id: z.string() }))
    .nullish(),
});
