
import Drawer from '@mui/material/Drawer'
import Box from '@mui/material/Box'
import './Sidebar.scss'

//fazer a sidebar ficar a baixo da navbar
function Sidebar(props: { open: boolean, tamanhoSideBar: number }) {

    return (
        <Drawer open={props.open} variant='persistent' sx={{ width: props.tamanhoSideBar }}>
            {/* fazer o conteúdo acompanhar a mudança de tamanho que o app faz */}
            <Box sx={{ width: '100%'}}>
                sidebar
            </Box>
        </Drawer>
    )
}

export default Sidebar