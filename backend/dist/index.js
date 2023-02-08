"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_soure_1 = require("./src/data-soure");
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const router_1 = require("./src/router/router");
const app = (0, express_1.default)();
data_soure_1.AppDataSource.initialize().then(() => {
    console.log(" Connect Server! ");
});
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static('./public'));
app.use('', router_1.router);
app.listen(3000, () => {
    console.log(' Connect Server! ');
});
//# sourceMappingURL=index.js.map