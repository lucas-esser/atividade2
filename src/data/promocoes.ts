import { ImageSourcePropType } from "react-native";

export type TipoPromocao =
  | "Leve X pague Y"
  | "Acima de X pague"
  | "Pagando no cartão da loja";

export type Promocao = {
  id: number;
  nomeProduto: string;
  tipo: TipoPromocao;
  /** Detalhe da regra, ex.: "Leve 3 pague 2" */
  descricao: string;
  precoPromocional: number;
  foto: ImageSourcePropType;
};

export const promocoes: Promocao[] = [
  {
    id: 1,
    nomeProduto: "Iogurte Natural 170 g",
    tipo: "Leve X pague Y",
    descricao: "Leve 3 pague 2",
    precoPromocional: 6.98,
    foto: require("../../assets/images/produtos/iogurte.png"),
  },
  {
    id: 2,
    nomeProduto: "Queijo Mussarela (kg)",
    tipo: "Acima de X pague",
    descricao: "Acima de 2 kg pague menos",
    precoPromocional: 34.9,
    foto: require("../../assets/images/produtos/queijo-mussarela.png"),
  },
  {
    id: 3,
    nomeProduto: "Leite Integral 1 L",
    tipo: "Pagando no cartão da loja",
    descricao: "Pagando no cartão da loja",
    precoPromocional: 4.29,
    foto: require("../../assets/images/produtos/leite-integral.png"),
  },
  {
    id: 4,
    nomeProduto: "Requeijão Cremoso 200 g",
    tipo: "Leve X pague Y",
    descricao: "Leve 4 pague 3",
    precoPromocional: 25.77,
    foto: require("../../assets/images/produtos/requeijao.png"),
  },
  {
    id: 5,
    nomeProduto: "Manteiga com Sal 200 g",
    tipo: "Acima de X pague",
    descricao: "Acima de 3 unidades pague",
    precoPromocional: 10.9,
    foto: require("../../assets/images/produtos/manteiga.png"),
  },
  {
    id: 6,
    nomeProduto: "Doce de Leite 400 g",
    tipo: "Pagando no cartão da loja",
    descricao: "Pagando no cartão da loja",
    precoPromocional: 9.9,
    foto: require("../../assets/images/produtos/doce-de-leite.png"),
  },
];
