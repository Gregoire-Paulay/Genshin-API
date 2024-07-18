import { z } from "zod";

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
