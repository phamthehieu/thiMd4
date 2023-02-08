import {Router} from "express";
import {laptopRouter} from "./laptopRouter";
export const router = Router()
router.use("/laptop",laptopRouter)

