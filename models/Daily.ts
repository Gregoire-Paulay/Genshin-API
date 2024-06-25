import { z } from "zod";

export const allDailySchema = z.array(
  z.object({
    id: z.string(),
    date: z.string(),
    materials: z.array(
      z.object({
        name: z.string(),
        icon: z.string().url(),
        character: z.array(
          z.object({ name: z.string(), icon: z.string(), id: z.string() })
        ),
      })
    ),
  })
);
