import { Document, Page, Text, View, StyleSheet, PDFViewer } from "@react-pdf/renderer";
import { BoxConteudo } from "../../Pages/App.styles";

import { PDFExport, savePDF } from "@progress/kendo-react-pdf";

import "./EsqueletoPDF.scss";
import { useRef } from "react";
import Box from "@mui/material/Box";

export default function EsqueletoPDF() {
  const pdfCompoente = useRef<PDFExport>(null)

  const styles = StyleSheet.create({
    // Pagina
    page: {
      width: "100%",
      flexDirection: "column",
      backgroundColor: "#E4E4E4",
    },
    // Container titulo ATA
    sectionTitulo: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    // Container datas e horarios ATA
    sectionAta: {
      width: "90%",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-end",
      flexDirection: "column",
    },
    // container do conteúdo
    sectionConteudo: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    // Container objetivo 
    sectionBasica: {
      width: "75%",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      flexDirection: "column",
      marginTop: 20
    },
    //Titulo Abrangencia Projeto
    tituloBasico: {
      width: "40%",
      fontWeight: "bold",
    },
    // Titulo ATA
    tituloPrincipal: {
      color: "#0070c0",
      fontWeight: "bold",
      fontSize: "18px",
    },
    // Titulo itens da ATA
    tituloItensATA: {
      color: "#4472c4",
      fontSize: "20px",
      marginTop: 20,
    },
    tituloBeneficiosPotenciais: {
      width: "40%",
      fontWeight: "bold",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    titulo2BeneficiosPotenciais: {
      width: "70%",
      fontWeight: "normal",
    },
    // Conteudo ATA
    datasAta: {
      fontWeight: "bold",
    },
    // Conteudo Escopo do projeto
    itensEscopo: {
      marginLeft: "20px",
      width: "35%",
    },
    // Conteudo Objetivo
    textoBasico: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "justify"
    },
  });

  const exportPDFWithMethod = () => {
    let element: any = document.querySelector(".k-grid") || document.body;
    savePDF(element, { paperSize: "A4" });
  };
  const exportPDFWithComponent = () => {
    if (pdfCompoente.current) {
      pdfCompoente.current.save();
    }
  };

  return (
    <BoxConteudo>
      <div className="example-config">
        <button
          className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
          onClick={exportPDFWithComponent}
        >
          Export to PDF with component
        </button>
        <button
          className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
          onClick={exportPDFWithMethod}
        >
          Export to PDF with method
        </button>
      </div>
      <PDFExport ref={pdfCompoente}>
        <Box style={{ width: "50vw" }}>
          <Document>
            <Page size={"A4"} style={styles.page}>
              <View style={styles.sectionTitulo}>
                <Text style={styles.tituloPrincipal}>
                  ATA REUNIÃO COMISSÃO PROCESSOS DE VENDAS E DESENVOLVIMENTO DE
                  PRODUTO
                </Text>
              </View>
              <View style={styles.sectionAta}>
                <Text style={styles.datasAta}>ATA Nº 10/2021</Text>
                <Text style={styles.datasAta}>Data: 11/10/2021</Text>
                <Text>Início: 10:00</Text>
                <Text>Término: 12:00</Text>
              </View>
              <View style={styles.sectionTitulo}>
                <Text style={styles.tituloItensATA}>
                  1. REPLANEJAMENTO DATA DE ENTREGA DE OVS EM MASSA – 1000025759
                </Text>
              </View>
              <View style={styles.sectionConteudo}>
                <View style={styles.sectionBasica}>
                  <Text style={styles.tituloBasico}>Objetivo: </Text>
                  <Text style={styles.textoBasico}>
                    Melhorar e automatizar as ferramentas existentes para
                    reprogramação de prazos de entregas, buscando agilidade no
                    processamento, gestão da carteira de pedidos em linha com a
                    capacidade fabril e consequentemente retornos rápidos aos
                    clientes.
                  </Text>
                </View>
                <View style={styles.sectionBasica}>
                  <Text style={styles.tituloBasico}>Escopo do projeto:</Text>
                  <Text style={styles.itensEscopo}>
                    <ul>
                      <li className="itensEscopo">Adequação do relatório de composição de preços;</li>
                      <li className="itensEscopo">Antecipar ordens de vendas que estão no futuro com “cotas consumidas”;</li>
                      <li className="itensEscopo">Alteração de postergação de 1 OV para N/OV’s e vice-versa;</li>
                    </ul>
                  </Text>
                </View>
                {/* <View style={styles.sectionBasica}>
                  <Text style={styles.tituloBasico}>Não faz parte do Escopo do Projeto:</Text>
                  <Text style={styles.textoBasico}>Não deverá ser contemplado nesta alteração as OV’s que estão no Período Firme. Para esse caso continuará o processo de alteração pelo fluxo da PCR.</Text>
                </View>
                <View style={styles.sectionBasica}>
                  <Text style={styles.tituloBasico}>Abrangência do Projeto:</Text>
                  <Text style={styles.textoBasico}>Para a Unidade de Negócios WMO que utiliza a ferramenta PCR.</Text>
                </View>
                <View style={styles.sectionBasica}>
                  <Text style={styles.tituloBasico}>Resultados Esperados (Qualitativos): 	</Text>
                  <Text style={styles.itensEscopo}>
                    <ul>
                      <li className="itensEscopo">Melhor qualidade de atendimento com respostas rápidas aos clientes e assertividade;</li>
                      <li className="itensEscopo">Gestão do volume de pedidos versus capacidade produtiva.</li>
                    </ul>
                  </Text>
                </View>
                <View style={styles.sectionBasica}>
                  <Text style={styles.tituloBeneficiosPotenciais}>Benefícios potencias:  <Text style={styles.titulo2BeneficiosPotenciais}>R$ 30.000,00 mensais considerando:</Text>	</Text>
                  <Text style={styles.itensEscopo}>
                    <ul>
                      <li className="itensEscopo">R$ 10.000,00 com redução do tempo do PCP para replanejamento manual das OVs planejadas.</li>
                      <li className="itensEscopo">R$ 20.000,00 com redução de esforço na gestão das OVs, solicitação de alteração ao PCP e resposta ao cliente.</li>
                    </ul>
                  </Text>
                </View>
                <View style={styles.sectionBasica}>
                  <Text style={styles.tituloBasico}>Custos totais do projeto: R$50.000,00 </Text>
                  <Text style={styles.itensEscopo}>
                    <ul>
                      <li className="itensEscopo">Total despesas recursos externos (Desembolso): R$30.000,00</li>
                      <li className="itensEscopo">Total despesa recursos internos: R$20.000,00</li>
                    </ul>
                  </Text>
                </View> */}
              </View>
            </Page>
          </Document>
        </Box>
      </PDFExport>
    </BoxConteudo>
  );
}
