import { Conta } from "./Conta"

export class ContaPoupança extends Conta{

    private _aniversario: number;

    constructor(
        agencia: number,
        numero: number,
        tipo: number,
        titular: string,
        saldo: number,
        aniversario: number,
    ) 
    
    { super(numero, agencia,tipo, titular, saldo);
        this._aniversario = aniversario;
    }

    public get aniversario(): number {
        return this._aniversario;
    }

    public set aniversario(value: number) {
        this._aniversario = value;
    }
    
    public depositar(valor: number){
        this.saldo += valor;
    }

    public visualizar(){
        super.visualizar()
        console.log(`Aniversário da Conta: ${this._aniversario}`);
    }
        
    
}