import "../componentes/css/home.css";
import img from "../../../imagenes/fnd.jpg";
import logoImg from "../../../imagenes/logo.PNG";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="container">
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
      <main>
        <section className="hero">
          <div className="hero-content">
            <div className="hero-top">
              <div className="hero-title">
                <h1>FRESCO</h1>
                <h1 className="highlight">NATURAL</h1>
                <h1>ENTREGADO</h1>
              </div>
              <div className="hero-stats">
                <div className="stat">
                  <h3>10+ años</h3>
                  <span>años de experiencia</span>
                </div>
                <div className="stat">
                  <h3>SIN ADITIVOS</h3>
                  <span>calidad asegurada</span>
                </div>
              </div>
            </div>
            <div className="hero-image">
              <img src={img} alt="Pollo premium" />
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-content">
            <div className="hero-description">
              <p>
                Pollo premium entero y troceado para restaurantes, hoteles y
                minoristas. Cadena de frío garantizada desde la granja hasta su
                puerta
              </p>
            </div>
            <div className="hero-buttons">
                <a href="http://wa.me/5491133785813">
              
                {" "}
                <button className="btn-whatsapp">PEDIR VÍA WHATSAPP</button>
           
                </a>
              <Link to="/productos">
                {" "}
                <button className="btn-productos">VER PRODUCTOS</button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
