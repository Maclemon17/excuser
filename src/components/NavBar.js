import React from 'react'

const NavBar = () => {
  return (
    <div className='bg-light'>
        <nav className="navbar navbar-expand-lg bg-light navbar-light container">
            <div className="container-fluid">
                <a className="navbar-brand diaplay-6" href="/"> <span className='h1'>The</span><span className='text-warning h1'>Excuser</span></a>
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button> */}
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    {/* <a className="nav-link active" aria-current="page" href="#">Home</a>
                    <a className="nav-link" href="#">Features</a>
                    <a className="nav-link" href="#">Pricing</a>
                    <a className="nav-link disabled">Disabled</a> */}
                </div>
                </div>
            </div>
        </nav>   
    </div>
  )
}

export default NavBar