"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogServices = void 0;
const QueryBuilder_1 = __importDefault(require("../../lib/QueryBuilder"));
const CustomError_1 = __importDefault(require("../../utils/CustomError"));
const blog_model_1 = __importDefault(require("./blog.model"));
const createIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const blog = yield blog_model_1.default.create(payload);
    return blog;
});
const getAllFromDB = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const res = new QueryBuilder_1.default(blog_model_1.default.find(), query)
        .search(["title", "author"])
        .filter()
        .sort()
        .pagination();
    const blogs = yield res.getQuery();
    const meta = yield res.countTotal();
    return { meta, blogs };
});
const getById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const blog = yield blog_model_1.default.findById(id);
    if (!blog) {
        throw new CustomError_1.default(404, "Blog is not found");
    }
    return blog;
});
const updateDoc = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const blog = yield blog_model_1.default.findByIdAndUpdate(id, Object.assign({}, payload), { new: true });
    if (!blog) {
        throw new CustomError_1.default(404, "Blog is not found");
    }
    return blog;
});
const deleteDoc = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const blog = yield blog_model_1.default.findByIdAndDelete(id);
    if (!blog) {
        throw new CustomError_1.default(404, "Blog is not found");
    }
    return blog;
});
exports.blogServices = {
    createIntoDB,
    getAllFromDB,
    getById,
    updateDoc,
    deleteDoc,
};
