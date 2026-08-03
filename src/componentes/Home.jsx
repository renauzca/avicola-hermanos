import "../componentes/css/home.css";
import imgPrueba from '../componentes/imagenes/op1.jpg'

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <main>
        <section className="hero">
          <div className="hero-grid">
            <div className="hero-left">
              <div className="hero-title">
                <h1>FRESCO</h1>
                <h1 className="highlight">NATURAL</h1>
                <h1>ENTREGADO</h1>
              </div>

              <p className="hero-description">
                Pollo premium entero y troceado para restaurantes, hoteles y
                minoristas. Cadena de frío garantizada desde la granja hasta
                su puerta.
              </p>

              <div className="hero-stats">
                <div className="stat">
                  <h3>10+ AÑOS</h3>
                  <span>Años de experiencia</span>
                </div>
                <div className="stat">
                  <h3>SIN ADITIVOS</h3>
                  <span>Calidad asegurada</span>
                </div>
              </div>

              <div className="hero-buttons">
                <a href="http://wa.me/5491140373225">
                  <button className="btn-whatsapp">PEDIR VÍA WHATSAPP</button>
                </a>
                <Link to="/productos">
                  <button className="btn-productos">VER PRODUCTOS</button>
                </Link>
              </div>
            </div>

            <div className="hero-right">
              <img src={imgPrueba} alt="Pollo premium" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;