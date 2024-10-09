import React from "react";
import Slider from "react-slick"; // Importar el carrusel
import "../assets/scss/_03-Componentes/_MainContent.scss";

const MainContent = () => {
  const images = [
    { src: "../../public/img/05-img-costados-larga/0a.png", alt: "Publicidad 1" },
    { src: "../../public/img/05-img-costados-larga/2.png", alt: "Publicidad 2" },
    { src: "../../public/img/05-img-costados-larga/20.png", alt: "Publicidad 3" },
    // Agrega más imágenes según sea necesario
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <main className="mainContent">


      <div className="carrusel-container">
     
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="carrusel-slide">
              <img src={image.src} alt={image.alt} className="carrusel-image" />
            </div>
          ))}
        </Slider>
        <div className="logo-container">
          <img src="../../public/img/02-logos/logobavaropropiedades1.png" alt="Logo" className="logo" />
        </div>
      </div>

      <section className="services" id="services">
        <h2>Nuestros Servicios</h2>
        <div className="service-list">
          <div className="service-item">
            <h3>Asesoría en Compras</h3>
            <p>Te acompañamos en cada paso del proceso de compra.</p>
          </div>
          <div className="service-item">
            <h3>Administración de Propiedades</h3>
            <p>Nos encargamos de la gestión de tus propiedades.</p>
          </div>
          <div className="service-item">
            <h3>Ventas Rápidas</h3>
            <p>Te ayudamos a vender tu propiedad de forma eficiente.</p>
          </div>
                
        <button className="cta-button">¡Contacta a un Agente!</button>
     
        </div>
      </section>

      <section className="featured-properties" id="properties">
        <h2>Propiedades Destacadas</h2>
        <div className="property-grid">
          <div className="property-card">
            <img src="../../public/fotos-propiedades/ejemplo1.jpg" alt="Propiedad 1" />
            <h3>Título de la Propiedad 1</h3>
            <p>Descripción breve de la propiedad.</p>
            <p className="price">Precio: $XXX,XXX</p>
            <button className="cta-button">Ver Detalles</button>
          </div>
          {/* Repite para más propiedades */}
        </div>
      </section>

      <section className="blog">
        <h2>Últimas Noticias</h2>
        <article>
          <h3>Consejos para Vender Tu Propiedad Rápido</h3>
          <p>Explora nuestras recomendaciones para hacer más atractivo tu anuncio.</p>
          <a href="#more" className="read-more">Leer Más</a>
        </article>
        {/* Agrega más artículos */}
      </section>

      <section className="subscription-form">
        <h2>Suscríbete a Nuestras Novedades</h2>
        <form>
          <input type="email" placeholder="Ingresa tu correo" required />
          <button type="submit">Suscribirse</button>
        </form>
      </section>

      <section className="testimonials">
        <h2>Lo Que Dicen Nuestros Clientes</h2>
        <blockquote>
          <p>"Gracias a [Nombre de la inmobiliaria], encontré mi hogar ideal. ¡Recomiendo sus servicios!"</p>
          <footer>- Cliente Satisfecho</footer>
        </blockquote>
        {/* Agrega más testimonios */}
      </section>

   
      <div className="gridItem">
        {/* Aquí van otros elementos del grid */}
      </div>
    </main>
  );
};

export default MainContent;
