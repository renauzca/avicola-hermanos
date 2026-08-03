import { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../componentes/imagenes/logo.PNG';
import './css/navbar.css';

const Navbar = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <nav className="navbar">
      <Link to="/" onClick={cerrarMenu}>
        <div className="navbar-logo">
          <img src={logoImg} alt="Granja & Corral" />
        </div>
      </Link>

      {/* Links normales: visibles en desktop, ocultos en mobile */}
      <div className="navbar-links">
        <Link to="/productos"><h2>Productos</h2></Link>
        <Link to="/entregas"><h2>Entregas</h2></Link>
        <Link to="/pedidos"><h2>Pedidos</h2></Link>
      </div>

      {/* Botón hamburguesa: visible solo en mobile */}
      <button
        className={`hamburguesa ${menuAbierto ? 'activo' : ''}`}
        onClick={() => setMenuAbierto(!menuAbierto)}
        aria-label="Abrir menú"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Menú desplegable: aparece solo cuando está abierto, en mobile */}
      <div className={`navbar-mobile-menu ${menuAbierto ? 'abierto' : ''}`}>
        <Link to="/productos" onClick={cerrarMenu}><h2>Productos</h2></Link>
        <Link to="/entregas" onClick={cerrarMenu}><h2>Entregas</h2></Link>
        <Link to="/pedidos" onClick={cerrarMenu}><h2>Pedidos</h2></Link>
      </div>
    </nav>
  );
};

export default Navbar;