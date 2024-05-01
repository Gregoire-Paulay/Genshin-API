"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.weeklyBossSchema = exports.weeklyBossListSchema = void 0;
const zod_1 = require("zod");
exports.weeklyBossListSchema = zod_1.z.array(zod_1.z.object({
    id: zod_1.z.string(),
    name: zod_1.z.string(),
    icon: zod_1.z.string().url(),
    uniqueRewards: zod_1.z.array(zod_1.z.object({
        name: zod_1.z.string(),
        icon: zod_1.z.string().url(),
        character: zod_1.z.array(zod_1.z.object({ name: zod_1.z.string(), icon: zod_1.z.string().url(), id: zod_1.z.string() })),
    })),
}));
exports.weeklyBossSchema = zod_1.z.object({
    id: zod_1.z.string(),
    name: zod_1.z.string(),
    icon: zod_1.z.string().url(),
    art: zod_1.z.string().url(),
    art2: zod_1.z.string(),
    title: zod_1.z.string(),
    element: zod_1.z.array(zod_1.z.object({ name: zod_1.z.string(), icon: zod_1.z.string().url() })),
    description: zod_1.z.array(zod_1.z.object({ text: zod_1.z.string() })),
    region: zod_1.z.object({
        name: zod_1.z.string(),
        icon: zod_1.z.string().url(),
        location: zod_1.z.string(),
    }),
    rewards: zod_1.z.array(zod_1.z.object({
        name: zod_1.z.string(),
        level: zod_1.z.string(),
        icon: zod_1.z.string().url(),
        id: zod_1.z.string(),
    })),
    uniqueRewards: zod_1.z.array(zod_1.z.object({
        name: zod_1.z.string(),
        icon: zod_1.z.string().url(),
        character: zod_1.z.array(zod_1.z.object({ name: zod_1.z.string(), icon: zod_1.z.string().url(), id: zod_1.z.string() })),
    })),
});
