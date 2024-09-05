//desafio 1 Target

let indice = 13;
let soma = 0;
let k = 0;

do {
    k=k+1;soma= soma + k;
}while(k<indice)

console.log(soma);
//resultado: 91


//desafio 2 Target

function fibonacci(numero) {
    let sequencia = [0, 1];
    let n1 = 0;
    let n2 = 1;
        
        while (n2 <= numero){
        sequencia.push(n2);
        let proximoNumero = n2;
        n2 = n1 + n2;
        n1 = proximoNumero;
        
    }

    return sequencia;
}

let numeroInformado = 35;
let sequenciaFibonacci = fibonacci(numeroInformado);
console.log("Sequência Fibonacci: ", sequenciaFibonacci);

if(sequenciaFibonacci.includes(numeroInformado)) {
    console.log(numeroInformado + " pertence a sequência");
}else{
    console.log(numeroInformado + " não pertence a sequência");
}
//resultado [0, 1, 1, 1, 2, 3, 5, 8, 13, 21, 34] 35 não pertence a sequência.


//Desafio 3 Target
    

//Desafio 4 Target

const vendasPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

let valorTotal = 0;
for(const estado in vendasPorEstado) {
    valorTotal += vendasPorEstado[estado];
}

for (const estado in vendasPorEstado) {
    const percentual = (vendasPorEstado[estado] / valorTotal) * 100;
    console.log(`${estado} : ${percentual.toFixed(2)}%`);
}

//resultado: SP : 37.53%, RJ : 20.29%, MG : 16.17%, ES : 15.03%, Outros : 10.98%

//Desafio 5 Target

function inverterString(str) {
    return str === "" ? "" : inverterString(str.substr(1)) + str.charAt(0);
}

let minhaString = "Target"
let stringInvertida = inverterString(minhaString);
console.log(stringInvertida);
//resultado: tegraT