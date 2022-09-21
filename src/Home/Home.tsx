import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './Home.scss'
import { Toolbar } from '@mui/material';

function Home() {
    return (
        // <Grid container id='home'>
        //     <Grid item>
        //         Home
        //         <Link to="/"> logout</Link>

        //     </Grid>
        // </Grid>
        <div id='home'>
            {/* <Toolbar variant='regular'/> */}
            <div className='conteudo-container'>
                Home
                <Link to="/"> logout</Link>
            </div>
        </div>
    )
}

export default Home;