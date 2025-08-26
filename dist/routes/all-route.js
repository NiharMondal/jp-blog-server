"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allRoute = void 0;
const blog_route_1 = require("../modules/blog/blog.route");
exports.allRoute = [{ path: "/blog", element: blog_route_1.blogRouter }];
