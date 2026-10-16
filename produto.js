  //criar classes (molde)

  class Produto {
id;
nome;
ativo

  // metodo especial construtor
constructor(id,nome){

    this.id = id;
    this.nome = nome;
    this.ativo = true;

}
  }

  const p1 =new Produto(1,"carregador");
    const p2 =new Produto(2,"capinha");

console.log(p1);
console.log(p2);