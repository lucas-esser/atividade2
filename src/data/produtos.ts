export type Produto = {
  id: number;
  nome: string;
  preco: number;
  unidade: string;
};

export const produtos: Produto[] = [
  { id: 1, nome: "Leite Integral", preco: 4.89, unidade: "1 L" },
  { id: 2, nome: "Queijo Mussarela", preco: 39.9, unidade: "kg" },
  { id: 3, nome: "Iogurte Natural", preco: 3.49, unidade: "170 g" },
  { id: 4, nome: "Manteiga com Sal", preco: 12.9, unidade: "200 g" },
  { id: 5, nome: "Requeijão Cremoso", preco: 8.59, unidade: "200 g" },
  { id: 6, nome: "Creme de Leite", preco: 3.99, unidade: "200 g" },
  { id: 7, nome: "Leite Condensado", preco: 6.79, unidade: "395 g" },
  { id: 8, nome: "Queijo Prato", preco: 42.5, unidade: "kg" },
  { id: 9, nome: "Ricota Fresca", preco: 9.99, unidade: "250 g" },
  { id: 10, nome: "Doce de Leite", preco: 11.45, unidade: "400 g" },
  { id: 11, nome: "Cream Cheese", preco: 7.9, unidade: "150 g" },
  { id: 12, nome: "Leite em Pó Integral", preco: 18.9, unidade: "400 g" },
];
