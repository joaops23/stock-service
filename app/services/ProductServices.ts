import { Request, Response, Router } from "express";
import { ProductModel } from "../models/ProductModel";
import knex from "./../database/database"
import { Repository } from "../repositories/Repository";
import { Product } from "../interfaces/Product";

const productRepository = new Repository<Product>('products', knex);
const productModel = new ProductModel(productRepository);

export class ProductServices{
    public productServices: Router;

    constructor(){
        this.productServices = Router();        
        this.init();
    }

    private async store(req: Request, res: Response): Promise<any>{
        const prod = {
            description: String,
            observation: String,
            status: Boolean,
            price: Number,
        } = req.body;
        if (Object.keys(prod).length == 0) return res.status(400).send("The request body could not be decoded as JSON")
        
        await productModel.createProduct(prod) == true 
            ? res.json({"message": "Inserção de novo produto"}) 
            : res.json({"message": "Erro ao inserir produto"})
    }

    async init(){
        this.productServices.post("/", this.store)
    }
}

const routes = new ProductServices();

export default routes.productServices;