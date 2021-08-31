let listaProdutos = [];

function inserir(produto){
    listaProdutos.push(produto);
}

function atualizar(id) {
    for(let atu of listaProdutos){
        if(atu.id==1){
            return id==2
        }
    }

}

function deletar(id) {
    listaProdutos.shift(id)
    console.log(listaProdutos.shift(id))
    let idExcluido = listaProdutos.shift(id)
    console.log(idExcluido)
    console.log(listaProdutos)

    
}
function buscarPorId(id) {
    for(let prod of listaProdutos){
        if(prod.id == id) {
            return prod;
        }
    }    
}

function listar(){
    return listaProdutos;
}

let produto = {id:1, nome: "prod1", preco:10};
inserir(produto);





console.log(listaProdutos);
console.log(buscarPorId(1));
console.log(`${deletar}`)
