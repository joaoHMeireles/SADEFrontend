import { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import {
  BoxContainerGeral,
  BoxTitulos,
  TypographyTitulos,
  BoxIcones,
  BoxContainerGeralBeneficio,
  BoxContainerDivisorio,
  BoxInputsAcima,
  BoxValorMensal,
  TypographyLabels,
  BoxInputs,
  BoxInputsAbaixo,
  BoxObrigacaoLegal,
  BoxDescricaoRequeistosControle,
  BoxFrequencia,
} from "./BeneficiosDemanda.styles";
import { Select } from "@mui/material";
import CurrencyInput from "react-currency-input-field";

const moedas = [
  "DOLAR",
  "EURO",
  "REAL"
];

const valoresFrequencia = [
  "DIARIAMENTE",
  "SEMANALMENTE",
  "MENSALMENTE"
]

let atualizarObjetos: any = null

export default function BeneficiosDemanda(props: {
  rascunho: boolean;
  proposta: boolean;
  numeroBeneficiosReais?: number
  numeroBeneficiosPotenciais?: number
  numeroBeneficiosQualitativos?: number
  setNumeroBeneficiosReais?: React.Dispatch<React.SetStateAction<number>>
  setNumeroBeneficiosPotenciais?: React.Dispatch<React.SetStateAction<number>>
  setNumeroBeneficiosQualitativos?: React.Dispatch<React.SetStateAction<number>>
  moedaReal?: any
  setMoedaReal?: any
  moedaPotencial?: any
  setMoedaPotencial?: any
  valor?: number
  informacaoProcesso?: any
  setInformacaoProcesso?: any
  partDoisDemanda?: Function
}) {
  const [frequencia, setFrequencia] = useState("DIARIAMENTE");
  const [beneficiosReaisLista, setBeneficiosReaisLista] = useState<any[]>([]);
  const [beneficiosPotenciaisLista, setBeneficiosPotenciaisLista] = useState<any[]>([]);
  const [beneficiosQualitativosLista, setBeneficiosQualitativosLista] = useState<any[]>([]);
  atualizarObjetos = props.partDoisDemanda

  let numeroBeneficiosPotenciais = 0;
  let numeroBeneficiosReais = 0;
  let numeroBeneficiosQualitativos = 0;

  useEffect(() => {

    for (let atributo in props.informacaoProcesso) {
      if ((props.informacaoProcesso as any)[atributo]) {
        if (atributo == "frequenciaUso") {
          setFrequencia(props.informacaoProcesso[atributo]);
        }

        if (atributo == "beneficiosDemanda") {
          let beneficiosBancoReais = props.informacaoProcesso[atributo].filter((beneficio: any) => beneficio.tipoBeneficio == "REAL")
          let beneficiosBancoPotenciais = props.informacaoProcesso[atributo].filter((beneficio: any) => beneficio.tipoBeneficio == "POTENCIAL")
          let beneficiosBancoQualitativos = props.informacaoProcesso[atributo].filter((beneficio: any) => beneficio.tipoBeneficio == "QUALITATIVO")

          setBeneficiosReaisLista(beneficiosBancoReais)
          setBeneficiosPotenciaisLista(beneficiosBancoPotenciais)
          setBeneficiosQualitativosLista(beneficiosBancoQualitativos)

          if (props.numeroBeneficiosReais) {
            for (let i = 0; i < props.numeroBeneficiosReais; i++) {

              const beneficioRealValorMensal = document.getElementById("valorMensalReal" + i) as HTMLInputElement;
              if (beneficioRealValorMensal && beneficiosBancoReais[i]) {
                beneficioRealValorMensal.value = beneficiosBancoReais[i].valor;
              }

              const beneficioRealDescricaoReal = document.getElementById("descricaoReal" + i) as HTMLInputElement;
              if (beneficioRealDescricaoReal && beneficiosBancoReais[i]) {
                beneficioRealDescricaoReal.value = beneficiosBancoReais[i].descricao
              }

              // if (moedaReal && setMoedaReal) {
              if (beneficiosBancoReais[i]) {
                // moedaReal.push(beneficiosBancoReais[i].moeda);
                // setMoedaReal(beneficiosBancoReais[i].moeda);
              }
              // }
            }
          }

          if (props.numeroBeneficiosPotenciais) {
            for (let i = 0; i < props.numeroBeneficiosPotenciais; i++) {

              const beneficioPotencialValorMensal = document.getElementById("valorMensalPotencial" + i) as HTMLInputElement;
              if (beneficioPotencialValorMensal && beneficiosBancoPotenciais[i]) {
                beneficioPotencialValorMensal.value = beneficiosBancoPotenciais[i].valor;
              }

              const beneficioPotencialDescricaoPotencial = document.getElementById("descricaoPotencial" + i) as HTMLInputElement;
              if (beneficioPotencialDescricaoPotencial && beneficiosBancoPotenciais[i]) {
                beneficioPotencialDescricaoPotencial.value = beneficiosBancoPotenciais[i].descricao
              }

              // if (moedaPotencial && setMoedaPotencial) {
              if (beneficiosBancoPotenciais[i]) {
                // moedaPotencial.push(beneficiosBancoPotenciais[i].moeda);
                // setMoedaPotencial(beneficiosBancoPotenciais[i].moeda);
              }
              // }

            }
          }

          if (props.numeroBeneficiosQualitativos) {
            for (let i = 0; i < props.numeroBeneficiosQualitativos; i++) {

              const beneficioQualitativoDescricao = document.getElementById("beneficiosQualitativos" + i) as HTMLInputElement;

              if (beneficioQualitativoDescricao && beneficiosBancoQualitativos[i]) {
                beneficioQualitativoDescricao.value = beneficiosBancoQualitativos[i].descricao;
              }

            }
          }
        }
      }
    }
  }, [
    props.numeroBeneficiosReais,
    props.numeroBeneficiosPotenciais,
    props.numeroBeneficiosQualitativos,
    props.informacaoProcesso
  ]);

  useEffect(() => {
    if (props.rascunho || props.proposta) {
      let info

      if (props.rascunho) {
        info = JSON.parse(localStorage.getItem("RASCUNHOESCOLHIDO") as string)
      } else if (props.proposta) {
        info = JSON.parse(localStorage.getItem("DEMANDASELECIONADA") as string)
      }

      props.setInformacaoProcesso(info);

      if (info) {
        numeroBeneficiosPotenciais = info.beneficiosDemanda.filter((beneficio: any) => beneficio.tipoBeneficio == "POTENCIAL").length
        numeroBeneficiosReais = info.beneficiosDemanda.filter((beneficio: any) => beneficio.tipoBeneficio == "REAL").length
        numeroBeneficiosQualitativos = info.beneficiosDemanda.filter((beneficio: any) => beneficio.tipoBeneficio == "QUALITATIVO").length
      }

      if (props.setNumeroBeneficiosQualitativos && props.setNumeroBeneficiosReais && props.setNumeroBeneficiosPotenciais) {
        props.setNumeroBeneficiosQualitativos(numeroBeneficiosQualitativos);
        props.setNumeroBeneficiosReais(numeroBeneficiosReais);
        props.setNumeroBeneficiosPotenciais(numeroBeneficiosPotenciais);
      }
    }
  }, [])

  function onFrequenciaChange(e: any) {
    setFrequencia(e.target.value)

    const novaInfoDemanda = {
      ...props.informacaoProcesso,
      frequenciaUso: e.target.value,
    };

    if (props.setInformacaoProcesso || props.informacaoProcesso) {
      props.setInformacaoProcesso(novaInfoDemanda);
    }
  }

  return (
    <>
      <BoxContainerGeral>
        <BoxTitulos>
          <TypographyTitulos>Benefício Real</TypographyTitulos>
        </BoxTitulos>
        <BeneficiosReais
          numeroBeneficios={props.numeroBeneficiosReais}
          informacaoProcesso={props.informacaoProcesso}
          setInformacaoProcesso={props.setInformacaoProcesso}
          beneficiosReaisLista={beneficiosReaisLista}
          moedaReal={props.moedaReal}
          setMoedaReal={props.setMoedaReal}
        />
        <BoxIcones>
          {props.numeroBeneficiosReais != null &&
            <>
              {props.numeroBeneficiosReais > 0 ? (
                <RemoveRoundedIcon
                  sx={{
                    fontSize: "2rem",
                    marginRight: 3,
                    cursor: "pointer",
                    color: "#595959",
                  }}
                  onClick={() => {
                    if (props.setNumeroBeneficiosReais != null && props.numeroBeneficiosReais != null) {
                      props.setNumeroBeneficiosReais(props.numeroBeneficiosReais - 1);
                    }
                  }}
                />
              ) : (
                ""
              )}
            </>
          }
          <AddRoundedIcon
            sx={{ fontSize: "2rem", cursor: "pointer", color: "#595959" }}
            onClick={() => {
              if (props.setNumeroBeneficiosReais && props.numeroBeneficiosReais) {
                props.setNumeroBeneficiosReais(props.numeroBeneficiosReais + 1);
              }
            }}
          />
        </BoxIcones>
        <BoxTitulos>
          <TypographyTitulos>Benefício Potencial</TypographyTitulos>
        </BoxTitulos>
        <BeneficiosPotenciais
          numeroBeneficios={props.numeroBeneficiosPotenciais}
          informacaoProcesso={props.informacaoProcesso}
          setInformacaoProcesso={props.setInformacaoProcesso}
          beneficiosPotenciasLista={beneficiosPotenciaisLista}
          moedaPotencial={props.moedaPotencial}
          setMoedaPotencial={props.setMoedaPotencial}
        />
        <BoxIcones id="o-0-tá-aqui">
          {props.numeroBeneficiosPotenciais != null &&
            <>
              {props.numeroBeneficiosPotenciais > 0 ? (
                <RemoveRoundedIcon
                  sx={{
                    fontSize: "2rem",
                    marginRight: 3,
                    cursor: "pointer",
                    color: "#595959",
                  }}
                  onClick={() => {
                    if (props.setNumeroBeneficiosPotenciais && props.numeroBeneficiosPotenciais) {
                      props.setNumeroBeneficiosPotenciais(props.numeroBeneficiosPotenciais - 1);
                    }
                  }}
                />
              ) : (
                ""
              )}
            </>
          }
          <AddRoundedIcon
            sx={{ fontSize: "2rem", cursor: "pointer", color: "#595959" }}
            onClick={() => {
              if (props.setNumeroBeneficiosPotenciais != null && props.numeroBeneficiosPotenciais != null) {
                props.setNumeroBeneficiosPotenciais(props.numeroBeneficiosPotenciais + 1);
              }
            }}
          />
        </BoxIcones>
        <BoxTitulos>
          <TypographyTitulos>Benefício Qualitativo</TypographyTitulos>
        </BoxTitulos>
        <BeneficiosQualitativos
          numeroBeneficios={props.numeroBeneficiosQualitativos}
          informacaoProcesso={props.informacaoProcesso}
          setInformacaoProcesso={props.setInformacaoProcesso}
          beneficiosQualitativosLista={beneficiosQualitativosLista}
        />
        <BoxIcones>
          {props.numeroBeneficiosQualitativos != null &&
            <>
              {props.numeroBeneficiosQualitativos > 0 ? (
                <RemoveRoundedIcon
                  sx={{
                    fontSize: "2rem",
                    marginRight: 3,
                    cursor: "pointer",
                    color: "#595959",
                  }}
                  onClick={() => {
                    if (props.setNumeroBeneficiosQualitativos && props.numeroBeneficiosQualitativos) {
                      props.setNumeroBeneficiosQualitativos(props.numeroBeneficiosQualitativos - 1);
                    }
                  }}
                />
              ) : (
                ""
              )}
            </>
          }
          <AddRoundedIcon
            sx={{ fontSize: "2rem", cursor: "pointer", color: "#595959" }}
            onClick={() => {
              if (props.setNumeroBeneficiosQualitativos != null && props.numeroBeneficiosQualitativos != null) {
                props.setNumeroBeneficiosQualitativos(props.numeroBeneficiosQualitativos + 1);
              }
            }}
          />
        </BoxIcones>
        <BoxFrequencia>
          <TypographyLabels>Frequência de uso da solução:</TypographyLabels>
          <Select
            id="frequenciaUso"
            value={frequencia}
            onChange={onFrequenciaChange}
          >
            {valoresFrequencia.map((valor: any, index: number) => {
              return (
                <MenuItem key={index} value={valor}>{valor}</MenuItem>
              )
            })}
          </Select>
        </BoxFrequencia>
      </BoxContainerGeral>
    </>
  );
}

function BeneficiosReais(props: {
  numeroBeneficios: number | undefined,
  informacaoProcesso: any,
  setInformacaoProcesso: any,
  beneficiosReaisLista: any,
  moedaReal: any
  setMoedaReal: any
}) {
  let beneficios: JSX.Element[] = [];

  if (props.numeroBeneficios) {
    for (let i = 0; i < props.numeroBeneficios; i++) {
      if (props.beneficiosReaisLista[i]) {
        beneficios.push(<BeneficioReal index={i}
          informacaoProcesso={props.informacaoProcesso}
          setInformacaoProcesso={props.setInformacaoProcesso}
          moedaBeneficio={props.beneficiosReaisLista[i].moeda}
          idBeneficioReal={props.beneficiosReaisLista[i].idBeneficio} />);
      } else {
        beneficios.push(<BeneficioReal index={i}
          informacaoProcesso={props.informacaoProcesso}
          setInformacaoProcesso={props.setInformacaoProcesso}
          moedaReal={props.moedaReal}
          setMoedaReal={props.setMoedaReal}
        />);
      }
    }
  }

  return <>{beneficios}</>;
}

function BeneficiosPotenciais(props: {
  numeroBeneficios: number | undefined,
  informacaoProcesso: any,
  setInformacaoProcesso: any,
  beneficiosPotenciasLista: any,
  moedaPotencial: any
  setMoedaPotencial: any
}) {
  let beneficios: JSX.Element[] = [];

  if (props.numeroBeneficios) {
    for (let i = 0; i < props.numeroBeneficios; i++) {
      if (props.beneficiosPotenciasLista[i]) {
        beneficios.push(<BeneficioPotencial index={i}
          informacaoProcesso={props.informacaoProcesso}
          setInformacaoProcesso={props.setInformacaoProcesso}
          moedaBeneficio={props.beneficiosPotenciasLista[i].moeda}
          idBeneficioPotencial={props.beneficiosPotenciasLista[i].idBeneficio} />);
      } else {
        beneficios.push(<BeneficioPotencial index={i}
          informacaoProcesso={props.informacaoProcesso}
          setInformacaoProcesso={props.setInformacaoProcesso}
          moedaPotencial={props.moedaPotencial}
          setMoedaPotencial={props.setMoedaPotencial} />);
      }
    }
  }

  return <>{beneficios}</>;
}

function BeneficiosQualitativos(props: {
  numeroBeneficios: number | undefined,
  informacaoProcesso: any,
  setInformacaoProcesso: any,
  beneficiosQualitativosLista: any
}) {
  let beneficios: JSX.Element[] = [];

  if (props.numeroBeneficios) {
    for (let i = 0; i < props.numeroBeneficios; i++) {
      if (props.beneficiosQualitativosLista[i]) {
        beneficios.push(<BeneficioQualitativo index={i} informacaoProcesso={props.informacaoProcesso}
          setInformacaoProcesso={props.setInformacaoProcesso} idBeneficioQualitativo={props.beneficiosQualitativosLista[i].idBeneficio} />);

      } else {
        beneficios.push(<BeneficioQualitativo index={i} informacaoProcesso={props.informacaoProcesso}
          setInformacaoProcesso={props.setInformacaoProcesso} />);
      }
    }
  }

  return <>{beneficios}</>;
}

function BeneficioReal(props: {
  index: number,
  informacaoProcesso: any,
  setInformacaoProcesso: any,
  moedaBeneficio?: any,
  idBeneficioReal?: any,
  moedaReal?: any,
  setMoedaReal?: any
}) {
  const [idBeneficioComponente, setIdBeneficioComponente] = useState(props.idBeneficioReal)
  const [moedaBeneficio, setMoedaBeneficio] = useState("EURO")
  const [configuracaoValor, setConfiguracaoValor] = useState({ locale: 'pt-BR', currency: 'BRL' })

  useEffect(() => {
    switch (moedaBeneficio) {
      case "EURO": {
        setConfiguracaoValor({ locale: "es-ES", currency: "EUR" });
        break;
      };
      case "DOLAR": {
        setConfiguracaoValor({ locale: "en-US", currency: "USD" });
        break;
      };
      default: {
        setConfiguracaoValor({ locale: "pt-BR", currency: "BRL" });
        break;
      };
    };
  }, [moedaBeneficio]);

  useEffect(() => {
    if (props.moedaBeneficio) {
      setMoedaBeneficio(props.moedaBeneficio)
    }

    if (props.moedaReal) {
      setMoedaBeneficio(props.moedaReal)
    }
  })

  return (
    <BoxContainerGeralBeneficio key={props.index}>
      <BoxContainerDivisorio>
        <BoxInputsAcima>
          <BoxValorMensal>
            <TypographyLabels>Valor Mensal: </TypographyLabels>
          </BoxValorMensal>

          <BoxInputs>
            <CurrencyInput
              id={`valorMensalReal${props.index}`}
              style={{
                width: "30%",
                marginRight: 5,
                boxShadow: "5px 5px 10px 0 #00000050",
              }}
              decimalsLimit={2}
              decimalSeparator=","
              groupSeparator="."
              intlConfig={configuracaoValor}
              onChange={(e: any) => {
                if (atualizarObjetos != null) {
                  console.log(e.target)
                  atualizarObjetos()
                } else {
                  atualizarBeneficiosDemanda(
                    props.informacaoProcesso.beneficiosDemanda,
                    idBeneficioComponente,
                    setIdBeneficioComponente,
                    "valor",
                    e.target.value,
                    props.informacaoProcesso,
                    props.setInformacaoProcesso,
                    "REAL"
                  )
                }
              }} />

            <Select
              id={`moedaReal${props.index}`}
              sx={{ width: "10%", boxShadow: "5px 5px 10px 0 #00000050" }}
              value={moedaBeneficio}
              onChange={(e: any) => {
                setMoedaBeneficio(e.target.value)

                props.moedaReal.push(e.target.value)
                props.setMoedaReal(props.moedaReal)

                if (atualizarObjetos != null) {
                  atualizarObjetos()
                } else {
                  atualizarBeneficiosDemanda(
                    props.informacaoProcesso.beneficiosDemanda,
                    idBeneficioComponente,
                    setIdBeneficioComponente,
                    "moeda",
                    e.target.value,
                    props.informacaoProcesso,
                    props.setInformacaoProcesso,
                    "REAL"
                  )
                }
              }
              }>
              {moedas.map((option: any, index: number) => (
                <MenuItem id={`moedaRealoptions${props.index}`} key={index} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </BoxInputs>
        </BoxInputsAcima>

        <BoxInputsAbaixo>
          <TypographyLabels>Descrição: </TypographyLabels>

          <TextField
            id={`descricaoReal${props.index}`}
            onChange={(e: any) => {
              if (atualizarObjetos != null) {
                atualizarObjetos()
              } else {
                atualizarBeneficiosDemanda(
                  props.informacaoProcesso.beneficiosDemanda,
                  idBeneficioComponente,
                  setIdBeneficioComponente,
                  "descricao",
                  e.target.value,
                  props.informacaoProcesso,
                  props.setInformacaoProcesso,
                  "REAL"
                )
              }
            }}
            multiline
            maxRows={Infinity}
            sx={{ width: "100%", boxShadow: "5px 5px 10px 0 #00000050" }}>
          </TextField>
        </BoxInputsAbaixo>
      </BoxContainerDivisorio>
    </BoxContainerGeralBeneficio>
  );
}

function BeneficioPotencial(props: {
  index: number,
  informacaoProcesso: any,
  setInformacaoProcesso: any,
  moedaBeneficio?: any,
  idBeneficioPotencial?: any,
  moedaPotencial?: any,
  setMoedaPotencial?: any
}) {
  const [idBeneficioComponente, setIdBeneficioComponente] = useState(props.idBeneficioPotencial)
  const [moedaBeneficio, setMoedaBeneficio] = useState("EURO")

  useEffect(() => {
    if (props.moedaBeneficio) {
      setMoedaBeneficio(props.moedaBeneficio)
    }

    if (props.moedaPotencial) {
      setMoedaBeneficio(props.moedaPotencial)
    }
  })


  return (
    <BoxContainerGeralBeneficio key={props.index}>
      <BoxContainerDivisorio>
        <BoxInputsAcima>
          <BoxValorMensal>
            <TypographyLabels>Valor Mensal:</TypographyLabels>
          </BoxValorMensal>

          <BoxInputs
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
            }}>

            <TextField
              id={`valorMensalPotencial${props.index}`}
              onChange={(e: any) => {
                if (atualizarObjetos != null) {
                  atualizarObjetos()
                } else {
                  atualizarBeneficiosDemanda(
                    props.informacaoProcesso.beneficiosDemanda,
                    idBeneficioComponente,
                    setIdBeneficioComponente,
                    "valor",
                    e.target.value,
                    props.informacaoProcesso,
                    props.setInformacaoProcesso,
                    "POTENCIAL"
                  )
                }
              }}
              sx={{
                width: "30%",
                marginRight: 5,
                boxShadow: "5px 5px 10px 0 #00000050",
              }} />
            <Select
              id={`moedaPotencial${props.index}`}
              sx={{ width: "10%", boxShadow: "5px 5px 10px 0 #00000050" }}
              value={moedaBeneficio}
              onChange={(e: any) => {
                props.moedaPotencial.push(e.target.value)
                props.setMoedaPotencial(props.moedaPotencial)
                if (atualizarObjetos != null) {
                  atualizarObjetos()
                } else {
                  atualizarBeneficiosDemanda(
                    props.informacaoProcesso.beneficiosDemanda,
                    idBeneficioComponente,
                    setIdBeneficioComponente,
                    "moeda",
                    e.target.value,
                    props.informacaoProcesso,
                    props.setInformacaoProcesso,
                    "POTENCIAL"
                  )
                }
              }}>
              {moedas.map((moeda: any, index: number) => (
                <MenuItem id={`moedaPotencial${props.index}`} key={index} value={moeda}>
                  {moeda}
                </MenuItem>
              ))}
            </Select>
          </BoxInputs>
        </BoxInputsAcima>

        <BoxInputsAbaixo>
          <TypographyLabels>Descrição: </TypographyLabels>

          <TextField
            id={`descricaoPotencial${props.index}`}
            onChange={(e: any) => {
              if (atualizarObjetos != null) {
                atualizarObjetos()
              } else {
                atualizarBeneficiosDemanda(
                  props.informacaoProcesso.beneficiosDemanda,
                  idBeneficioComponente,
                  setIdBeneficioComponente,
                  "descricao",
                  e.target.value,
                  props.informacaoProcesso,
                  props.setInformacaoProcesso,
                  "POTENCIAL"
                )
              }

            }}
            multiline
            maxRows={Infinity}
            sx={{ width: "100%", boxShadow: "5px 5px 10px 0 #00000050" }}>
          </TextField>
        </BoxInputsAbaixo>
      </BoxContainerDivisorio>
    </BoxContainerGeralBeneficio>
  );
}

function BeneficioQualitativo(props: { index: number, informacaoProcesso: any, setInformacaoProcesso: any, idBeneficioQualitativo?: any }) {
  const [idBeneficioComponente, setIdBeneficioComponente] = useState(props.idBeneficioQualitativo)

  return (
    <BoxContainerGeralBeneficio key={props.index}>
      <BoxDescricaoRequeistosControle>
        <TypographyLabels>Descrição: </TypographyLabels>

        <TextField
          id={`beneficiosQualitativos${props.index}`}
          onChange={(e: any) => {
            if (atualizarObjetos != null) {
              atualizarObjetos()
            } else {
              atualizarBeneficiosDemanda(
                props.informacaoProcesso.beneficiosDemanda,
                idBeneficioComponente,
                setIdBeneficioComponente,
                "descricao",
                e.target.value,
                props.informacaoProcesso,
                props.setInformacaoProcesso,
                "QUALITATIVO"
              )
            }
          }}
          multiline
          maxRows={Infinity}
          sx={{ width: "100%", boxShadow: "5px 5px 10px 0 #00000050" }}>
        </TextField>
      </BoxDescricaoRequeistosControle>
    </BoxContainerGeralBeneficio>
  );
}

function atualizarBeneficiosDemanda(
  atualizacaoBeneficiosDemanda: any[],
  idBeneficioComponente: number,
  setIdBeneficioComponente: React.Dispatch<React.SetStateAction<number>>,
  nomeAtributo: string,
  valorInput: string,
  informacaoProcesso: any,
  setInformacaoProcesso: React.Dispatch<React.SetStateAction<any>>,
  tipoBeneficio: string
) {
  const beneficioComponente = atualizacaoBeneficiosDemanda.find((beneficio: any) => beneficio.idBeneficio == idBeneficioComponente)
  let newBeneficio: {
    idBeneficio?: number,
    descricao?: string,
    moeda?: string,
    tipoBeneficio?: string,
    valor?: number,
    novo?: boolean
  }

  if (beneficioComponente == null) {
    let idNovoBeneficio = -1

    if (atualizacaoBeneficiosDemanda.length == 0) {
      idNovoBeneficio = 1
    } else {
      idNovoBeneficio = atualizacaoBeneficiosDemanda[atualizacaoBeneficiosDemanda.length - 1].idBeneficio + 1
    }

    setIdBeneficioComponente(idNovoBeneficio)

    newBeneficio = {
      idBeneficio: idNovoBeneficio,
      [nomeAtributo]: Number.parseInt(valorInput),
      novo: true
    }

    atualizacaoBeneficiosDemanda.push(newBeneficio)
  } else {
    newBeneficio = {
      ...beneficioComponente,
      [nomeAtributo]: valorInput as any,
      tipoBeneficio: tipoBeneficio
    }

    let index = -1

    for (let i = 0; i < atualizacaoBeneficiosDemanda.length; i++) {
      if (atualizacaoBeneficiosDemanda[i].idBeneficio == idBeneficioComponente) {
        index = i
      }
    }

    atualizacaoBeneficiosDemanda[index] = newBeneficio
  }

  const novaInfoDemanda = {
    ...informacaoProcesso,
    beneficiosDemanda: atualizacaoBeneficiosDemanda
  };

  if (novaInfoDemanda) {
    setInformacaoProcesso(novaInfoDemanda);
  }
}