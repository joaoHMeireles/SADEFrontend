import { useState, useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
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

export default function BeneficiosDemanda(props: {
  rascunho: boolean;
  proposta: boolean;
  numeroBeneficiosReais?: number
  numeroBeneficiosPotenciais?: number
  numeroBeneficiosQualitativos?: number
  setNumeroBeneficiosReais?: React.Dispatch<React.SetStateAction<number>>
  setNumeroBeneficiosPotenciais?: React.Dispatch<React.SetStateAction<number>>
  setNumeroBeneficiosQualitativos?: React.Dispatch<React.SetStateAction<number>>
  moedaReal?: string[]
  setMoedaReal?: React.Dispatch<React.SetStateAction<string[]>>
  moedaPotencial?: string[]
  setMoedaPotencial?: React.Dispatch<React.SetStateAction<string[]>>
}) {

  const [frequencia, setFrequencia] = useState("");
  const [informacaoProcesso, setInformacaoProcesso] = useState<any>()

  const moedas = [
    {
      moeda: "DOLAR",
    },
    {
      moeda: "EURO",
    },
    {
      moeda: "BRL",
    },
  ];

  useEffect(() => {
    if (props.rascunho || props.proposta) {
      let info
      if (props.rascunho) {
        info = JSON.parse(localStorage.getItem("RASCUNHOESCOLHIDO") as string)
      } else if (props.proposta) {
        info = JSON.parse(localStorage.getItem("DEMANDASELECIONADA") as string)
      }
      setInformacaoProcesso(info);
      // props.setNumeroBeneficiosQualitativos(info.beneficiosQualitativos.length);
      // props.setNumeroBeneficiosReais(info.beneficiosReais.length);
      // props.setNumeroBeneficiosPotenciais(info.beneficiosPotenciais.length);
    }

  }, [])

  useEffect(() => {
    for (let atributo in informacaoProcesso) {
      if ((informacaoProcesso as any)[atributo]) {
        if (atributo == "frequenciaUso") {
          setFrequencia(informacaoProcesso[atributo]);
        }

        if (atributo == "beneficiosQualitativos") {
          for (let i = 0; i < informacaoProcesso[atributo].length; i++) {
            const beneficioQualitativo = document.getElementById(
              atributo + i
            ) as HTMLInputElement;
            if (beneficioQualitativo) {
              beneficioQualitativo.value = informacaoProcesso[atributo][i];
            }
          }
        }

        if (atributo == "beneficiosPotenciais") {
          for (let i = 0; i < informacaoProcesso[atributo].length; i++) {
            const descricao = document.getElementById(
              "descricaoPotencial" + i
            ) as HTMLInputElement;
            const valorMensal = document.getElementById(
              "valorMensalPotencial" + i
            ) as HTMLInputElement;
            const moeda = document.getElementById(
              "moedaPotencial" + i
            ) as HTMLInputElement;

            if (descricao) {
              descricao.value = informacaoProcesso[atributo][i].descricao;
            }

            if (valorMensal) {
              valorMensal.value = informacaoProcesso[atributo][i].valor;
            }

            if (moeda) {
              moeda.value = informacaoProcesso[atributo][i].moeda;
            }
          }
        }

        if (atributo == "beneficiosReais") {
          for (let i = 0; i < informacaoProcesso[atributo].length; i++) {
            const descricao = document.getElementById(
              "descricaoReal" + i
            ) as HTMLInputElement;
            const valorMensal = document.getElementById(
              "valorMensalReal" + i
            ) as HTMLInputElement;
            const moeda = document.getElementById(
              "moedaReal" + i
            ) as HTMLInputElement;

            if (descricao) {
              descricao.value = informacaoProcesso[atributo][i].descricao;
            }

            if (valorMensal) {
              valorMensal.value = informacaoProcesso[atributo][i].valor;
            }

            if (moeda) {
              moeda.value = informacaoProcesso[atributo][i].moeda;
            }
          }
        }
      }
    }
  }, [
    props.numeroBeneficiosReais,
    props.numeroBeneficiosPotenciais,
    props.numeroBeneficiosQualitativos,
  ]);

  return (
    <>
      <BoxContainerGeral>
        <BoxTitulos>
          <TypographyTitulos>Benefício Real</TypographyTitulos>
        </BoxTitulos>
        <BeneficiosReais numeroBeneficios={props.numeroBeneficiosReais} moedas={moedas} moedaReal={props.moedaReal} setMoedaReal={props.setMoedaReal} />
        <BoxIcones>
          {props.numeroBeneficiosReais > 1 ? (
            <RemoveRoundedIcon
              sx={{
                fontSize: "2rem",
                marginRight: 3,
                cursor: "pointer",
                color: "#595959",
              }}
              onClick={() => {
                props.setNumeroBeneficiosReais(props.numeroBeneficiosReais - 1);
              }}
            />
          ) : (
            ""
          )}
          <AddRoundedIcon
            sx={{ fontSize: "2rem", cursor: "pointer", color: "#595959" }}
            onClick={() => {
              props.setNumeroBeneficiosReais(props.numeroBeneficiosReais + 1);
            }}
          />
        </BoxIcones>
        <BoxTitulos>
          <TypographyTitulos>Benefício Potencial</TypographyTitulos>
        </BoxTitulos>
        <BeneficiosPotenciais numeroBeneficios={props.numeroBeneficiosPotenciais} moedas={moedas} moedaPotencial={props.moedaPotencial} setMoedaPotencial={props.setMoedaPotencial} />
        <BoxIcones>
          {props.numeroBeneficiosPotenciais > 1 ? (
            <RemoveRoundedIcon
              sx={{
                fontSize: "2rem",
                marginRight: 3,
                cursor: "pointer",
                color: "#595959",
              }}
              onClick={() => {
                props.setNumeroBeneficiosPotenciais(props.numeroBeneficiosPotenciais - 1);
              }}
            />
          ) : (
            ""
          )}
          <AddRoundedIcon
            sx={{ fontSize: "2rem", cursor: "pointer", color: "#595959" }}
            onClick={() => {
              props.setNumeroBeneficiosPotenciais(props.numeroBeneficiosPotenciais + 1);
            }}
          />
        </BoxIcones>
        <BoxTitulos>
          <TypographyTitulos>Benefício Qualitativo</TypographyTitulos>
        </BoxTitulos>
        <BeneficiosQualitativos
          numeroBeneficios={props.numeroBeneficiosQualitativos}
        />
        <BoxIcones>
          {props.numeroBeneficiosQualitativos > 1 ? (
            <RemoveRoundedIcon
              sx={{
                fontSize: "2rem",
                marginRight: 3,
                cursor: "pointer",
                color: "#595959",
              }}
              onClick={() => {
                props.setNumeroBeneficiosQualitativos(
                  props.numeroBeneficiosQualitativos - 1
                );
              }}
            />
          ) : (
            ""
          )}
          <AddRoundedIcon
            sx={{ fontSize: "2rem", cursor: "pointer", color: "#595959" }}
            onClick={() => {
              props.setNumeroBeneficiosQualitativos(props.numeroBeneficiosQualitativos + 1);
            }}
          />
        </BoxIcones>
        <BoxFrequencia>
          <TypographyLabels>Frequência de uso da solução:</TypographyLabels>
          <TextField
            value={frequencia}
            id="frequenciaUso"
            sx={{
              width: "30%",
              marginTop: 1,
              boxShadow: "5px 5px 10px 0 #00000050",
            }}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setFrequencia(event.target.value)
            }
          />
        </BoxFrequencia>
      </BoxContainerGeral>
    </>
  );
}

