//O que é um dto:
// - é um padrão de design utilizado para transferir dados
//  entre camadas de uma aplicação.
// o objetivo do dto é encapsular um conjunto de dados e
//  facilitar o desempenho da comunicação;

function calcular(preço, quantidade){
    return preço * quantidade;
}

const totalPedido1 = calcular(12, 2);

function calcularTotal({precoUnitario, quantidade}){
    return precoUnitario * quantidade;
}

const pedido2 = calcularTotal({
    precoUnitario: 34,
    quantidade: 9
});

const pedidoDTO = {
    precoUnitario: 45,
    quantidade: 4
};

const totalPedido3 = calcularTotal(pedidoDTO);

console.log(totalPedido1);
console.log(totalPedido3);