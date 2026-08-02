import { Link } from "react-router-dom";
import logoImg from "../../logo.PNG"
import "./css/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <div className="navbar-logo">
          <img src={logoImg} alt="Granja & Corral" />
        </div>
      </Link>

      <Link to="/productos">
        <div>
          <h2>Productos</h2>
        </div>
      </Link>

      <Link to="/entregas">
        <div>
          <h2>Entregas</h2>
        </div>
      </Link>

      <Link to="/pedidos">
        <div>
          <h2>Pedidos</h2>
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
