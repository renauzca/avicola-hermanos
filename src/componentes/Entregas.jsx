import { Link } from 'react-router-dom';
import imgMap from '../componentes/imagenes/mapadef.png'
import './css/entregas.css'

const Entregas = () => {
  return (
    <div className="containerEntregas">
      <main className="entregas-header">
        <h3 className="entregas-eyebrow">Zonas de cobertura / Mapa de reparto</h3>
        <h1 className="entregas-titulo">Nuestra zona de reparto: Capital Federal</h1>
        <p className="entregas-subtitulo">
          Atendemos restaurantes, hoteles, granjas, supermercados, minoristas y
          particulares. Cadena de frío garantizada.
        </p>
      </main>

      <div className="entregas-content">
        <section className="entregas-info">
          <div className="info-card">
            <h4>Horarios de reparto</h4>
            <h5>LUNES A SÁBADO: 06:00 - 13:00</h5>
          </div>
          <div className="info-card">
            <h4>Días de entrega</h4>
            <h5>LUN, MAR, MIE, JUE, VIE, SAB</h5>
          </div>
          <div className="info-card">
            <h4>Cadena de frío garantizada</h4>
          </div>
          <div className="info-card">
            <h4>Pedidos mínimos</h4>
            <h5>Restaurantes/Hoteles: 50 kg</h5>
            <h5>Particulares: 20 kg</h5>
          </div>
        </section>

        <section className="entregas-mapa">
          <img src={imgMap} alt="Mapa de zona de reparto" />
        </section>
      </div>

      <div className="entregas-botones">
        <a href="http://wa.me/5491140373225">
        <button className="btn-whatsapp">Consultar Reparto Vía WhatsApp</button>
        </a>
       <Link to="/productos">
       <button className="btn-productos">Ver Productos y Precios</button>
       </Link> 
      </div>
    </div>
  );
};

export default Entregas;