import { Link } from 'react-router-dom';


function Navbar(){
    return(
        <nav>
            <h3>Gark Godwin: Github User Stats Searcher</h3>
            <ul className="nav-links">
                <Link to="/">
                    <div>
                        <span className="link-top"></span>
                        <span className="link-bottom"></span>
                        <li>
                            Home
                        </li>
                    </div>
                </Link>
            </ul>
        </nav>
    )
}

export default Navbar;