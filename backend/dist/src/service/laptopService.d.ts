declare class LaptopService {
    private laptopRepository;
    constructor();
    getAll: () => Promise<any>;
    save: (laptop: any) => Promise<any>;
    delete: (id: any) => Promise<any>;
    update: (id: any, newLaptop: any) => Promise<any>;
    findById: (id: any) => Promise<any>;
    findByName: (name: any) => Promise<any>;
    ascending: () => Promise<any>;
    decrease: () => Promise<any>;
}
declare const _default: LaptopService;
export default _default;
