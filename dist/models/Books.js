"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allBooksDetailsSchema = exports.allBooksSchema = void 0;
const zod_1 = require("zod");
exports.allBooksSchema = zod_1.z.array(zod_1.z.object({
    id: zod_1.z.string(),
    domain: zod_1.z.string(),
    picture: zod_1.z.string().url(),
    region: zod_1.z.object({
        name: zod_1.z.string(),
        icon: zod_1.z.string().url(),
        location: zod_1.z.string(),
    }),
    books: zod_1.z.array(zod_1.z.object({
        name: zod_1.z.string(),
        material: zod_1.z.array(zod_1.z.object({
            name: zod_1.z.string(),
            icon: zod_1.z.string().url(),
            quality: zod_1.z.number(),
        })),
        day: zod_1.z.string(),
        character: zod_1.z.array(zod_1.z.object({
            name: zod_1.z.string(),
            icon: zod_1.z.string().url(),
            id: zod_1.z.string(),
        })),
    })),
}));
exports.allBooksDetailsSchema = zod_1.z.object({
    id: zod_1.z.string(),
    domain: zod_1.z.string(),
    picture: zod_1.z.string().url(),
    region: zod_1.z.object({
        name: zod_1.z.string(),
        icon: zod_1.z.string().url(),
        location: zod_1.z.string(),
    }),
    books: zod_1.z.array(zod_1.z.object({
        name: zod_1.z.string(),
        material: zod_1.z.array(zod_1.z.object({
            name: zod_1.z.string(),
            icon: zod_1.z.string().url(),
            quality: zod_1.z.number(),
        })),
        day: zod_1.z.string(),
        character: zod_1.z.array(zod_1.z.object({
            name: zod_1.z.string(),
            icon: zod_1.z.string().url(),
            id: zod_1.z.string(),
        })),
    })),
});
