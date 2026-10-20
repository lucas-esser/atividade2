import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const abrirProdutos = () => {
    router.push("/produtos");
  };

  const abrirPromocoes = () => {
    router.push("/promocoes");
  };

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text style={styles.logoEmoji}>🥛</Text>
      </View>

      <Text style={styles.nomeMercado}>Laticínios Bom Sabor</Text>
      <Text style={styles.slogan}>Distribuidora de laticínios</Text>

      <View style={styles.botoes}>
        <Pressable style={styles.botaoProdutos} onPress={abrirProdutos}>
          <Text style={styles.textoBotao}>Ver Produtos</Text>
        </Pressable>

        <Pressable style={styles.botaoPromocoes} onPress={abrirPromocoes}>
          <Text style={styles.textoBotao}>Ver Promoções</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "#F4F8FC",
  },
  logo: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: "#FFFFFF",
    borderWidth: 4,
    borderColor: "#1E5AA8",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  logoEmoji: {
    fontSize: 70,
  },
  nomeMercado: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1E5AA8",
    textAlign: "center",
  },
  slogan: {
    fontSize: 16,
    color: "#555555",
    marginTop: 6,
    marginBottom: 40,
  },
  botoes: {
    width: "100%",
    gap: 16,
  },
  botaoProdutos: {
    backgroundColor: "#1E5AA8",
    paddingVertical: 18,
    borderRadius: 10,
    alignItems: "center",
  },
  botaoPromocoes: {
    backgroundColor: "#E8A900",
    paddingVertical: 18,
    borderRadius: 10,
    alignItems: "center",
  },
  textoBotao: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
});
