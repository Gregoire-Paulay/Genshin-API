import { z } from "zod";

export const normalBossListSchema = z.array(
  z.object({
    id: z.string(),
    name: z.string(),
    title: z.string().optional(),
    art: z.string().url(),
    icon: z.string().url(),
    region: z.object({
      name: z.string(),
      icon: z.string().url(),
      location: z.string(),
    }),
    element: z
      .array(z.object({ name: z.string(), icon: z.string().url() }))
      .optional(),
    description: z.array(z.object({ text: z.string() })),
    uniqueRewards: z.array(
      z.object({
        name: z.string(),
        icon: z.string().url(),
        worldLevel: z.number(),
        character: z.array(
          z.object({
            name: z.string(),
            icon: z.string().url(),
            id: z.string(),
          })
        ),
      })
    ),
    rewards: z.array(
      z.object({
        name: z.string(),
        icon: z.string().url(),
        worldLevel: z.number(),
        id: z.string(),
      })
    ),
  })
);

export const normalBossSchema = z.object({
  id: z.string(),
  name: z.string(),
  title: z.string().optional(),
  art: z.string().url(),
  icon: z.string().url(),
  region: z.object({
    name: z.string(),
    icon: z.string().url(),
    location: z.string(),
  }),
  element: z
    .array(z.object({ name: z.string(), icon: z.string().url() }))
    .optional(),
  description: z.array(z.object({ text: z.string() })),
  uniqueRewards: z.array(
    z.object({
      name: z.string(),
      icon: z.string().url(),
      worldLevel: z.number(),
      character: z.array(
        z.object({
          name: z.string(),
          icon: z.string().url(),
          id: z.string(),
        })
      ),
    })
  ),
  rewards: z.array(
    z.object({
      name: z.string(),
      icon: z.string().url(),
      worldLevel: z.number(),
      id: z.string(),
    })
  ),
});
