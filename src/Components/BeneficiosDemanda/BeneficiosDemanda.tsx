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
}) {
  const [numeroBeneficiosReais, setNumeroBeneficiosReais] = useState(1);
  const [numeroBeneficiosPotenciais, setNumeroBeneficiosPotenciais] =
    useState(1);
  const [numeroBeneficiosQualitativos, setNumeroBeneficiosQualitativos] =
    useState(1);
  const [frequencia, setFrequencia] = useState("");

  useEffect(() => {
    let info
    if(props.rascunho){
      info = JSON.parse(
        localStorage.getItem("RASCUNHOESCOLHIDO") as string
      );
    } else if(props.proposta){
      info = JSON.parse(
        localStorage.getItem("DEMANDASELECIONADA") as string
      );
    }

    for (let atributo in info) {
      if ((info as any)[atributo]) {
        if (atributo == "frequenciaUso") {
          setFrequencia(info[atributo]);
        }

        if (atributo == "beneficiosQualitativos") {
          setNumeroBeneficiosQualitativos(info[atributo].length);

          for (let i = 0; i < info[atributo].length; i++) {
            const beneficioQualitativo = document.getElementById(
              atributo + i
            ) as HTMLInputElement;
            if (beneficioQualitativo) {
              beneficioQualitativo.value = info[atributo][i];
            }
          }
        }

        if (atributo == "beneficiosPotenciais") {
          setNumeroBeneficiosPotenciais(info[atributo].length);

          for (let i = 0; i < info[atributo].length; i++) {
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
              descricao.value = info[atributo][i].descricao;
            }

            if (valorMensal) {
              valorMensal.value = info[atributo][i].valor;
            }

            if (moeda) {
              moeda.value = info[atributo][i].moeda;
            }
          }
        }

        if (atributo == "beneficiosReais") {
          setNumeroBeneficiosReais(info[atributo].length);

          for (let i = 0; i < info[atributo].length; i++) {
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
              descricao.value = info[atributo][i].descricao;
            }

            if (valorMensal) {
              valorMensal.value = info[atributo][i].valor;
            }

            if (moeda) {
              moeda.value = info[atributo][i].moeda;
            }
          }
        }
      }
    }
  }, [
    numeroBeneficiosReais,
    numeroBeneficiosPotenciais,
    numeroBeneficiosQualitativos,
  ]);

  return (
    <>
      <BoxContainerGeral>
        <BoxTitulos>
          <TypographyTitulos>Benefício Real</TypographyTitulos>
        </BoxTitulos>
        <BeneficiosReais numeroBeneficios={numeroBeneficiosReais} />
        <BoxIcones>
          {numeroBeneficiosReais > 1 ? (
            <RemoveRoundedIcon
              sx={{
                fontSize: "2rem",
                marginRight: 3,
                cursor: "pointer",
                color: "#595959",
              }}
              onClick={() => {
                setNumeroBeneficiosReais(numeroBeneficiosReais - 1);
              }}
            />
          ) : (
            ""
          )}
          <AddRoundedIcon
            sx={{ fontSize: "2rem", cursor: "pointer", color: "#595959" }}
            onClick={() => {
              setNumeroBeneficiosReais(numeroBeneficiosReais + 1);
            }}
          />
        </BoxIcones>
        <BoxTitulos>
          <TypographyTitulos>Benefício Potencial</TypographyTitulos>
        </BoxTitulos>
        <BeneficiosPotenciais numeroBeneficios={numeroBeneficiosPotenciais} />
        <BoxIcones>
          {numeroBeneficiosPotenciais > 1 ? (
            <RemoveRoundedIcon
              sx={{
                fontSize: "2rem",
                marginRight: 3,
                cursor: "pointer",
                color: "#595959",
              }}
              onClick={() => {
                setNumeroBeneficiosPotenciais(numeroBeneficiosPotenciais - 1);
              }}
            />
          ) : (
            ""
          )}
          <AddRoundedIcon
            sx={{ fontSize: "2rem", cursor: "pointer", color: "#595959" }}
            onClick={() => {
              setNumeroBeneficiosPotenciais(numeroBeneficiosPotenciais + 1);
            }}
          />
        </BoxIcones>
        <BoxTitulos>
          <TypographyTitulos>Benefício Qualitativo</TypographyTitulos>
        </BoxTitulos>
        <BeneficiosQualitativos
          numeroBeneficios={numeroBeneficiosQualitativos}
        />
        <BoxIcones>
          {numeroBeneficiosQualitativos > 1 ? (
            <RemoveRoundedIcon
              sx={{
                fontSize: "2rem",
                marginRight: 3,
                cursor: "pointer",
                color: "#595959",
              }}
              onClick={() => {
                setNumeroBeneficiosQualitativos(
                  numeroBeneficiosQualitativos - 1
                );
              }}
            />
          ) : (
            ""
          )}
          <AddRoundedIcon
            sx={{ fontSize: "2rem", cursor: "pointer", color: "#595959" }}
            onClick={() => {
              setNumeroBeneficiosQualitativos(numeroBeneficiosQualitativos + 1);
            }}
          />
        </BoxIcones>
        <BoxFrequencia>
          <TypographyLabels>Frequêcia de uso da solução:</TypographyLabels>
          <TextField
            value={frequencia}
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

function BeneficiosReais(props: { numeroBeneficios: number }) {
  let beneficios: JSX.Element[] = [];

  for (let i = 0; i < props.numeroBeneficios; i++) {
    beneficios.push(<BeneficioReal index={i} />);
  }

  return <>{beneficios}</>;
}

function BeneficiosPotenciais(props: { numeroBeneficios: number }) {
  let beneficios: JSX.Element[] = [];

  for (let i = 0; i < props.numeroBeneficios; i++) {
    beneficios.push(<BeneficioPotencial index={i} />);
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

function BeneficioReal(props: { index: number }) {
  const [moeda, setMoeda] = useState("BRL");

  const moedas = [
    {
      value: "USD",
      label: "$",
    },
    {
      value: "EUR",
      label: "€",
    },
    {
      value: "BTC",
      label: "฿",
    },
    {
      value: "JPY",
      label: "¥",
    },
  ];

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
                id={`moedaReal${props.index}`}
                sx={{ width: "10%", boxShadow: "5px 5px 10px 0 #00000050" }}
                // select
                label="Moeda"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setMoeda(event.target.value)
                }
              >
                {moedas.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.value}
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

function BeneficioPotencial(props: { index: number }) {
  const [moeda, setMoeda] = useState("BRL");

  const moedas = [
    {
      value: "USD",
      label: "$",
    },
    {
      value: "EUR",
      label: "€",
    },
    {
      value: "BTC",
      label: "฿",
    },
    {
      value: "JPY",
      label: "¥",
    },
  ];

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
                id={`moedaPotencial${props.index}`}
                sx={{ width: "10%", boxShadow: "5px 5px 10px 0 #00000050" }}
                // select
                label="Moeda"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setMoeda(event.target.value)
                }
              >
                {moedas.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.value}
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
        <BoxObrigacaoLegal>
          <TypographyLabels>
            Obrigação legal
            <Checkbox id={`obrigacaoLegal${props.index}`} />
          </TypographyLabels>
        </BoxObrigacaoLegal>
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
