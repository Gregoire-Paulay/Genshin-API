import { z } from "zod";

export const charactersListSchema = z.array(
  z.object({
    id: z.string(),
    name: z.string(),
    icon: z.string(),
    element: z.object({ type: z.string(), icon: z.string() }),
  })
);

export const characterDetailsSchema = z.object({
  id: z.string(),
  name: z.string(),
  art: z.string(),
  icon: z.string(),
  weapon: z.object({ type: z.string(), icon: z.string() }),
  element: z.object({ type: z.string(), icon: z.string() }),
  region: z.object({ name: z.string(), icon: z.string() }),
  ascension_materials: z.array(
    z.object({
      name: z.string(),
      picture: z.string(),
      number: z.number(),
      id: z.string(),
    })
  ),
  talents: z.array(
    z.object({
      name: z.string(),
      icon: z.string(),
      type: z.string(),
      description: z
        .array(z.object({ name: z.string(), text: z.string() }))
        .or(z.string()),
    })
  ),
  talent_upgrade: z.array(
    z
      .object({
        name: z.string(),
        picture: z.string(),
        number: z.number(),
        id: z.string(),
      })
      .or(
        z.object({
          normal_attack: z.array(
            z.object({
              name: z.string(),
              picture: z.string(),
              number: z.number(),
              id: z.string(),
            })
          ),
          elemental_burst_skill: z.array(
            z.object({
              name: z.string(),
              picture: z.string(),
              number: z.number(),
              id: z.string(),
            })
          ),
        })
      )
  ),
  constellation: z.object({
    name: z.string(),
    icon: z.string(),
    icon2: z.string().nullish(),
  }),
  constellation_upgrade: z.array(
    z.object({
      name: z.string(),
      level: z.number(),
      description: z.string(),
      icon: z.string(),
    })
  ),
});
