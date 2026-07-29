import './css/pedidos.css'


const Pedidos = () => {
  const pasos = [
    {
      numero: 1,
      titulo: "Explorá nuestros productos",
      descripcion:
        "Navegá por nuestra web y seleccioná los productos que más te gusten. ¡Tenemos variedad y calidad!",
      icono: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3 9L4 4H20L21 9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 9V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 9H21"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle
            cx="15.5"
            cy="14.5"
            r="3"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M14 14.5L15 15.5L17 13.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      numero: 2,
      titulo: "Verificá tu zona",
      descripcion:
        "Consultá nuestro mapa de cobertura para confirmar que llegamos a tu barrio en CABA y GBA.",
      icono: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 2C7.58172 2 4 5.58172 4 10C4 15 12 22 12 22C12 22 20 15 20 10C20 5.58172 16.4183 2 12 2Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <circle
            cx="12"
            cy="10"
            r="4"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M9 10H10.5L11.5 8.5L12.5 11.5L13.5 10H15"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      numero: 3,
      titulo: "Hacé tu pedido por WhatsApp",
      descripcion:
        "Hacé clic en el botón, chateá con nuestro bot y completá tu pedido en cuestión de minutos.",
      icono: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 2C6.47715 2 2 6.47715 2 12C2 13.8214 2.48697 15.5291 3.33782 17L2 22L7.12963 20.6942C8.55927 21.5219 10.2237 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M8.5 9C8.5 9 9 12 12 12C15 12 15.5 9 15.5 9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="containerComoPedir">
      <h2 className="como-titulo">¿Cómo hacer tu pedido?</h2>
      <p className="como-subtitulo">
        Seguí estos simples pasos para recibir tus productos favoritos en la
        puerta de tu casa:
      </p>

      <div className="pasos-grid">
        {pasos.map((paso) => (
          <div className="paso-card" key={paso.numero}>
            <div className="paso-icono">{paso.icono}</div>
            <h3 className="paso-titulo">
              {paso.numero}. {paso.titulo}
            </h3>
            <p className="paso-descripcion">{paso.descripcion}</p>
          </div>
        ))}
      </div>
  <a href="http://wa.me/5491140373225">
      <button className="btn-whatsapp-cta">
        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
          <path d="M12 2C6.47715 2 2 6.47715 2 12C2 13.8214 2.48697 15.5291 3.33782 17L2 22L7.12963 20.6942C8.55927 21.5219 10.2237 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" />
        </svg>
        Iniciar Pedido por WhatsApp
      </button></a>
    </section>
  );
};

export default Pedidos;
