"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalBossSchema = exports.normalBossListSchema = void 0;
const zod_1 = require("zod");
exports.normalBossListSchema = zod_1.z.array(zod_1.z.object({
    id: zod_1.z.string(),
    name: zod_1.z.string(),
    icon: zod_1.z.string().url(),
    uniqueRewards: zod_1.z
        .object({
        name: zod_1.z.string(),
        icon: zod_1.z.string().url(),
        worldLevel: zod_1.z.number(),
        character: zod_1.z.array(zod_1.z.object({
            name: zod_1.z.string(),
            icon: zod_1.z.string().url(),
            id: zod_1.z.string(),
        })),
    })
        .or(zod_1.z.array(zod_1.z.object({
        name: zod_1.z.string(),
        icon: zod_1.z.string().url(),
        worldLevel: zod_1.z.number(),
        character: zod_1.z.array(zod_1.z.object({
            name: zod_1.z.string(),
            icon: zod_1.z.string().url(),
            id: zod_1.z.string(),
        })),
    }))),
}));
exports.normalBossSchema = zod_1.z.object({
    id: zod_1.z.string(),
    name: zod_1.z.string(),
    title: zod_1.z.string().optional(),
    art: zod_1.z.string().url(),
    icon: zod_1.z.string().url(),
    region: zod_1.z.object({
        name: zod_1.z.string(),
        icon: zod_1.z.string().url(),
        location: zod_1.z.string(),
    }),
    element: zod_1.z
        .array(zod_1.z.object({ name: zod_1.z.string(), icon: zod_1.z.string().url() }))
        .optional(),
    description: zod_1.z.array(zod_1.z.object({ text: zod_1.z.string() })),
    uniqueRewards: zod_1.z.array(zod_1.z.object({
        name: zod_1.z.string(),
        icon: zod_1.z.string().url(),
        worldLevel: zod_1.z.number(),
        character: zod_1.z.array(zod_1.z.object({
            name: zod_1.z.string(),
            icon: zod_1.z.string().url(),
            id: zod_1.z.string(),
        })),
    })),
    rewards: zod_1.z.array(zod_1.z.object({
        name: zod_1.z.string(),
        icon: zod_1.z.string().url(),
        worldLevel: zod_1.z.number(),
        id: zod_1.z.string(),
    })),
});
