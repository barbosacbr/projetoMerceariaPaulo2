let nomeDoProduto = document.getElementById('nomeDoProduto')
let valorProduto = document.getElementById('valorProduto');
let totalItens = 0;
let carrinho = [];
let totalCarrinho = Number();
let valorCarrinho = document.getElementById('valorCarrinho');
let controle = 0;





validadorDeNome = () => { return nomeDoProduto.value.toLowerCase()};

function frutaEscolhida(){    
    

    if(validadorDeNome() == 'banana'){
        return `O valor do item "${validadorDeNome()}" é R$ 5,99 kg`
    }else if(validadorDeNome() == 'maça'){
        return `O valor do item "${validadorDeNome()}" é RS 6,99 kg`
    }else if(validadorDeNome()){
        return `O valor do item "${validadorDeNome()}" é RS 7,29 kg`
    }else{
        return `Digite o nome de um dos produtos disponíveis na loja`
    }
}

valores = () => {
    valorProduto.innerHTML = (frutaEscolhida())
}


function addCarrinho(){
     
    let produto;   

    if(validadorDeNome() == 'banana'){
        produto = {
        nome:nomeDoProduto,
        preco:5.99
        }
        totalItens ++
    }else if(validadorDeNome() == 'laranja'){
        produto = {
            nome:nomeDoProduto,
            preco: 4.98
        }
        totalItens ++
    }else if(validadorDeNome() == 'maca'){
        produto = {
            nome:nomeDoProduto,
            preco: 5.25
        }
        totalItens ++
    }else if(validadorDeNome() == 'abacate'){
        produto = {
            nome:nomeDoProduto,
            preco: 8
        }
        totalItens ++
    }else if(validadorDeNome() == 'pera'){
        produto = {
            nome:nomeDoProduto,
            preco: 7.75
        }
        totalItens ++
    }else{
        produto = 0
        controle ++
    }

    carrinho.push(produto);

    console.log(carrinho)

    if(carrinho != 0){
        for(i=controle; i<carrinho.length;i++){
        //  console.log(carrinho[i].preco)
        totalCarrinho += carrinho[i].preco
        controle ++ 
        }        
        
    }else{
        valorCarrinho.innerHTML = ('Carrinho Vazio');
    }
}

function totalCompra(){
    
    if(totalCarrinho !=0){
    valorCarrinho.innerHTML = `Total de itens no carrinho: ${totalItens}<br>Valor Total: R$${totalCarrinho.toFixed(2)}`;
    
    }else{
        valorCarrinho.innerHTML = "Carrinho Vazio"
    }
}