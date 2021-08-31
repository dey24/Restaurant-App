import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  
    //views
    const showNav = () => {
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" href="#">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" href="#">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" href="#"></Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</Link>
                    </li>
                </ul>
                <form clasName="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
    }

}

export default Header
