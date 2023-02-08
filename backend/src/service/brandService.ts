import {Brand} from "../model/brand";
import {AppDataSource} from "../data-soure";

class BrandService {
    private brandRepository;

    constructor() {
        this.brandRepository = AppDataSource.getRepository(Brand);
    }

    findByName = async (name) => {
        let sql = `select * from brand b join laptop l on b.idBrand = l.brand where nameBrand like '%${name}%'`
        let laptop = await this.brandRepository.query(sql)
        return laptop
    }
}
export default new BrandService()
