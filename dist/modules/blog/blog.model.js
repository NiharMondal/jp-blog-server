"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const blogSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        min: [5, "Min length is 5"],
        max: [50, "Max length is 50"],
    },
    content: {
        type: String,
        required: [true, "Content is required"],
        min: [10, "Min length is 10"],
    },
    author: {
        type: String,
        required: [true, "Author name is required"],
    },
}, { timestamps: true });
const Blog = (0, mongoose_1.model)("Blog", blogSchema);
exports.default = Blog;
