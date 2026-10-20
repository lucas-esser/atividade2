import { StyleSheet, Text, View } from "react-native";

import { Produto } from "@/data/produtos";

export default function ProdutoItem({ nome, preco, unidade }: Produto) {
  return (
    <View style={styles.card}>
      <View style={styles.info}>
        <Text style={styles.nome}>{nome}</Text>
        <Text style={styles.unidade}>Unidade: {unidade}</Text>
      </View>
      <Text style={styles.preco}>R$ {preco.toFixed(2).replace(".", ",")}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#E0E6EC",
  },
  info: { flex: 1 },
  nome: { fontSize: 17, fontWeight: "bold", color: "#1B3A57" },
  unidade: { fontSize: 14, color: "#667", marginTop: 2 },
  preco: { fontSize: 18, fontWeight: "bold", color: "#208AEF" },
});
