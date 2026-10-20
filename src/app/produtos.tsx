import { FlatList, StyleSheet, Text, View } from "react-native";

const produtos = [
  { nome: "Leite Integral", preco: 5.49, unidade: "Litro" },
  { nome: "Leite Desnatado", preco: 5.79, unidade: "Litro" },
  { nome: "Queijo Muçarela", preco: 42.9, unidade: "Quilo (kg)" },
  { nome: "Queijo Prato", preco: 44.5, unidade: "Quilo (kg)" },
  { nome: "Queijo Minas Frescal", preco: 38.9, unidade: "Quilo (kg)" },
  { nome: "Manteiga", preco: 12.9, unidade: "Pote 200 g" },
  { nome: "Requeijão Cremoso", preco: 8.9, unidade: "Copo 200 g" },
  { nome: "Iogurte Natural", preco: 9.9, unidade: "Pote 900 g" },
  { nome: "Creme de Leite", preco: 3.99, unidade: "Caixa 200 g" },
  { nome: "Leite Condensado", preco: 6.99, unidade: "Lata 395 g" },
  { nome: "Bebida Láctea Morango", preco: 4.5, unidade: "Garrafa 900 ml" },
  { nome: "Doce de Leite", preco: 7.5, unidade: "Pote 400 g" },
];

export default function Produtos() {
  return (
    <FlatList
      data={produtos}
      keyExtractor={(item) => item.nome}
      contentContainerStyle={styles.lista}
      ListHeaderComponent={
        <Text style={styles.titulo}>Produtos Bom Sabor</Text>
      }
      renderItem={({ item }) => (
        <View style={styles.card}>
          <View style={styles.dados}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.unidade}>Unidade: {item.unidade}</Text>
          </View>
          <Text style={styles.preco}>
            R$ {item.preco.toFixed(2).replace(".", ",")}
          </Text>
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
    color: "#1E5AA8",
    textAlign: "center",
    marginBottom: 12,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#D5E2F0",
    borderLeftWidth: 6,
    borderLeftColor: "#1E5AA8",
    borderRadius: 8,
    padding: 14,
    marginBottom: 10,
  },
  dados: {
    flex: 1,
    paddingRight: 10,
  },
  nome: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#222222",
  },
  unidade: {
    fontSize: 14,
    color: "#666666",
    marginTop: 4,
  },
  preco: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1B7F3B",
  },
});
