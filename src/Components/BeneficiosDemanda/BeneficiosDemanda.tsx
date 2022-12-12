import { useState } from "react";
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

export default function BeneficiosDemanda() {
  const [numeroBeneficiosReais, setNumeroBeneficiosReais] = useState(1);
  const [numeroBeneficiosPotenciais, setNumeroBeneficiosPotenciais] =
    useState(1);

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
        <BeneficiosQualitativos />
      </BoxContainerGeral>
    </>
  );
}

function BeneficiosReais(props: { numeroBeneficios: number }) {
  let beneficios: JSX.Element[] = [];

  for (let i = 0; i < props.numeroBeneficios; i++) {
    beneficios.push(<BeneficioReal />);
  }

  return <>{beneficios}</>;
}

function BeneficiosPotenciais(props: { numeroBeneficios: number }) {
  let beneficios: JSX.Element[] = [];

  for (let i = 0; i < props.numeroBeneficios; i++) {
    beneficios.push(<BeneficioPotencial />);
  }

  return <>{beneficios}</>;
}

function BeneficiosQualitativos() {
  const [frequencia, setFrequencia] = useState("Frequência");
  const [numeroBeneficiosQualitativos, setNumeroBeneficiosQualitativos] =
    useState(1);

  const frequencias = [
    {
      value: "Frequência 01",
      label: "$",
    },
    {
      value: "Frequência 02",
      label: "€",
    },
    {
      value: "Frequência 03",
      label: "฿",
    },
    {
      value: "Frequência 04",
      label: "¥",
    },
  ];
  let beneficios: JSX.Element[] = [];

  for (let i = 0; i < numeroBeneficiosQualitativos; i++) {
    beneficios.push(<BeneficioQualitativo />);
  }

  return (
    <>
      {beneficios}
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
              setNumeroBeneficiosQualitativos(numeroBeneficiosQualitativos - 1);
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
          id="frequenciaUso"
          sx={{
            width: "30%",
            marginTop: 1,
            boxShadow: "5px 5px 10px 0 #00000050",
          }}
          select
          value={frequencia}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setFrequencia(event.target.value)
          }
        >
          {frequencias.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
      </BoxFrequencia>
    </>
  );
}

function BeneficioReal() {
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
                id="valorMensalReal"
                sx={{
                  width: "30%",
                  marginRight: 5,
                  boxShadow: "5px 5px 10px 0 #00000050",
                }}
              />
              <TextField
                id="moedaReal"
                sx={{ width: "10%", boxShadow: "5px 5px 10px 0 #00000050" }}
                select
                label="Moeda"
                value={moeda}
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
              id="descricacaoReal"
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

function BeneficioPotencial() {
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
                id="valorMensalPotencial"
                sx={{
                  width: "30%",
                  marginRight: 5,
                  boxShadow: "5px 5px 10px 0 #00000050",
                }}
              />
              <TextField
                id="moedaPotencial"
                sx={{ width: "10%", boxShadow: "5px 5px 10px 0 #00000050" }}
                select
                label="Moeda"
                value={moeda}
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
              id="descricaoPotencial"
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
            <Checkbox />
          </TypographyLabels>
        </BoxObrigacaoLegal>
      </BoxContainerGeralBeneficio>
    </>
  );
}

function BeneficioQualitativo() {
  return (
    <>
      <BoxContainerGeralBeneficio>
        <BoxDescricaoRequeistosControle>
          <TypographyLabels>Descrição: </TypographyLabels>
          <TextField
            id="descricaoQualitativo"
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
