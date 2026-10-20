import { Image, StyleSheet, Text, View } from "react-native";

import { Promocao } from "@/data/promocoes";

export default function PromocaoItem({
  nomeProduto,
  tipo,
  descricao,
  precoPromocional,
  foto,
}: Promocao) {
  return (
    <View style={styles.card}>
      <Image source={foto} style={styles.foto} />
      <View style={styles.info}>
        <Text style={styles.nome}>{nomeProduto}</Text>
        <Text style={styles.tipo}>{tipo}</Text>
        <Text style={styles.descricao}>{descricao}</Text>
        <Text style={styles.preco}>
          R$ {precoPromocional.toFixed(2).replace(".", ",")}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#E0E6EC",
    alignItems: "center",
  },
  foto: { width: 90, height: 90, borderRadius: 8, marginRight: 12 },
  info: { flex: 1 },
  nome: { fontSize: 17, fontWeight: "bold", color: "#1B3A57" },
  tipo: {
    alignSelf: "flex-start",
    backgroundColor: "#FFE7E0",
    color: "#C0392B",
    fontSize: 12,
    fontWeight: "bold",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    marginTop: 4,
    overflow: "hidden",
  },
  descricao: { fontSize: 13, color: "#667", marginTop: 2 },
  preco: { fontSize: 20, fontWeight: "bold", color: "#27AE60", marginTop: 4 },
});
