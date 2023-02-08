"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.laptopRouter = void 0;
const express_1 = require("express");
const laptopController_1 = __importDefault(require("../controller/laptopController"));
exports.laptopRouter = (0, express_1.Router)();
exports.laptopRouter.get("", laptopController_1.default.getAll);
exports.laptopRouter.post("", laptopController_1.default.create);
exports.laptopRouter.put("/:id", laptopController_1.default.update);
exports.laptopRouter.delete("/:id", laptopController_1.default.delete);
exports.laptopRouter.get("/:id", laptopController_1.default.getLapTop);
exports.laptopRouter.get("/search/findByName", laptopController_1.default.searchByName);
exports.laptopRouter.get("/search/brand", laptopController_1.default.searchByBrand);
exports.laptopRouter.get("/ascending/price", laptopController_1.default.ascendingPrice);
exports.laptopRouter.get("/decrease/price", laptopController_1.default.decreasePrice);
//# sourceMappingURL=laptopRouter.js.map