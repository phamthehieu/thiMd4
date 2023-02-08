declare class BrandService {
    private brandRepository;
    constructor();
    findByName: (name: any) => Promise<any>;
}
declare const _default: BrandService;
export default _default;
