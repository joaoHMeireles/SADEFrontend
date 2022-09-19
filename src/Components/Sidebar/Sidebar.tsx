
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import './Sidebar.scss'


//fazer a sidebar ficar a baixo da navbar
function Sidebar(props: { open: boolean}) {
    const tamanho = "150px"
    const itens = [ "Home", "Criar", "Notificações"]

    return (
        <Drawer open={props.open} variant='persistent' sx={{width: tamanho}}>
            {/* fazer o conteúdo acompanhar a mudança de tamanho que o app faz */}
            <List>
                {itens.map((nome) => {
                    return (
                        <ListItem button key={nome}>
                            <ListItemText primary={nome}/>
                        </ListItem>
                    )
                })}
            </List>
        </Drawer>
    )
}

export default Sidebar