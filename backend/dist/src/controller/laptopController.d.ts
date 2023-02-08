import { Request, Response } from "express";
declare class LaptopController {
    constructor();
    getAll: (req: Request, res: Response) => Promise<void>;
    create: (req: Request, res: Response) => Promise<void>;
    delete: (req: Request, res: Response) => Promise<void>;
    update: (req: Request, res: Response) => Promise<void>;
    getLapTop: (req: Request, res: Response) => Promise<void>;
    searchByName: (req: Request, res: Response) => Promise<void>;
    searchByBrand: (req: Request, res: Response) => Promise<void>;
    ascendingPrice: (req: Request, res: Response) => Promise<void>;
    decreasePrice: (req: Request, res: Response) => Promise<void>;
}
declare const _default: LaptopController;
export default _default;