function BeneficiosReais(props: { numeroBeneficios: number, moedas: Object[], moedaReal: string[], setMoedaReal: React.Dispatch<React.SetStateAction<string[]>> }) {
  let beneficios: JSX.Element[] = [];

  for (let i = 0; i < props.numeroBeneficios; i++) {
    beneficios.push(<BeneficioReal index={i} moedas={props.moedas} moedaReal={props.moedaReal} setMoedaReal={props.setMoedaReal} />);
  }

  return <>{beneficios}</>;
}

function BeneficiosPotenciais(props: { numeroBeneficios: number, moedas: Object[], moedaPotencial: string[], setMoedaPotencial: React.Dispatch<React.SetStateAction<string[]>> }) {
  let beneficios: JSX.Element[] = [];

  for (let i = 0; i < props.numeroBeneficios; i++) {
    beneficios.push(<BeneficioPotencial index={i} moedas={props.moedas} moedaPotencial={props.moedaPotencial} setMoedaPotencial={props.setMoedaPotencial} />);
  }

  return <>{beneficios}</>;
}

function BeneficiosQualitativos(props: { numeroBeneficios: number }) {
  let beneficios: JSX.Element[] = [];

  for (let i = 0; i < props.numeroBeneficios; i++) {
    beneficios.push(<BeneficioQualitativo index={i} />);
  }

  return <>{beneficios}</>;
}

