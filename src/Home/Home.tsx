import { Link } from 'react-router-dom'
import './Home.scss'

function Home(){
    return(
        <div>
            Home
            <Link to="/"> logout</Link>
        </div>
    )
}

export default Home;