import {Link} from 'react-router-dom'

const Navbar=()=>{
    return(
        <header>
            <h1>My Todo App</h1>
            <nav className='navbar'>
                <Link to='/'>Home</Link>|
                <Link to='/about'>About</Link>
            </nav>
        </header>
    )
}
export default Navbar