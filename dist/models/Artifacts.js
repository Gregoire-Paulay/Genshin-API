"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.artifactsSchemas = exports.allArtifactsSchema = void 0;
const zod_1 = require("zod");
exports.allArtifactsSchema = zod_1.z.array(zod_1.z.object({
    id: zod_1.z.string(),
    star: zod_1.z.number(),
    set_name: zod_1.z.string(),
    source: zod_1.z.array(zod_1.z.object({ name: zod_1.z.string(), picture: zod_1.z.string().url().optional() })),
    set_details: zod_1.z.array(zod_1.z.object({
        name: zod_1.z.string(),
        icon: zod_1.z.string().url(),
        main_stats: zod_1.z.array(zod_1.z.object({ name: zod_1.z.string(), number: zod_1.z.string() })),
        secondary_stats: zod_1.z.array(zod_1.z.object({ name: zod_1.z.string(), number: zod_1.z.string() })),
        description: zod_1.z.string(),
    })),
    bonus: zod_1.z.array(zod_1.z.object({
        name: zod_1.z.string(),
        description: zod_1.z.string(),
    })),
}));
exports.artifactsSchemas = zod_1.z.object({
    id: zod_1.z.string(),
    star: zod_1.z.number(),
    set_name: zod_1.z.string(),
    source: zod_1.z.array(zod_1.z.object({ name: zod_1.z.string(), picture: zod_1.z.string().url().optional() })),
    set_details: zod_1.z.array(zod_1.z.object({
        name: zod_1.z.string(),
        icon: zod_1.z.string(),
        main_stats: zod_1.z.array(zod_1.z.object({ name: zod_1.z.string(), number: zod_1.z.string() })),
        secondary_stats: zod_1.z.array(zod_1.z.object({ name: zod_1.z.string(), number: zod_1.z.string() })),
        description: zod_1.z.string(),
    })),
    bonus: zod_1.z.array(zod_1.z.object({
        name: zod_1.z.string(),
        description: zod_1.z.string(),
    })),
});
