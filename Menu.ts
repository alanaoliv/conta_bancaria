import readlinesync = require('readline-sync');
import {colors} from "./src/util/Colors"

let opcao: number;

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