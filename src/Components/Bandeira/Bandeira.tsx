import { BoxBandeira, BoxContainerBandeira, BoxTrianguloBandeira } from "./Bandeira.styles";

/**
 * Componente da bandeira que altera a cor de acordo com o valor que recebe e que
 * se localiza no canto superior direito container principal
 * 
 * @param props 
 * @returns 
 */
 export default function Bandeira(props: { cor: string }) {
    return (
        <BoxContainerBandeira >
            <BoxBandeira sx={{ backgroundColor: props.cor }}>
                <BoxTrianguloBandeira />
            </BoxBandeira>
        </BoxContainerBandeira>
    )
}