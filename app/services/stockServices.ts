import { Request, Response, Router } from "express";


export class StockServices{
    public stockServices: Router;

    constructor(){
        this.stockServices = Router();
        this.init();
    }

    // declaração dos métodos utilizados em cada rota
    private async index(req: Request, res: Response): Promise<undefined>{
        res.send("- Rota de listagem de itens");
    }

    // mapeamento das rotas
    async init(){
        this.stockServices.get('/', this.index);
    }
}

const routes = new StockServices();
routes.init();

export default routes.stockServices;