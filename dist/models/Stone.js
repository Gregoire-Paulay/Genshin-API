"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stoneDetailsSchema = exports.stoneListSchema = void 0;
const zod_1 = require("zod");
exports.stoneListSchema = zod_1.z.array(zod_1.z.object({
    id: zod_1.z.string(),
    name: zod_1.z.string(),
    element: zod_1.z.string().optional(),
    icon: zod_1.z.string().url().optional(),
    stone: zod_1.z.array(zod_1.z.object({
        name: zod_1.z.string(),
        icon: zod_1.z.string().url(),
        quality: zod_1.z.number(),
    })),
    character: zod_1.z.array(zod_1.z.object({ name: zod_1.z.string(), icon: zod_1.z.string().url(), id: zod_1.z.string() })),
    weeklyBoss: zod_1.z
        .array(zod_1.z.object({ name: zod_1.z.string(), icon: zod_1.z.string().url(), id: zod_1.z.string() }))
        .optional(),
    normalBoss: zod_1.z
        .array(zod_1.z.object({ name: zod_1.z.string(), icon: zod_1.z.string().url(), id: zod_1.z.string() }))
        .optional(),
    obtainment: zod_1.z.array(zod_1.z.object({ text: zod_1.z.string() })),
    description: zod_1.z.array(zod_1.z.object({ text: zod_1.z.string() })),
}));
exports.stoneDetailsSchema = zod_1.z.object({
    id: zod_1.z.string(),
    name: zod_1.z.string(),
    element: zod_1.z.string().optional(),
    icon: zod_1.z.string().url().optional(),
    stone: zod_1.z.array(zod_1.z.object({ name: zod_1.z.string(), icon: zod_1.z.string().url(), quality: zod_1.z.number() })),
    character: zod_1.z.array(zod_1.z.object({ name: zod_1.z.string(), icon: zod_1.z.string().url(), id: zod_1.z.string() })),
    weeklyBoss: zod_1.z
        .array(zod_1.z.object({ name: zod_1.z.string(), icon: zod_1.z.string().url(), id: zod_1.z.string() }))
        .optional(),
    normalBoss: zod_1.z
        .array(zod_1.z.object({ name: zod_1.z.string(), icon: zod_1.z.string().url(), id: zod_1.z.string() }))
        .optional(),
    obtainment: zod_1.z.array(zod_1.z.object({ text: zod_1.z.string() })),
    description: zod_1.z.array(zod_1.z.object({ text: zod_1.z.string() })),
});
