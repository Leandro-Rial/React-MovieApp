import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const Header = () => {

    const [menu, setMenu] = useState(false);

    const styleMenu = {
        left: menu ? 0 : '-100%'
    }

    return (
        <header>
            <div className="container">
                <div className="inner-content">
                    <div className="brand">
                        <Link to="/">WatchList</Link>
                    </div>

                    <ul className="nav-links" style={styleMenu}>
                        <li onClick={() => setMenu(!menu)}>
                            <Link to="/">Watch List</Link>
                        </li>
                        <li onClick={() => setMenu(!menu)}>
                            <Link to="/watched">Watched</Link>
                        </li>
                        <li onClick={() => setMenu(!menu)}>
                            <Link to="/add" className="btn">Add Movie</Link>
                        </li>

                        <li className="cruz" onClick={() => setMenu(!menu)}>
                            <i className="fas fa-times"></i>
                        </li>
                    </ul>

                    <div className="menu" onClick={() => setMenu(!menu)}>
                        <i className="fas fa-bars"></i>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
