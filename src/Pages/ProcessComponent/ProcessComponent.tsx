
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb'
import { ContentBox, ContainerBox } from '../App.styles'

export default function ProcessComponent(props: {tipo: string}){
    return(
        <ContentBox >
        <Breadcrumb />
        <ContainerBox>
            aaa
        </ContainerBox>
    </ContentBox>
    )
}