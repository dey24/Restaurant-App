import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to="#" className="navbar-brand">Logo</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                    <li className="nav-item">
                    <Link to="/home" className="nav-link active" aria-current="page">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link to = "/contact" className="nav-link" >Contact</Link>
                    </li>
                    <li className="nav-item">
                    <Link to ="/signUp" className="nav-link">SignUp</Link>
                    </li>
                    <li className="nav-item">
                    <Link to ="/logIn" className="nav-link">LogIn</Link>
                    </li>
                </ul>
                
                </div>
            </div>
        </nav>
    </div>
  )
}
export default Header