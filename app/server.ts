import { app } from "./app";
import services from "./services/stockServices"
import bodyParser from 'body-parser';
import { SERVER_PORT } from "./config";

export class Server{
    static async bootstrap(){
        const port = SERVER_PORT || "3000"

        app.use(bodyParser.json())
        app.use("/api/v1", services)
        
        app.listen(port, () => console.log(`server running on port ${port}`))   
    }
}

Server.bootstrap()