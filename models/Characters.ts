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
  title: z.string(),
  star: z.number(),
  art: z.string(),
  icon: z.string(),
  weapon: z.object({ type: z.string(), icon: z.string() }),
  element: z.object({ type: z.string(), icon: z.string() }),
  region: z.object({ name: z.string(), icon: z.string() }),
  ascension_materials: z.object({
    mora: z.object({
      name: z.string(),
      picture: z.string(),
      number: z.number(),
      id: z.string(),
    }),
    stone: z.array(
      z.object({
        name: z.string(),
        picture: z.string(),
        number: z.number(),
        id: z.string(),
      })
    ),
    bossLoot: z
      .object({
        name: z.string(),
        picture: z.string(),
        number: z.number(),
        id: z.string(),
      })
      .nullish(),
    material: z.object({
      name: z.string(),
      picture: z.string(),
      number: z.number(),
      id: z.string(),
    }),
    mobLoot: z.array(
      z.object({
        name: z.string(),
        picture: z.string(),
        number: z.number(),
        id: z.string(),
      })
    ),
  }),
  talents: z.object({
    attaqueNormale: z.object({
      name: z.string(),
      icon: z.string(),
      type: z.string(),
      description: z.array(z.object({ name: z.string(), text: z.string() })),
    }),
    competence: z.object({
      name: z.string(),
      icon: z.string(),
      type: z.string(),
      description: z.array(
        z.object({
          name: z.string(),
          text: z.string(),
          effect: z.array(z.object({ text: z.string() })),
        })
      ),
      note: z.string(),
    }),
    dechainement: z.object({
      name: z.string(),
      icon: z.string(),
      type: z.string(),
      description: z.array(
        z.object({
          name: z.string(),
          text: z.string(),
          effect: z.array(z.object({ text: z.string() })),
        })
      ),
      note: z.string(),
    }),
    passif1: z.object({
      name: z.string(),
      icon: z.string(),
      type: z.string(),
      description: z.object({
        text: z.string(),
        effect: z.array(z.object({ text: z.string() })),
      }),
    }),
    passif2: z.object({
      name: z.string(),
      icon: z.string(),
      type: z.string(),
      description: z.object({
        text: z.string(),
        effect: z.array(z.object({ text: z.string() })),
      }),
    }),
    passif3: z.object({
      name: z.string(),
      icon: z.string(),
      type: z.string(),
      description: z.string(),
    }),
  }),
  talent_upgrade: z
    .object({
      mora: z.object({
        name: z.string(),
        picture: z.string(),
        number: z.number(),
        id: z.string(),
      }),
      mobLoot: z.array(
        z.object({
          name: z.string(),
          picture: z.string(),
          number: z.number(),
          id: z.string(),
        })
      ),
      books: z.array(
        z.object({
          name: z.string(),
          picture: z.string(),
          number: z.number(),
          id: z.string(),
        })
      ),
      bossLoot: z.object({
        name: z.string(),
        picture: z.string(),
        number: z.number(),
        id: z.string(),
      }),
      crown: z.object({
        name: z.string(),
        picture: z.string(),
        number: z.number(),
        id: z.string(),
      }),
    })
    .or(
      z.object({
        normal_attack: z.object({
          mora: z.object({
            name: z.string(),
            picture: z.string(),
            number: z.number(),
            id: z.string(),
          }),
          mobLoot: z.array(
            z.object({
              name: z.string(),
              picture: z.string(),
              number: z.number(),
              id: z.string(),
            })
          ),
          books: z.array(
            z.object({
              name: z.string(),
              picture: z.string(),
              number: z.number(),
              id: z.string(),
            })
          ),
          bossLoot: z.object({
            name: z.string(),
            picture: z.string(),
            number: z.number(),
            id: z.string(),
          }),
          crown: z.object({
            name: z.string(),
            picture: z.string(),
            number: z.number(),
            id: z.string(),
          }),
        }),
        elemental_burst_skill: z.object({
          mora: z.object({
            name: z.string(),
            picture: z.string(),
            number: z.number(),
            id: z.string(),
          }),
          mobLoot: z.array(
            z.object({
              name: z.string(),
              picture: z.string(),
              number: z.number(),
              id: z.string(),
            })
          ),
          books: z.array(
            z.object({
              name: z.string(),
              picture: z.string(),
              number: z.number(),
              id: z.string(),
            })
          ),
          bossLoot: z.object({
            name: z.string(),
            picture: z.string(),
            number: z.number(),
            id: z.string(),
          }),
          crown: z.object({
            name: z.string(),
            picture: z.string(),
            number: z.number(),
            id: z.string(),
          }),
        }),
      })
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
