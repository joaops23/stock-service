import { app } from "./app";
import stockServices from "./services/StockServices";
import productServices from "./services/ProductServices";
import bodyParser from 'body-parser';
import { SERVER_PORT } from "./config";

export class Server{
    static async bootstrap(){
        const port = SERVER_PORT || "3000"

        app.use(bodyParser.json())
        app.use("/api/v1/stock", stockServices)
        app.use("/api/v1/product", productServices)

        
        app.listen(port, () => console.log(`server running on port ${port}`))   
    }
}

Server.bootstrap()