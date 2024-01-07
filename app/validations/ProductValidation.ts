import { Product } from "../interfaces/Product";

export async function validateFullProduct(product: Product): Promise<boolean> {
    if(product.description == undefined || product.description == '') return false;

    if(product.price == undefined || product.price == 0) return false;
    
    return true;
}