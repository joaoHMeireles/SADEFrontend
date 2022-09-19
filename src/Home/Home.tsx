import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './Home.scss'

function Home() {
    return (
        // <Grid container id='home'>
        //     <Grid item>
        //         Home
        //         <Link to="/"> logout</Link>

        //     </Grid>
        // </Grid>
        <div id='home'>
            Home
            <Link to="/"> logout</Link>
        </div>
    )
}

export default Home;