"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.characterDetailsSchema = exports.charactersListSchema = void 0;
const zod_1 = require("zod");
exports.charactersListSchema = zod_1.z.array(zod_1.z.object({
    id: zod_1.z.string(),
    name: zod_1.z.string(),
    star: zod_1.z.number(),
    icon: zod_1.z.string().url(),
    element: zod_1.z.object({ type: zod_1.z.string(), icon: zod_1.z.string() }),
}));
exports.characterDetailsSchema = zod_1.z.object({
    id: zod_1.z.string(),
    name: zod_1.z.string(),
    release_date: zod_1.z.string(),
    star: zod_1.z.number(),
    title: zod_1.z.string(),
    other_title: zod_1.z.array(zod_1.z.object({ name: zod_1.z.string() })),
    real_name: zod_1.z.string().optional(),
    description: zod_1.z.string(),
    art: zod_1.z.string().url(),
    icon: zod_1.z.string().url(),
    wish: zod_1.z.string().url().optional(),
    archon: zod_1.z.string().url().optional(),
    element: zod_1.z.object({ type: zod_1.z.string(), icon: zod_1.z.string().url() }),
    weapon: zod_1.z.object({ type: zod_1.z.string(), icon: zod_1.z.string().url() }),
    birthday: zod_1.z.string(),
    dish: zod_1.z.object({ name: zod_1.z.string(), icon: zod_1.z.string() }).optional(),
    namecard: zod_1.z.object({ name: zod_1.z.string(), icon: zod_1.z.string() }).optional(),
    affiliation: zod_1.z.array(zod_1.z.object({ name: zod_1.z.string() })).optional(),
    region: zod_1.z.array(zod_1.z.object({ name: zod_1.z.string(), icon: zod_1.z.string().url().optional() })),
    ascension_materials: zod_1.z.object({
        mora: zod_1.z.object({
            name: zod_1.z.string(),
            picture: zod_1.z.string().url(),
            number: zod_1.z.number(),
            id: zod_1.z.string(),
        }),
        stone: zod_1.z.array(zod_1.z.object({
            name: zod_1.z.string(),
            picture: zod_1.z.string().url(),
            number: zod_1.z.number(),
            id: zod_1.z.string(),
        })),
        bossLoot: zod_1.z
            .object({
            name: zod_1.z.string(),
            picture: zod_1.z.string().url(),
            number: zod_1.z.number(),
            id: zod_1.z.string(),
        })
            .optional(),
        material: zod_1.z.object({
            name: zod_1.z.string(),
            picture: zod_1.z.string().url(),
            number: zod_1.z.number(),
            id: zod_1.z.string(),
        }),
        mobLoot: zod_1.z.array(zod_1.z.object({
            name: zod_1.z.string(),
            picture: zod_1.z.string().url(),
            number: zod_1.z.number(),
            id: zod_1.z.string(),
        })),
    }),
    talents: zod_1.z.array(zod_1.z.object({
        name: zod_1.z.string(),
        icon: zod_1.z.string().url(),
        type: zod_1.z.string(),
        description: zod_1.z.array(zod_1.z.object({
            name: zod_1.z.string().optional(),
            text: zod_1.z.string().optional(),
            effect: zod_1.z.array(zod_1.z.object({ text: zod_1.z.string() })).optional(),
        })),
        note: zod_1.z.string().optional(),
    })),
    talent_upgrade: zod_1.z
        .object({
        mora: zod_1.z.object({
            name: zod_1.z.string(),
            picture: zod_1.z.string().url(),
            number: zod_1.z.number(),
            id: zod_1.z.string(),
        }),
        mobLoot: zod_1.z.array(zod_1.z.object({
            name: zod_1.z.string(),
            picture: zod_1.z.string().url(),
            number: zod_1.z.number(),
            id: zod_1.z.string(),
        })),
        books: zod_1.z.array(zod_1.z.object({
            name: zod_1.z.string(),
            picture: zod_1.z.string().url(),
            number: zod_1.z.number(),
            id: zod_1.z.string(),
        })),
        bossLoot: zod_1.z.object({
            name: zod_1.z.string(),
            picture: zod_1.z.string().url(),
            number: zod_1.z.number(),
            id: zod_1.z.string(),
        }),
        crown: zod_1.z.object({
            name: zod_1.z.string(),
            picture: zod_1.z.string().url(),
            number: zod_1.z.number(),
            id: zod_1.z.string(),
        }),
    })
        .or(zod_1.z.object({
        normal_attack: zod_1.z.object({
            mora: zod_1.z.object({
                name: zod_1.z.string(),
                picture: zod_1.z.string().url(),
                number: zod_1.z.number(),
                id: zod_1.z.string(),
            }),
            mobLoot: zod_1.z.array(zod_1.z.object({
                name: zod_1.z.string(),
                picture: zod_1.z.string().url(),
                number: zod_1.z.number(),
                id: zod_1.z.string(),
            })),
            books: zod_1.z.array(zod_1.z.object({
                name: zod_1.z.string(),
                picture: zod_1.z.string().url(),
                number: zod_1.z.number(),
                id: zod_1.z.string(),
            })),
            bossLoot: zod_1.z.object({
                name: zod_1.z.string(),
                picture: zod_1.z.string().url(),
                number: zod_1.z.number(),
                id: zod_1.z.string(),
            }),
            crown: zod_1.z.object({
                name: zod_1.z.string(),
                picture: zod_1.z.string().url(),
                number: zod_1.z.number(),
                id: zod_1.z.string(),
            }),
        }),
        elemental_burst_skill: zod_1.z.object({
            mora: zod_1.z.object({
                name: zod_1.z.string(),
                picture: zod_1.z.string().url(),
                number: zod_1.z.number(),
                id: zod_1.z.string(),
            }),
            mobLoot: zod_1.z.array(zod_1.z.object({
                name: zod_1.z.string(),
                picture: zod_1.z.string().url(),
                number: zod_1.z.number(),
                id: zod_1.z.string(),
            })),
            books: zod_1.z.array(zod_1.z.object({
                name: zod_1.z.string(),
                picture: zod_1.z.string().url(),
                number: zod_1.z.number(),
                id: zod_1.z.string(),
            })),
            bossLoot: zod_1.z.object({
                name: zod_1.z.string(),
                picture: zod_1.z.string().url(),
                number: zod_1.z.number(),
                id: zod_1.z.string(),
            }),
            crown: zod_1.z.object({
                name: zod_1.z.string(),
                picture: zod_1.z.string().url(),
                number: zod_1.z.number(),
                id: zod_1.z.string(),
            }),
        }),
    })),
    constellation: zod_1.z.object({
        name: zod_1.z.string(),
        icon: zod_1.z.string().url(),
        icon2: zod_1.z.string().url().optional(),
    }),
    constellation_upgrade: zod_1.z.array(zod_1.z.object({
        name: zod_1.z.string(),
        level: zod_1.z.number().or(zod_1.z.string()),
        description: zod_1.z.object({
            text: zod_1.z.string(),
            effect: zod_1.z.array(zod_1.z.object({ text: zod_1.z.string() })).optional(),
            note: zod_1.z.string().optional(),
        }),
        icon: zod_1.z.string(),
    })),
});
