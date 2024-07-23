"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allDailySchema = void 0;
const zod_1 = require("zod");
exports.allDailySchema = zod_1.z.array(zod_1.z.object({
    id: zod_1.z.string(),
    date: zod_1.z.string(),
    books: zod_1.z.array(zod_1.z.object({
        name: zod_1.z.string(),
        icon: zod_1.z.string().url(),
        character: zod_1.z.array(zod_1.z.object({ name: zod_1.z.string(), icon: zod_1.z.string(), id: zod_1.z.string() })),
    })),
}));
