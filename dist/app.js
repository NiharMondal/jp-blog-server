"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const notFoundRoute_1 = __importDefault(require("./middleware/notFoundRoute"));
const globalError_1 = __importDefault(require("./middleware/globalError"));
const root_route_1 = require("./routes/root-route");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: ["https://jp-blog-liart.vercel.app", "http://localhost:3000"],
}));
app.use("/api", root_route_1.rootRoute);
app.use(notFoundRoute_1.default);
app.use(globalError_1.default);
exports.default = app;
