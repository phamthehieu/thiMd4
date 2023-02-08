"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const brand_1 = require("../model/brand");
const data_soure_1 = require("../data-soure");
class BrandService {
    constructor() {
        this.findByName = async (name) => {
            let sql = `select * from brand b join laptop l on b.idBrand = l.brand where nameBrand like '%${name}%'`;
            let laptop = await this.brandRepository.query(sql);
            return laptop;
        };
        this.brandRepository = data_soure_1.AppDataSource.getRepository(brand_1.Brand);
    }
}
exports.default = new BrandService();
//# sourceMappingURL=brandService.js.map