import { text } from "express";
import { string, z } from "zod";

export const allWeaponMaterialsSchema = z.array(
  z.object({
    id: z.string(),
    domain: z.string(),
    picture: z.string().url(),
    region: z.object({
      name: z.string(),
      icon: z.string().url(),
      location: z.string(),
    }),
    materials: z.array(
      z.object({
        name: z.string(),
        day: z.string(),
        details: z.array(
          z.object({ name: z.string(), icon: z.string(), quality: z.number() })
        ),
        weapons: z.array(
          z.object({ name: z.string(), icon: z.string().url(), id: z.string() })
        ),
      })
    ),
  })
);

export const weaponMaterialsSchema = z.object({
  id: z.string(),
  domain: z.string(),
  picture: z.string().url(),
  region: z.object({
    name: z.string(),
    icon: z.string().url(),
    location: z.string(),
  }),
  materials: z.array(
    z.object({
      name: z.string(),
      day: z.string(),
      details: z.array(
        z.object({ name: z.string(), icon: z.string(), quality: z.number() })
      ),
      weapons: z.array(
        z.object({ name: z.string(), icon: z.string().url(), id: z.string() })
      ),
    })
  ),
});

export const allWeaponsSchema = z.array(
  z.object({
    id: z.string(),
    star: z.number(),
    name: z.string(),
    icon: z.string().url().optional(),
    icon_ascended: z.string().url().optional(),
    type: z.object({
      name: z.string(),
      icon: z.string().url(),
    }),
    release_date: z.string(),
    obtain: z.string(),
    atk: z.string(),
    stat_secondaire: z
      .object({ type: z.string(), stat: z.string() })
      .optional(),
    description: z.string(),
    effect: z
      .array(
        z.object({
          title: z.string().optional(),
          text: z.string(),
          level: z
            .object({
              r1: z.string(),
              r2: z.string(),
              r3: z.string(),
              r4: z.string(),
              r5: z.string(),
            })
            .optional(),
        })
      )
      .optional(),
    ascension: z.object({
      mora: z.object({
        name: z.string(),
        icon: z.string().url(),
        number: z.string(),
      }),
      mobLoot: z.array(
        z.object({
          name: z.string(),
          picture: z.string().url(),
          number: z.number(),
        })
      ),
      material: z.array(
        z.object({
          name: z.string(),
          picture: z.string().url(),
          number: z.number(),
          id: z.string(),
        })
      ),
    }),
  })
);

export const weaponSchema = z.object({
  id: z.string(),
  star: z.number(),
  name: z.string(),
  icon: z.string().url().optional(),
  icon_ascended: z.string().url().optional(),
  icon_ousia: z.string().url().optional(),
  icon_pneuma: z.string().url().optional(),
  type: z.object({
    name: z.string(),
    icon: z.string().url(),
  }),
  release_date: z.string(),
  obtain: z.string(),
  atk: z.string(),
  stat_secondaire: z.object({ type: z.string(), stat: z.string() }).optional(),
  description: z.string(),
  effect: z
    .array(
      z.object({
        title: z.string().optional(),
        text: z.string(),
        level: z.array(z.string()).optional(),
      })
    )
    .optional(),
  ascension: z.object({
    mora: z.object({
      name: z.string(),
      icon: z.string().url(),
      number: z.string(),
    }),
    mobLoot: z.array(
      z.object({
        name: z.string(),
        picture: z.string().url(),
        number: z.number(),
      })
    ),
    material: z.array(
      z.object({
        name: z.string(),
        picture: z.string().url(),
        number: z.number(),
        id: z.string(),
      })
    ),
  }),
});
