import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { BoxConteudo } from "../../Pages/App.styles";

export default function EsqueletoPDF() {
  const styles = StyleSheet.create({
    page: {
      width: "100%",
      flexDirection: "column",
      backgroundColor: "#E4E4E4",
    },
    sectionTitulo: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 20,
    },
    sectionAta: {
      width: "80%",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-end",
      flexDirection: "column",
    },
    sectionObjetivo: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    sectionEscopoProjeto: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      marginTop: 20,
    },
    textoEscopoProjeto: {
      width: "40%",
      fontWeight: "bold",
    },
    itensEscopo: {
      width: "40%",
    },
    textoObjetivo: {
      width: "40%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    textoAta: {
      fontWeight: "bold",
    },
    tituloPrincipal: {
      color: "#0070c0",
      fontWeight: "bold",
      fontSize: "18px",
    },
    tituloItens: {
      color: "#4472c4",
      fontSize: "20px",
      marginTop: 20,
    },
  });

  return (
    <BoxConteudo>
      <Document>
        <Page size={"A4"} style={styles.page}>
          <View style={styles.sectionTitulo}>
            <Text style={styles.tituloPrincipal}>
              ATA REUNIÃO COMISSÃO PROCESSOS DE VENDAS E DESENVOLVIMENTO DE
              PRODUTO
            </Text>
          </View>
          <View style={styles.sectionAta}>
            <Text style={styles.textoAta}>ATA Nº 10/2021</Text>
            <Text style={styles.textoAta}>Data: 11/10/2021</Text>
            <Text>Início: 10:00</Text>
            <Text>Término: 12:00</Text>
          </View>
          <View style={styles.sectionTitulo}>
            <Text style={styles.tituloItens}>
              1. REPLANEJAMENTO DATA DE ENTREGA DE OVS EM MASSA – 1000025759
            </Text>
          </View>
          <View style={styles.sectionObjetivo}>
            <Text style={styles.textoObjetivo}>
              Objetivo: Melhorar e automatizar as ferramentas existentes para
              reprogramação de prazos de entregas, buscando agilidade no
              processamento, gestão da carteira de pedidos em linha com a
              capacidade fabril e consequentemente retornos rápidos aos
              clientes.
            </Text>
          </View>
          <View style={styles.sectionEscopoProjeto}>
            <Text style={styles.textoEscopoProjeto}>Escopo do projeto:</Text>
            <Text style={styles.itensEscopo}>
              Adequação do relatório de composição de preços;
            </Text>
          </View>
        </Page>
      </Document>
    </BoxConteudo>
  );
}
