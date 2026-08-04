import "./css/cardProducto.css";

const CardProducto = (producto) => {
  return (
    <div className="containerCard">
      <div className="card-image-wrapper">
        <div className="card-image"><img src={producto.img} alt="" /></div>
      </div>
      <div className="card-info">
        <div>
          <h3 className="card-title">{producto.titulo}</h3>
        </div>
        <div>
          <p className="card-description">{producto.descripcion} </p>
        </div>
      </div>

      <div className="card-extra-info">
        <h4 className="extra-titulo">{producto.titulo}</h4>
        {/* <div className="extra-item">
          <span className="extra-label">Origen</span>
          <span className="extra-valor">{producto.origen}</span>
        </div> */}
        <div className="extra-item">
          <span className="extra-label">Peso:</span>
          <span className="extra-valor">{producto.peso}</span>
        </div>
        <div className="extra-item">
          <span className="extra-label">Calibres:</span>
          <span className="extra-valor">{producto.tamano}</span>
        </div>
      </div>
    </div>
  );
};

export default CardProducto;
