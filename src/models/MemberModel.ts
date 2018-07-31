class MemberModel {
    private _id: number;
    private _name: string;
    
    constructor( nId: number, strName: string ) {
        this._id = nId;
        this._name = strName;
    }

    public getId(): number {
        return this._id;
    }
    public getName(): string {
        return this._name;
    }
}

export default MemberModel;