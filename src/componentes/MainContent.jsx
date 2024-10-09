import React from "react";
import Slider from "react-slick"; // Importar el carrusel
import "../assets/scss/_03-Componentes/_MainContent.scss";
import MainWhatsappIcon from "./MainWhatsappIcon"; 

const MainContent = () => {
  const images = [
    { src: "../../img/05-img-costados-larga/0a.png", alt: "Publicidad 1" },
    { src: "../../img/05-img-costados-larga/2.png", alt: "Publicidad 2" },
    { src: "../../img/05-img-costados-larga/20.png", alt: "Publicidad 3" },
  ];

  const properties = [
    {
      src: "../../public/fotos-propiedades/ejemplo1.jpg",
      title: "Casa Moderna en Zona Exclusiva",
      description: "Amplia casa de 4 dormitorios con jardín privado.",
      price: "$350,000",
    },
    {
      src: "../../public/fotos-propiedades/ejemplo2.jpg",
      title: "Apartamento con Vista al Mar",
      description: "Increíble apartamento con balcón frente al mar.",
      price: "$450,000",
    },
    {
      src: "../../public/fotos-propiedades/ejemplo3.jpg",
      title: "Loft Urbano en el Centro",
      description: "Estilo moderno en el corazón de la ciudad.",
      price: "$250,000",
    },
    {
      src: "../../public/fotos-propiedades/ejemplo4.jpg",
      title: "Villa de Lujo en la Costa",
      description: "Villa exclusiva con piscina privada y jardín tropical.",
      price: "$1,200,000",
    },
    // Puedes agregar más propiedades aquí
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

  const propertyCarouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <main className="mainContent">
      {/* Carrusel de Publicidad */}
      <div className="carrusel-container">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="carrusel-slide">
              <img src={image.src} alt={image.alt} className="carrusel-image" />
            </div>
          ))}
        </Slider>
        <div className="logo-container">
          <img src="../../img/02-logos/logobavaropropiedades1.png" alt="Logo" className="logo" />
        </div>
      </div>

      {/* Servicios Inmobiliarios */}
      <section className="services" id="services">
        <h2>Nuestros Servicios</h2>
        <div className="service-list">
          <div className="service-item">
            <img src="../../img/servicios/asesoria.jpg" alt="Asesoría" className="service-image" />
            <h3>Asesoría en Compras: Decisiones Inteligentes en un Contexto Volátil</h3>
            <p>
              Comprar una propiedad en Argentina en 2024 es un desafío, y por eso estamos aquí para acompañarte en cada paso. Con un mercado influenciado por la fluctuación del dólar y cambios en las políticas económicas, nuestra asesoría va más allá del simple acompañamiento: te brindamos análisis personalizados del contexto macroeconómico, ayudándote a entender el valor real de tu inversión. 
            </p>
            <button className="cta-button">Consultar Ahora</button>
          </div>
          <div className="service-item">
            <img src="../../img/servicios/administracion.jpg" alt="Administración" className="service-image" />
            <h3>Administración de Propiedades: Mantén el Valor de tus Bienes</h3>
            <p>
              Administrar una propiedad puede ser un desafío, especialmente en un entorno donde la inflación y los impuestos locales cambian rápidamente. En Bavaro Propiedades, no solo gestionamos tu inmueble, también te ofrecemos estrategias fiscales y optimización de rentabilidad.
            </p>
            <button className="cta-button">Más Información</button>
          </div>
          <div className="service-item">
            <img src="../../img/servicios/ventas-rapidas.jpg" alt="Ventas" className="service-image" />
            <h3>Ventas Rápidas: Cómo Maximizar el Valor de tu Propiedad</h3>
            <p>
              En un mercado inmobiliario tan dinámico como el argentino, vender rápido no siempre significa vender barato. Con nuestro equipo, te ofrecemos un análisis comparativo de mercado (CMA) que estudia en profundidad la demanda actual, asegurando que tu propiedad sea vendida al mejor precio posible.
            </p>
            <button className="cta-button">Vender Mi Propiedad</button>
          </div>
          <div className="service-item">
            <img src="../../img/servicios/inversiones.jpg" alt="Inversiones" className="service-image" />
            <h3>Inversiones Seguras: Protege tu Dinero en Tiempos de Incertidumbre</h3>
            <p>
              La compra de inmuebles sigue siendo una de las mejores formas de resguardar el capital en Argentina, sobre todo en un contexto inflacionario y de constante devaluación del peso. Te asesoramos para encontrar propiedades con alta potencialidad de revalorización.
            </p>
            <button className="cta-button">Explora Inversiones</button>
          </div>
        </div>
      </section>

      {/* Propiedades Destacadas con Carrusel */}
      <section className="featured-properties" id="properties">
        <h2>Propiedades Destacadas</h2>
        <Slider {...propertyCarouselSettings}>
          {properties.map((property, index) => (
            <div key={index} className="property-card">
              <img src={property.src} alt={property.title} className="property-image" />
              <h3>{property.title}</h3>
              <p>{property.description}</p>
              <p className="price">Precio: {property.price}</p>
              <button className="cta-button">Ver Detalles</button>
            </div>
          ))}
        </Slider>
      </section>

      {/* Blog Inmobiliario */}
      <section className="blog">
        <h2>Últimas Noticias</h2>
        <div className="blog-grid">
          <article className="blog-post">
            <img src="../../img/blog/inversiones.jpg" alt="Invertir en 2024" className="blog-image" />
            <h3>Invertir en Propiedades en 2024: Consejos para Navegar la Economía Argentina</h3>
            <p>
              El mercado inmobiliario argentino sigue siendo uno de los más atractivos para inversores locales e internacionales, pero la inestabilidad económica plantea desafíos. En 2024, con un dólar en constante ascenso y políticas económicas fluctuantes, ¿cómo puede un inversor resguardar su capital y obtener ganancias a largo plazo?
            </p>
            <button className="cta-button">Leer Más</button>
          </article>
          <article className="blog-post">
            <img src="../../img/blog/venta.jpg" alt="Preparar tu propiedad" className="blog-image" />
            <h3>¿Cómo Preparar tu Propiedad para la Venta en un Mercado Competitivo?</h3>
            <p>
              Si estás pensando en vender tu propiedad, es crucial que tomes las medidas necesarias para maximizar su valor. La preparación adecuada puede marcar la diferencia entre una venta rápida y una propiedad que permanece en el mercado por meses.
            </p>
            <button className="cta-button">Leer Más</button>
          </article>
        </div>
      </section>

      {/* Formulario de Suscripción */}
      <section className="subscription-form">
        <h2>Suscríbete a Nuestras Novedades</h2>
        <form>
          <input type="email" placeholder="Ingresa tu correo" required />
          <button type="submit">Suscribirse</button>
        </form>
      </section>

      {/* Testimonios de Clientes */}
      <section className="testimonials">
        <h2>Lo Que Dicen Nuestros Clientes</h2>
        <div className="testimonial-container">
          <blockquote className="testimonial">
            <p>
              "Gracias a Bavaro Propiedades, logramos vender nuestra propiedad en tiempo récord y al mejor precio. Su asesoría fue clave para entender el mercado en un momento tan complejo."
            </p>
            <footer>- Martín Gómez, Cliente Satisfecho</footer>
          </blockquote>

          <blockquote className="testimonial">
            <p>
              "La mejor experiencia inmobiliaria que hemos tenido. Bavaro Propiedades realmente se enfocó en encontrar la casa ideal para nuestra familia, y lo lograron."
            </p>
            <footer>- Ana Rodríguez, Compradora</footer>
          </blockquote>

          <blockquote className="testimonial">
            <p>
              "El equipo de Bavaro Propiedades fue increíble. Nos ayudaron en cada etapa del proceso de compra y venta, desde la evaluación inicial hasta la firma final del contrato."
            </p>
            <footer>- Carlos Méndez, Vendedor y Comprador</footer>
          </blockquote>

          <blockquote className="testimonial">
            <p>
              "Encontré la inversión perfecta para mi negocio, y todo gracias a los expertos de Bavaro Propiedades. Su conocimiento del mercado es invaluable."
            </p>
            <footer>- Laura Fernández, Inversora</footer>
          </blockquote>

          <blockquote className="testimonial">
            <p>
              "Bavaro Propiedades hizo que el proceso de alquilar mi apartamento fuera tan sencillo que apenas tuve que mover un dedo. La gestión fue rápida y eficiente."
            </p>
            <footer>- Julio Martínez, Propietario</footer>
          </blockquote>

          <blockquote className="testimonial">
            <p>
              "No podría estar más feliz con el servicio que recibí. Desde el principio, Bavaro Propiedades demostró ser una empresa confiable y profesional. ¡Los recomiendo al 100%!"
            </p>
            <footer>- Gabriela López, Cliente Satisfecha</footer>
          </blockquote>
        </div>
      </section>

      {/* Botón de Contacto con un Agente */}
      <div className="botonContactaAgente">
      <button className="cta-button">
        <img
          src="../../img/agente-ejemplo.jpg" // Aquí va la imagen del agente, reemplazable
          alt="Agente"
          className="agent-image"
        />
        <MainWhatsappIcon /> {/* Ícono de WhatsApp */}
        ¡Contacta a un Agente!
      </button>
      </div>
    </main>
  );
};

export default MainContent;
