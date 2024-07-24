"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.weaponSchema = exports.allWeaponsSchema = exports.weaponMaterialsSchema = exports.allWeaponMaterialsSchema = void 0;
const zod_1 = require("zod");
exports.allWeaponMaterialsSchema = zod_1.z.array(zod_1.z.object({
    id: zod_1.z.string(),
    domain: zod_1.z.string(),
    picture: zod_1.z.string().url(),
    region: zod_1.z.object({
        name: zod_1.z.string(),
        icon: zod_1.z.string().url(),
        location: zod_1.z.string(),
    }),
    materials: zod_1.z.array(zod_1.z.object({
        name: zod_1.z.string(),
        day: zod_1.z.string(),
        details: zod_1.z.array(zod_1.z.object({ name: zod_1.z.string(), icon: zod_1.z.string(), quality: zod_1.z.number() })),
        weapons: zod_1.z.array(zod_1.z.object({ name: zod_1.z.string(), icon: zod_1.z.string().url(), id: zod_1.z.string() })),
    })),
}));
exports.weaponMaterialsSchema = zod_1.z.object({
    id: zod_1.z.string(),
    domain: zod_1.z.string(),
    picture: zod_1.z.string().url(),
    region: zod_1.z.object({
        name: zod_1.z.string(),
        icon: zod_1.z.string().url(),
        location: zod_1.z.string(),
    }),
    materials: zod_1.z.array(zod_1.z.object({
        name: zod_1.z.string(),
        day: zod_1.z.string(),
        details: zod_1.z.array(zod_1.z.object({ name: zod_1.z.string(), icon: zod_1.z.string(), quality: zod_1.z.number() })),
        weapons: zod_1.z.array(zod_1.z.object({ name: zod_1.z.string(), icon: zod_1.z.string().url(), id: zod_1.z.string() })),
    })),
});
exports.allWeaponsSchema = zod_1.z.array(zod_1.z.object({
    id: zod_1.z.string(),
    star: zod_1.z.number(),
    name: zod_1.z.string(),
    icon: zod_1.z.string().url().optional(),
    icon_ascended: zod_1.z.string().url().optional(),
    icon_ousia: zod_1.z.string().url().optional(),
    icon_pneuma: zod_1.z.string().url().optional(),
    type: zod_1.z.object({
        name: zod_1.z.string(),
        icon: zod_1.z.string().url(),
    }),
    release_date: zod_1.z.string(),
    obtain: zod_1.z.string(),
    atk: zod_1.z.string(),
    stat_secondaire: zod_1.z
        .object({ type: zod_1.z.string(), stat: zod_1.z.string() })
        .optional(),
    description: zod_1.z.string(),
    effect: zod_1.z
        .array(zod_1.z.object({
        title: zod_1.z.string().optional(),
        text: zod_1.z.string(),
        level: zod_1.z.array(zod_1.z.string()).optional(),
    }))
        .optional(),
    ascension: zod_1.z.object({
        mora: zod_1.z.object({
            name: zod_1.z.string(),
            icon: zod_1.z.string().url(),
            number: zod_1.z.string(),
        }),
        mobLoot: zod_1.z.array(zod_1.z.object({
            name: zod_1.z.string(),
            picture: zod_1.z.string().url(),
            number: zod_1.z.number(),
        })),
        material: zod_1.z.array(zod_1.z.object({
            name: zod_1.z.string(),
            picture: zod_1.z.string().url(),
            number: zod_1.z.number(),
            id: zod_1.z.string(),
        })),
    }),
}));
exports.weaponSchema = zod_1.z.object({
    id: zod_1.z.string(),
    star: zod_1.z.number(),
    name: zod_1.z.string(),
    icon: zod_1.z.string().url().optional(),
    icon_ascended: zod_1.z.string().url().optional(),
    icon_ousia: zod_1.z.string().url().optional(),
    icon_pneuma: zod_1.z.string().url().optional(),
    type: zod_1.z.object({
        name: zod_1.z.string(),
        icon: zod_1.z.string().url(),
    }),
    release_date: zod_1.z.string(),
    obtain: zod_1.z.string(),
    atk: zod_1.z.string(),
    stat_secondaire: zod_1.z.object({ type: zod_1.z.string(), stat: zod_1.z.string() }).optional(),
    description: zod_1.z.string(),
    effect: zod_1.z
        .array(zod_1.z.object({
        title: zod_1.z.string().optional(),
        text: zod_1.z.string(),
        level: zod_1.z.array(zod_1.z.string()).optional(),
    }))
        .optional(),
    ascension: zod_1.z.object({
        mora: zod_1.z.object({
            name: zod_1.z.string(),
            icon: zod_1.z.string().url(),
            number: zod_1.z.string(),
        }),
        mobLoot: zod_1.z.array(zod_1.z.object({
            name: zod_1.z.string(),
            picture: zod_1.z.string().url(),
            number: zod_1.z.number(),
        })),
        material: zod_1.z.array(zod_1.z.object({
            name: zod_1.z.string(),
            picture: zod_1.z.string().url(),
            number: zod_1.z.number(),
            id: zod_1.z.string(),
        })),
    }),
});
