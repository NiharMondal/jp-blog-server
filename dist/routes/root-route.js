"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootRoute = void 0;
const express_1 = require("express");
const all_route_1 = require("./all-route");
const router = (0, express_1.Router)();
all_route_1.allRoute.forEach((el) => router.use(el.path, el.element));
exports.rootRoute = router;
