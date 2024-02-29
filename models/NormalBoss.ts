import { z } from "zod";

export const normalBossListSchema = z.array(
  z.object({
    id: z.string(),
    name: z.string(),
    icon: z.string(),
    uniqueRewards: z
      .object({
        name: z.string(),
        icon: z.string(),
        worldLevel: z.number(),
        character: z.array(
          z.object({
            name: z.string(),
            icon: z.string(),
            id: z.string(),
          })
        ),
      })
      .or(
        z.array(
          z.object({
            name: z.string(),
            icon: z.string(),
            worldLevel: z.number(),
            character: z.array(
              z.object({
                name: z.string(),
                icon: z.string(),
                id: z.string(),
              })
            ),
          })
        )
      ),
  })
);

export const normalBossSchema = z.object({
  id: z.string(),
  name: z.string(),
  name2: z.string(),
  art: z.string(),
  icon: z.string(),
  uniqueRewards: z
    .object({
      name: z.string(),
      icon: z.string(),
      worldLevel: z.number(),
      character: z.array(
        z.object({
          name: z.string(),
          icon: z.string(),
          id: z.string(),
        })
      ),
    })
    .or(
      z.array(
        z.object({
          name: z.string(),
          icon: z.string(),
          worldLevel: z.number(),
          character: z.array(
            z.object({
              name: z.string(),
              icon: z.string(),
              id: z.string(),
            })
          ),
        })
      )
    ),
  rewards: z.array(
    z.object({
      name: z.string(),
      icon: z.string(),
      worldLevel: z.number(),
      id: z.string(),
    })
  ),
});
