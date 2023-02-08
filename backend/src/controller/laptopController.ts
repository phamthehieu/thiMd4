import {Request, Response} from "express";
import laptopService from "../service/laptopService"
import brandService from "../service/brandService";
class LaptopController {
    constructor() {
    }

    getAll = async (req: Request, res: Response) => {
        try {
            let laptop = await laptopService.getAll();
            res.status(200).json(laptop)
        } catch (e) {
            res.status(500).json(e.message);
        }
    };
    create = async (req:Request, res :Response)=>{
        try{
            let laptop = await laptopService.save(req.body)
            res.status(200).json(laptop)
        }
        catch (e){
            res.status(200).json(e.message)
        }
    }
    delete = async (req:Request, res :Response)=>{
        try{
            let id = req.params.id
            await laptopService.delete(id)
            res.status(200).json('Delete Success!!!')
        }
        catch (e){
            res.status(200).json(e.message)
        }
    }
    update = async (req:Request, res :Response)=>{
        try{
            let id = req.params.id
            let newLaptop = req.body
            await laptopService.update(id,newLaptop)
            res.status(200).json('cap nhat thanh cong')
        }
        catch (e){
            res.status(200).json(e.message)
        }
    }
    getLapTop = async (req: Request, res: Response) => {
        try {
            let laptop = await  laptopService.findById(req.params.id)
            res.status(200).json(laptop)
        } catch (e) {
            res.status(500).json(e.message);
        }
    }
    searchByName = async (req: Request, res: Response) => {
        try {
            let laptop = await  laptopService.findByName(req.query.nameLaptop)
            res.status(200).json(laptop)
        } catch (e) {
            res.status(500).json(e.message);
        }
    }
    searchByBrand = async (req: Request, res: Response) => {
        try {
            console.log(req.query.nameBrand)
            let laptop = await brandService.findByName(req.query.nameBrand)
            res.status(200).json(laptop)
        } catch (e) {
            res.status(500).json(e.message);
        }
    }
    ascendingPrice = async (req: Request, res: Response) => {
        try {
            let laptop = await laptopService.ascending()
            res.status(200).json(laptop)
        } catch (e) {
            res.status(500).json(e.message);
        }
    }
    decreasePrice = async (req: Request, res: Response) => {
        try {
            let laptop = await laptopService.decrease()
            res.status(200).json(laptop)
        } catch (e) {
            res.status(500).json(e.message);
        }
    }
}
export default new LaptopController()