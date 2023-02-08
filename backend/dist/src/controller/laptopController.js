"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const laptopService_1 = __importDefault(require("../service/laptopService"));
const brandService_1 = __importDefault(require("../service/brandService"));
class LaptopController {
    constructor() {
        this.getAll = async (req, res) => {
            try {
                let laptop = await laptopService_1.default.getAll();
                res.status(200).json(laptop);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.create = async (req, res) => {
            try {
                let laptop = await laptopService_1.default.save(req.body);
                res.status(200).json(laptop);
            }
            catch (e) {
                res.status(200).json(e.message);
            }
        };
        this.delete = async (req, res) => {
            try {
                let id = req.params.id;
                await laptopService_1.default.delete(id);
                res.status(200).json('Delete Success!!!');
            }
            catch (e) {
                res.status(200).json(e.message);
            }
        };
        this.update = async (req, res) => {
            try {
                let id = req.params.id;
                let newLaptop = req.body;
                await laptopService_1.default.update(id, newLaptop);
                res.status(200).json('cap nhat thanh cong');
            }
            catch (e) {
                res.status(200).json(e.message);
            }
        };
        this.getLapTop = async (req, res) => {
            try {
                let laptop = await laptopService_1.default.findById(req.params.id);
                res.status(200).json(laptop);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.searchByName = async (req, res) => {
            try {
                let laptop = await laptopService_1.default.findByName(req.query.nameLaptop);
                res.status(200).json(laptop);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.searchByBrand = async (req, res) => {
            try {
                console.log(req.query.nameBrand);
                let laptop = await brandService_1.default.findByName(req.query.nameBrand);
                res.status(200).json(laptop);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.ascendingPrice = async (req, res) => {
            try {
                let laptop = await laptopService_1.default.ascending();
                res.status(200).json(laptop);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.decreasePrice = async (req, res) => {
            try {
                let laptop = await laptopService_1.default.decrease();
                res.status(200).json(laptop);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
    }
}
exports.default = new LaptopController();
//# sourceMappingURL=laptopController.js.map