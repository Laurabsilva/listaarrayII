const produtos = [
  { id: 1, nome: "Notebook", preco: 3500, estoque: 5, ativo: true },
  { id: 2, nome: "Mouse", preco: 80, estoque: 0, ativo: true },
  { id: 3, nome: "Teclado", preco: 150, estoque: 10, ativo: false },
  { id: 4, nome: "Monitor", preco: 1200, estoque: 3, ativo: true }
];

const porcentagemdesconto = 10; 

const produtos2 = produtos.map((produto) => {
    const valordesconto = produto.preco * (porcentagemdesconto / 100);
    const precocomdesconto = produto.preco - valordesconto;

  return {
    id: produto.id,
    título: produto.nome,
    R$: precocomdesconto.toFixed(2),
    disponível: produto.estoque 
  };
});

console.log("Produtos com preços reajustado!!!");
console.log(produtos2);