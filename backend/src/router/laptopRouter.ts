import {Router} from "express";
import laptopController from "../controller/laptopController";
export const laptopRouter = Router()
laptopRouter.get("",laptopController.getAll)
laptopRouter.post("", laptopController.create)
laptopRouter.put("/:id", laptopController.update)
laptopRouter.delete("/:id", laptopController.delete)
laptopRouter.get("/:id", laptopController.getLapTop)
laptopRouter.get("/search/findByName", laptopController.searchByName)
laptopRouter.get("/search/brand", laptopController.searchByBrand)
laptopRouter.get("/ascending/price", laptopController.ascendingPrice)
laptopRouter.get("/decrease/price", laptopController.decreasePrice)