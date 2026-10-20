import { FlatList, Image, StyleSheet, Text, View } from "react-native";

const promocoes = [
  {
    nome: "Leite Integral 1 Litro",
    tipo: "Leve 3, pague 2",
    detalhe: "3 unidades pelo preço de 2",
    precoPromocional: 10.98,
    foto: "https://commons.wikimedia.org/wiki/Special:FilePath/Milk%20glass.jpg?width=500",
  },
  {
    nome: "Queijo Muçarela",
    tipo: "Acima de 5 kg, pague menos",
    detalhe: "Comprando mais de 5 kg, o quilo sai por",
    precoPromocional: 39.9,
    foto: "https://commons.wikimedia.org/wiki/Special:FilePath/Mozzarella%20cheese.jpg?width=500",
  },
  {
    nome: "Manteiga 200 g",
    tipo: "Preço especial com o cartão da loja",
    detalhe: "Pagando com o cartão Bom Sabor, o pote sai por",
    precoPromocional: 10.9,
    foto: "https://commons.wikimedia.org/wiki/Special:FilePath/A%20mound%20of%20butter.jpg?width=500",
  },
  {
    nome: "Iogurte Natural 900 g",
    tipo: "Leve 3, pague 2",
    detalhe: "3 potes pelo preço de 2",
    precoPromocional: 19.8,
    foto: "https://commons.wikimedia.org/wiki/Special:FilePath/BioBio%20yoghurt%20cups.jpg?width=500",
  },
  {
    nome: "Leite Condensado 395 g",
    tipo: "Acima de 12 unidades, pague menos",
    detalhe: "Comprando mais de 12 latas, cada uma sai por",
    precoPromocional: 5.99,
    foto: "https://commons.wikimedia.org/wiki/Special:FilePath/Tin%20of%20condensed%20milk.jpg?width=500",
  },
  {
    nome: "Queijo Prato Fatiado",
    tipo: "Preço especial com o cartão da loja",
    detalhe: "Pagando com o cartão Bom Sabor, o quilo sai por",
    precoPromocional: 41.9,
    foto: "https://commons.wikimedia.org/wiki/Special:FilePath/Gouda%20cheese%20slices.jpg?width=500",
  },
];

export default function Promocoes() {
  return (
    <FlatList
      data={promocoes}
      keyExtractor={(item) => item.nome}
      contentContainerStyle={styles.lista}
      ListHeaderComponent={
        <Text style={styles.titulo}>Promoções Bom Sabor</Text>
      }
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image
            source={{ uri: item.foto }}
            style={styles.foto}
            resizeMode="cover"
          />
          <View style={styles.dados}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.tipo}>{item.tipo}</Text>
            <Text style={styles.detalhe}>{item.detalhe}</Text>
            <Text style={styles.preco}>
              R$ {item.precoPromocional.toFixed(2).replace(".", ",")}
            </Text>
          </View>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  lista: {
    padding: 16,
    backgroundColor: "#F4F8FC",
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#E8A900",
    textAlign: "center",
    marginBottom: 12,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#F0DFA8",
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
  },
  foto: {
    width: 110,
    height: 110,
    borderRadius: 8,
    backgroundColor: "#E5E5E5",
  },
  dados: {
    flex: 1,
    paddingLeft: 12,
    justifyContent: "center",
  },
  nome: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#222222",
  },
  tipo: {
    alignSelf: "flex-start",
    backgroundColor: "#FFF3CC",
    color: "#8A5A00",
    fontSize: 13,
    fontWeight: "bold",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
    marginTop: 6,
  },
  detalhe: {
    fontSize: 13,
    color: "#666666",
    marginTop: 6,
  },
  preco: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#D32F2F",
    marginTop: 4,
  },
});
