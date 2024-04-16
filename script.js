let banana = 9.9
let laranja = 4.9
let morango = 42.5
let kiwi = 28.9
let melancia = 55.5

let carrinho = [];

let contadorDeBananas = 0;
let contadorDeLaranjas = 0;
let contadorDeMorangos = 0;
let contadorDeKiwis = 0;
let contadorDeMelancias = 0;


let nomeDoProduto = document.getElementById ("nomeDoProduto")

let valorProduto = document.getElementById("valorProduto")

function teste(){ 


    
/*     let botaoCarrinho = document.getElementById("botaoCarrinho");
    botaoCarrinho.addEventListener("click", function() {
      });
    botaoCarrinho.addEventListener("click", function() {
        let nomeProduto = nomeDoProduto.value;
        carrinho.push(nomeProduto);
      });
    let botaoCarrinho = document.getElementById("botaoCarrinho");

    botaoCarrinho.addEventListener("click", function() {
    let nomeProduto = nomeDoProduto.value;
     carrinho.push(nomeProduto);
});
 */

    switch(nomeDoProduto.value){
        case "banana":
            valorProduto.innerHTML = "O valor da Banana é R$ " + banana.toFixed(2)
    break
    case "laranja":
            valorProduto.innerHTML = "O valor da Laranja é R$ " + laranja.toFixed(2)
    break 
    case "morango":
        valorProduto.innerHTML = "O valor do Morango é R$ " + morango.toFixed(2)
    break 
    case "kiwi":
        valorProduto.innerHTML = "O valor do Kiwi é R$ " + kiwi.toFixed(2)
    break 
    case "melancia":
        valorProduto.innerHTML = "O valor da Melancia é R$ " + melancia.toFixed(2)
    break
    default:
        valorProduto.innerHTML = "Produto não encontrado ou inválido."
    } 
}

function addCarrinho(){

        if(nomeDoProduto.value == "banana".toLowerCase()){
            contadorDeBananas ++
            carrinho.push(nomeDoProduto.value) 

        }
        if(nomeDoProduto.value == "laranja".toLowerCase()){
            contadorDeLaranjas ++
            carrinho.push(nomeDoProduto.value) 

        }
        if(nomeDoProduto.value == "morango".toLowerCase()){
            contadorDeMorangos ++
            carrinho.push(nomeDoProduto.value) 

        }
        if(nomeDoProduto.value == "kiwi".toLowerCase()){
            contadorDeKiwis ++
            carrinho.push(nomeDoProduto.value) 

        }
        if(nomeDoProduto.value == "melancia".toLowerCase()){
            contadorDeMelancias ++
            carrinho.push(nomeDoProduto.value) 

        }
    
        console.log(contadorDeBananas, contadorDeLaranjas, contadorDeMorangos, contadorDeKiwis, contadorDeMelancias)

        console.log(carrinho)
}
