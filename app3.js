/*function inserir(produto){
    listar.push(produto);
}
    //bd

function listar (){
   return lista;
}

inserir({id:1,nome:"produto", })

console.log(listar());*/
console.log("FOR")

for(let i = 0; i<=5; i++){ //i++ adiciona o valor 1 a variavel "i"
    console.log(i);
}
///////////////////////////////////////////////////////////////////////////////////////////
console.log("FOR IN 1")

let produto = {id:1, nome:"prod1", preco:10};//objeto

for(let prop in produto){
    console.log(prop)
}

let ListaNomeProdutos = ['prod1', 'prod2', 'prod3'];//indices 0,1,2,3...
console.log(typeof(ListaNomeProdutos))
//////////////////////////////////////////////////////////////////////////////////////
console.log(" FOR IN 2")
for(let ind in ListaNomeProdutos){
    console.log(ind);
}
//////////////////////////////////////////////////////////////////////////////////////
console.log("FOR OF")

for(let dados of ListaNomeProdutos){ //somente para arrays. FOR OF Não intera objetos.
    console.log(dados)
}

//////////////////////////////////////////////////////////////////////////////////////////
 console.log("FOREACH")

 /*function imprimeData(value, index, array){
 console.log(index + "->"+ value);
}*/ 

let imprimeData = (value, index ,array) => { // => significa que a setença é uma function.
    console.log(index + "->"+ value);
}
ListaNomeProdutos.forEach((imprimeData));