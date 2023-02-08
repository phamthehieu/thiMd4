"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const laptop_1 = require("../model/laptop");
const data_soure_1 = require("../data-soure");
class LaptopService {
    constructor() {
        this.getAll = async () => {
            let sql = `select * from laptop`;
            return await this.laptopRepository.query(sql);
        };
        this.save = async (laptop) => {
            return await this.laptopRepository.save(laptop);
        };
        this.delete = async (id) => {
            let laptop = await this.laptopRepository.findOneBy({ idLaptop: id });
            if (!laptop) {
                return null;
            }
            else {
                await this.laptopRepository.delete({ idLaptop: id });
            }
        };
        this.update = async (id, newLaptop) => {
            let laptop = await this.laptopRepository.findOneBy({ idLaptop: id });
            if (!laptop) {
                return null;
            }
            else {
                await this.laptopRepository.update({ idLaptop: id }, newLaptop);
            }
        };
        this.findById = async (id) => {
            let sql = `select * from laptop l join brand b on l.brand = b.idBrand where idLaptop = ${id}`;
            let laptop = await this.laptopRepository.query(sql);
            return laptop;
        };
        this.findByName = async (name) => {
            let sql = `select * from laptop l join brand b on l.brand = b.idBrand where nameLaptop like '%${name}%'`;
            let laptop = await this.laptopRepository.query(sql);
            return laptop;
        };
        this.ascending = async () => {
            let sql = `select * from laptop l join brand b on l.brand = b.idBrand ORDER BY price`;
            let laptop = await this.laptopRepository.query(sql);
            return laptop;
        };
        this.decrease = async () => {
            let sql = `select * from laptop l join brand b on l.brand = b.idBrand ORDER BY price DESC`;
            let laptop = await this.laptopRepository.query(sql);
            return laptop;
        };
        this.laptopRepository = data_soure_1.AppDataSource.getRepository(laptop_1.Laptop);
    }
}
exports.default = new LaptopService();
//# sourceMappingURL=laptopService.js.map