import { Link } from 'react-router-dom'
import './Home.scss'

function Home(){
    return(
        <div id='home'>
            Home
            <Link to="/"> logout</Link>
        </div>
    )
}

export default Home;