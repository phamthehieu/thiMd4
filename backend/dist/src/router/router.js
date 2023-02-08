"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const laptopRouter_1 = require("./laptopRouter");
exports.router = (0, express_1.Router)();
exports.router.use("/laptop", laptopRouter_1.laptopRouter);
//# sourceMappingURL=router.js.map