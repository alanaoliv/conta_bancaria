import readlinesync = require('readline-sync');
import {colors} from "./src/util/Colors"
import { ContaCorrente } from './src/model/ContaCorrente';
import { ContaPoupança } from './src/model/ContaPoupança'
import { ContaController } from './src/controller/ContaController';

export function main() {

    let opcao, numero, agencia, tipo, saldo, limite, aniversario: number;
    let titular: string;
    const tipoContas = ['Conta Corrente', 'Conta Poupanca'];

    //Criando um Objeto da Classe ContaController
    const contas = new ContaController();

    //Novas Instâncias da Classe ContaCorrente (Objetos)
    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 1234, 1, 'Amanda Magro', 1000000.00, 100000.00));
    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 4578, 1, 'João da Silva', 1000.00, 100.00));
 
    // Novas Instâncias da Classe ContaPoupança (Objetos)
    contas.cadastrar(new ContaPoupança(contas.gerarNumero(), 5789, 2, "Geana Almeida", 10000, 10));
    contas.cadastrar(new ContaPoupança(contas.gerarNumero(), 5698, 2, "Jean Lima", 15000, 15));

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

                    console.log("Digite o Número da Agência: ");
                    agencia = readlinesync.questionInt(" ");

                    console.log("Digite o Nome do Titular: ");
                    titular = readlinesync.question(" ");

                    console.log("Escolha o Tipo da Conta: ");
                    tipo = readlinesync.keyInSelect(tipoContas, "", { cancel: false }) + 1;
               
                    console.log("Digite o Saldo da Conta: ");
                    saldo = readlinesync.questionFloat(" ");

                    switch(tipo){
                        case 1:
                            console.log("Digite o Limite da Conta: ");
                            limite = readlinesync.questionFloat(" ");
                            contas.cadastrar(new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite)) 
                        break;
                        case 2:
                            console.log("Digite o Dia do Aniversário da Poupança: ");
                            aniversario = readlinesync.questionInt(" "); 
                            contas.cadastrar(new ContaPoupança(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario)) 
                        break;
                    }

                keyPress();
                break;
            case 2:
                console.log("\nListar todas as Contas\n");
                    contas.listarTodas();
                keyPress();
                break;
            case 3:
                console.log("\nConsultar Dados da Conta por Número\n");
                    
                    console.log("Digite o Número da Conta: ");
                    numero = readlinesync.questionInt("");

                    contas.procurarPorNumero(numero);
                    
                keyPress();
                break;
            case 4:
                console.log("\nAtualizar Dados da Conta\n");

                keyPress();
                break;
            case 5:
                console.log("\nApagar Conta\n");

                keyPress();
                break;
            case 6:
                console.log("\nSaque\n");

                keyPress();
                break;
            case 7:
                console.log("\nDepósito\n");

                keyPress();
                break;
            case 8:
                console.log("\nTransferência entre Contas\n");

                keyPress();
                break;
            default:
                console.log("\nOpção Inválida!\n");
                
                keyPress();
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

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();