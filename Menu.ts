import readlinesync = require('readline-sync');
import {colors} from "./src/util/Colors"
import { Conta } from './src/model/Conta';
import { ContaCorrente } from './src/model/ContaCorrente';
import { ContaPoupança } from './src/model/ContaPoupança'

export function main() {

    let opcao: number;

    //Cria novas instâncias (Objetos) da Classe Conta
    const c1 = new Conta(1, 123, 1, "Jonas", 100000.00);
    c1.visualizar();
    
    //Saque
    console.log(c1.sacar(100.00));
    c1.visualizar();

    const c2 = new Conta(2, 123, 2, "Aline", 200000);
    c2.visualizar();
    
    //Depósito
    c2.depositar(100.00);
    c2.visualizar();

    //Contas Correntes
    const cc1 = new ContaCorrente(3, 789, 1, "Andressa", 100000, 1000);
    cc1.visualizar();

    //Saque na Conta Corrente
    cc1.sacar(100500);
    cc1.visualizar();

    //Depósito na Conta Corrente
    cc1.depositar(2000);
    cc1.visualizar();

    //Conta Poupança
    const cp1 = new ContaPoupança (4, 258, 2, "Lilian", 230000, 28);
    cp1.visualizar();

    //Depósito Poupança
    cp1.depositar(1500);
    cp1.visualizar();

    console.log(" ");

    do{

        menu();
    
        opcao = readlinesync.questionInt();

        if (opcao === 0){
            about()
            process.exit(0)
        }

        switch(opcao) {
            case 1:
                console.log("\nCriar Conta\n");

                break;
            case 2:
                console.log("\nListar todas as Contas\n");

                break;
            case 3:
                console.log("\nConsultar Dados da Conta por Número\n");

                break;
            case 4:
                console.log("\nAtualizar Dados da Conta\n");

                break;
            case 5:
                console.log("\nApagar Conta\n");

                break;
            case 6:
                console.log("\nSaque\n");

                break;
            case 7:
                console.log("\nDepósito\n");

                break;
            case 8:
                console.log("\nTransferência entre Contas\n");

                break;
            default:
                console.log("\nOpção Inválida!\n");

                break;
        }

    }while(true)
}

function menu(): void{
    console.log(colors.bg.black, colors.fg.red)
    console.log("_________________________________________________________")
    console.log("                        ActivoBank                       ")
    console.log("_________________________________________________________")
    console.log("           1 - Criar Conta                               ")
    console.log("           2 - Listar todas as Contas                    ")
    console.log("           3 - Buscar Conta por Numero                   ")
    console.log("           4 - Atualizar Dados da Conta                  ")
    console.log("           5 - Apagar Conta                              ")
    console.log("           6 - Sacar                                     ")
    console.log("           7 - Depositar                                 ")
    console.log("           8 - Transferir valores entre Contas           ")
    console.log("           0 - Sair                                      ")
    console.log("_________________________________________________________")
    console.log("Entre com a opção desejada: ", colors.reset)
}   

function about(){
    console.log(colors.bg.black, colors.fg.red)
    console.log("\n_________________________________________________________");
    console.log("\nProjeto Desenvolvido por: ");
    console.log("\nAlana Sanches Oliveira - alanasanches97@gmail.com");
    console.log("\nhttps://github.com/alanaoliv/conta_bancaria");
    console.log("\n_________________________________________________________", colors.reset)
}

main();