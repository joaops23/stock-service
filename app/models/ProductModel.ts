export class ProductModel {
    private description: String;
    private observation: String;
    private status: String;
    protected id: Number;
    protected price: Number;
    public created_at: Date;
    public updated_at: Date;

    constructor(id?: Number, ...options: any){
        id != undefined ? this._setProduct() : this._setNewProcuct(options);
        
    }

    private _setProduct(): void{
        //TODO: instanciar o model produto e configurar atributos do product

    }

    private _setNewProcuct(options: any): void {
        //TODO: Atribui os valores enviados em options ao produto

    }
}