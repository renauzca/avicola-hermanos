import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import CardProducto from './CardProducto';
import './css/productos.css';

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [indiceActivo, setIndiceActivo] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
  });

  useEffect(() => {
    setProductos([
      { id: 1, titulo: "Pollo Fadel", descripcion: "Pollo entero, refrigerado con menudos.", precio: "X/kg" },
      { id: 2, titulo: "Pollo Soychu", descripcion: "Pollo entero, refrigerado con menudos.", precio: "X/kg" },
      { id: 3, titulo: "Pollo Ginosa", descripcion: "Pollo entero, refrigerado con menudos.", precio: "X/kg", bestSeller: true },
      { id: 4, titulo: "Pollo Bonnin", descripcion: "Pollo entero, refrigerado con menudos.", precio: "X/kg" },
      { id: 5, titulo: "Pechugas S/P S/H IQF", descripcion: "Suprema congelada entera sin hueso ni piel, jugosa y libre de grasa, lista para cualquier receta.", precio: "X/kg" },
       { id: 6, titulo: "Pechugas S/P S/H", descripcion: "Suprema fresca entera sin hueso ni piel, jugosa y libre de grasa, lista para cualquier receta.", precio: "X/kg" },
    ]);
  }, []);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setIndiceActivo(emblaApi.selectedScrollSnap());
  }, [emblaApi]);


  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.reInit();
  }, [emblaApi, productos]);

  useEffect(() => {
    if (!emblaApi) return;
    
    emblaApi.on('select', onSelect);
    onSelect();

    const manejarResize = () => {
      emblaApi.reInit();
      onSelect();
    };
    window.addEventListener('resize', manejarResize);

    return () => {
      window.removeEventListener('resize', manejarResize);
    };
  }, [emblaApi, onSelect]);

  const anterior = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const siguiente = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const irA = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  return (
    <section className="productos-destacados">
      <p className="eyebrow">Nuestra variedad</p>
      <h2 className="titulo-seccion">Productos Destacados</h2>
      <p className="subtitulo-seccion">
        Explora nuestra selección de productos avicolas
      </p>

      <div className="carrusel-wrapper">
        <button className="flecha flecha-izq" onClick={anterior}>‹</button>

        <div className="carrusel-viewport" ref={emblaRef}>
          <div className="carrusel-track">
            {productos.map((producto, index) => (
              <div
                key={producto.id}
                className={`card-slot ${index === indiceActivo ? 'card-slot-activo' : ''}`}
              >
                <CardProducto {...producto} activa={index === indiceActivo} />
              </div>
            ))}
          </div>
        </div>

        <button className="flecha flecha-der" onClick={siguiente}>›</button>
      </div>

      <div className="dots">
        {productos.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === indiceActivo ? 'dot-activo' : ''}`}
            onClick={() => irA(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Productos;