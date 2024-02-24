import { z } from "zod";

export const weeklyBossListSchema = z.array(
  z.object({
    id: z.string(),
    icon: z.string(),
    uniqueRewards: z.array(
      z.object({
        name: z.string(),
        icon: z.string(),
        character: z.array(z.object({ name: z.string(), icon: z.string() })),
      })
    ),
  })
);

export const weeklyBossSchema = z.object({
  id: z.string(),
  icon: z.string(),
  art: z.string(),
  art2: z.string(),
  region: z.object({
    name: z.string(),
    icon: z.string(),
    location: z.string(),
  }),
  rewards: z.array(
    z.object({ name: z.string(), level: z.string(), icon: z.string() })
  ),
  uniqueRewards: z.array(
    z.object({
      name: z.string(),
      icon: z.string(),
      character: z.array(z.object({ name: z.string(), icon: z.string() })),
    })
  ),
});
