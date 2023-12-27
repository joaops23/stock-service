import { Request, Response, Router } from "express";


export class stockRoutes{
    public services: Router;

    constructor(){
        this.services = Router();
        this.init();
    }

    // declaração dos métodos utilizados em cada rota
    private async index(req: Request, res: Response): Promise<undefined>{
        res.send("- Rota de listagem de itens");
    }

    private async store(req: Request, res: Response): Promise<undefined> {
        res.json({message: "- Cadastro de novo produto no estoque"})
    }

    // mapeamento das rotas
    async init(){
        this.services.get('/stock', await this.index);
        this.services.post('/stock', await this.store);

    }
}

const routes = new stockRoutes();
routes.init();

export default routes.services;