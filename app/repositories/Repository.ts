import {Knex} from "knex";


interface IEntity{
    id: Number;
}

export class Repository<T extends IEntity>{
    private tableName: string;
    private connection: Knex;

    constructor(tableName: string, connection: Knex){
        this.tableName = tableName;
        this.connection = connection;
    }

    public async store(entity: T): Promise<void> {
        this.connection(this.tableName).insert(entity)
    }
}