
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container px-5">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Inicio</a></li>
            <li className="nav-item"><a className="nav-link" href="#!">Nosotros</a></li>
            <li className="nav-item"><a className="nav-link" href="#!">Servicios</a></li>
            <li className="nav-item"><a className="nav-link" href="#!">Clientes</a></li>
            <li className="nav-item"><a className="nav-link" href="#!">Contacto</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;