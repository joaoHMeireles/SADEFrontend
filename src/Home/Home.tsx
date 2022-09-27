import { Link } from 'react-router-dom'
import './Home.scss'

function Home() {
    return (
        <div id='home'>
            <div className='conteudo-container'>
                Home
                <Link to="/"> logout</Link>
            </div>
        </div>
    )
}

export default Home;