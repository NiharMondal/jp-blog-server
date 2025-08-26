"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogValidation = void 0;
const zod_1 = __importDefault(require("zod"));
const createBlog = zod_1.default.object({
    title: zod_1.default
        .string({ error: "Title is required" })
        .nonempty({ error: "Title can not be empty" })
        .min(5, "Min length is 5")
        .max(50, "Max length is 50")
        .trim(),
    content: zod_1.default
        .string({ error: "Content is required" })
        .nonempty({ error: "Content can not be empty" })
        .min(10, "Min length is 10")
        .trim(),
    author: zod_1.default
        .string({ error: "Author is required" })
        .nonempty({ error: "Author can not be empty" })
        .trim(),
});
exports.blogValidation = { createBlog };
