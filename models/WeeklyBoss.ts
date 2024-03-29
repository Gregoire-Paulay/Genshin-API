import { z } from "zod";

export const weeklyBossListSchema = z.array(
  z.object({
    id: z.string(),
    icon: z.string().url(),
    uniqueRewards: z.array(
      z.object({
        name: z.string(),
        icon: z.string().url(),
        character: z.array(
          z.object({ name: z.string(), icon: z.string().url(), id: z.string() })
        ),
      })
    ),
  })
);

export const weeklyBossSchema = z.object({
  id: z.string(),
  name: z.string(),
  icon: z.string().url(),
  art: z.string().url(),
  art2: z.string(),
  region: z.object({
    name: z.string(),
    icon: z.string().url(),
    location: z.string(),
  }),
  rewards: z.array(
    z.object({
      name: z.string(),
      level: z.string(),
      icon: z.string().url(),
      id: z.string(),
    })
  ),
  uniqueRewards: z.array(
    z.object({
      name: z.string(),
      icon: z.string().url(),
      character: z.array(
        z.object({ name: z.string(), icon: z.string().url(), id: z.string() })
      ),
    })
  ),
});
