"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogRouter = void 0;
const express_1 = require("express");
const blog_controller_1 = require("./blog.controller");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const blog_validation_1 = require("./blog.validation");
const router = (0, express_1.Router)();
router
    .route("/:id")
    .get(blog_controller_1.blogController.getById)
    .patch(blog_controller_1.blogController.updateDoc)
    .delete(blog_controller_1.blogController.deleteDoc);
router
    .route("/")
    .post((0, validateRequest_1.default)(blog_validation_1.blogValidation.createBlog), blog_controller_1.blogController.createIntoDB)
    .get(blog_controller_1.blogController.getAllFromDB);
exports.blogRouter = router;