function BeneficioReal(props: { index: number, moedas: Object[], moedaReal: string[], setMoedaReal: React.Dispatch<React.SetStateAction<string[]>> }) {

  return (
    <>
      <BoxContainerGeralBeneficio>
        <BoxContainerDivisorio>
          <BoxInputsAcima>
            <BoxValorMensal>
              <TypographyLabels>Valor Mensal: </TypographyLabels>
            </BoxValorMensal>
            <BoxInputs>
              <TextField
                id={`valorMensalReal${props.index}`}
                sx={{
                  width: "30%",
                  marginRight: 5,
                  boxShadow: "5px 5px 10px 0 #00000050",
                }}
              />
              <TextField
                // id={`moedaReal${props.index}`}                sx={{ width: "10%", boxShadow: "5px 5px 10px 0 #00000050" }}
                select
                label="Moeda"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  props.moedaReal.push(event.target.value)
                  props.setMoedaReal(props.moedaReal)
                }
                }
              >
                {props.moedas.map((option: any) => (
                  <MenuItem id={`moedaReal${props.index}`} key={option.moeda} value={option.moeda}>
                    {option.moeda}
                  </MenuItem>
                ))}
              </TextField>
            </BoxInputs>
          </BoxInputsAcima>
          <BoxInputsAbaixo>
            <TypographyLabels>Descrição: </TypographyLabels>
            <TextField
              id={`descricaoReal${props.index}`}
              multiline
              rows={7}
              maxRows={Infinity}
              sx={{ width: "100%", boxShadow: "5px 5px 10px 0 #00000050" }}
            ></TextField>
          </BoxInputsAbaixo>
        </BoxContainerDivisorio>
      </BoxContainerGeralBeneficio>
    </>
  );
}

function BeneficioPotencial(props: { index: number, moedas: Object[], moedaPotencial: string[], setMoedaPotencial: React.Dispatch<React.SetStateAction<string[]>> }) {

  return (
    <>
      <BoxContainerGeralBeneficio>
        <BoxContainerDivisorio>
          <BoxInputsAcima>
            <BoxValorMensal>
              <TypographyLabels>Valor Mensal: </TypographyLabels>
            </BoxValorMensal>
            <BoxInputs
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <TextField
                id={`valorMensalPotencial${props.index}`}
                sx={{
                  width: "30%",
                  marginRight: 5,
                  boxShadow: "5px 5px 10px 0 #00000050",
                }}
              />
              <TextField
                // id={`moedaPotencial${props.index}`}
                sx={{ width: "10%", boxShadow: "5px 5px 10px 0 #00000050" }}
                select
                label="Moeda"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  props.moedaPotencial.push(event.target.value)
                  props.setMoedaPotencial(props.moedaPotencial)
                }
                }
              >
                {props.moedas.map((option: any) => (
                  <MenuItem id={`moedaPotencial${props.index}`} key={option.moeda} value={option.moeda}>
                    {option.moeda}
                  </MenuItem>
                ))}
              </TextField>
            </BoxInputs>
          </BoxInputsAcima>
          <BoxInputsAbaixo>
            <TypographyLabels>Descrição: </TypographyLabels>
            <TextField
              id={`descricaoPotencial${props.index}`}
              multiline
              rows={7}
              maxRows={Infinity}
              sx={{ width: "100%", boxShadow: "5px 5px 10px 0 #00000050" }}
            ></TextField>
          </BoxInputsAbaixo>
        </BoxContainerDivisorio>
        {/* <BoxObrigacaoLegal>
          <TypographyLabels>
            Obrigação legal
            <Checkbox id={`obrigacaoLegal${props.index}`} />
          </TypographyLabels>
        </BoxObrigacaoLegal> */}
      </BoxContainerGeralBeneficio>
    </>
  );
}

function BeneficioQualitativo(props: { index: number }) {
  return (
    <>
      <BoxContainerGeralBeneficio>
        <BoxDescricaoRequeistosControle>
          <TypographyLabels>Descrição: </TypographyLabels>
          <TextField
            id={`beneficiosQualitativos${props.index}`}
            multiline
            rows={7}
            maxRows={Infinity}
            sx={{ width: "100%", boxShadow: "5px 5px 10px 0 #00000050" }}
          ></TextField>
        </BoxDescricaoRequeistosControle>
      </BoxContainerGeralBeneficio>
    </>
  );
}
