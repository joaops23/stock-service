import { Repository } from "../repositories/Repository";
import { Product } from "./../interfaces/Product";
import { validateFullProduct } from "./../validations/ProductValidation"

export class ProductModel{
    
    private Repository: Repository<Product>;

    constructor(repository: Repository<Product>){
        this.Repository = repository;
    }

    async createProduct(productData: Product): Promise<boolean>{
        if(await validateFullProduct(productData)){
            await this.Repository.store(productData);
            return true
        } else {
            return false;
        }
    }

}