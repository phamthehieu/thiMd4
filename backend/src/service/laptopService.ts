import {Laptop} from "../model/laptop";
import {AppDataSource} from "../data-soure";

class LaptopService {
    private laptopRepository;

    constructor() {
        this.laptopRepository = AppDataSource.getRepository(Laptop);
    }
    getAll = async () => {
        let sql = `select * from laptop`
        return await this.laptopRepository.query(sql)
    }
    save = async (laptop) =>{
        return await this.laptopRepository.save(laptop)
    }
    delete = async (id)=>{
        let laptop = await this.laptopRepository.findOneBy({idLaptop:id})
        if(!laptop){
            return null
        }
        else {
          await this.laptopRepository.delete({idLaptop:id})
        }

    }
    update = async (id,newLaptop)=>{
        let laptop = await this.laptopRepository.findOneBy({idLaptop:id})
        if(!laptop){
            return null
        }
        else {
           await this.laptopRepository.update({idLaptop:id},newLaptop)
        }
    }
    findById = async (id) => {
    let sql = `select * from laptop l join brand b on l.brand = b.idBrand where idLaptop = ${id}`
        let laptop = await this.laptopRepository.query(sql)
        return laptop
    }
    findByName = async (name) => {
        let sql = `select * from laptop l join brand b on l.brand = b.idBrand where nameLaptop like '%${name}%'`
        let laptop = await this.laptopRepository.query(sql)
        return laptop
    }
    ascending = async () => {
        let sql = `select * from laptop l join brand b on l.brand = b.idBrand ORDER BY price`
        let laptop = await this.laptopRepository.query(sql)
        return laptop
    }
    decrease = async () => {
        let sql = `select * from laptop l join brand b on l.brand = b.idBrand ORDER BY price DESC`
        let laptop = await this.laptopRepository.query(sql)
        return laptop
    }
}
export default new LaptopService()
