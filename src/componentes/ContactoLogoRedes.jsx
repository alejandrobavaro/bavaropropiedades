import React from "react";
import "../assets/scss/_03-Componentes/_ContactoLogoRedes.scss";

const ContactoLogoRedes = () => {
  return (
    <div className="contact-logo-redes-wrapper">
      <div className="gridPadreContacto1">
        <div className="contact-logo-rede-container">
          <div className="logo-column">
            <a href="#">
              <img
                alt="icono"
                className="logo-img logo-main"
                src="/img/02-logos/logobavaropropiedades3.png"
              />
            </a>

            <div className="logo-secondary-container">
              <a href="#">
                <img
                  alt="icono"
                  className="logo-img logo-secondary"
                  src="/img/05-img-costados-larga/3.png"
                />
              </a>

              <a href="#">
                <img
                  alt="icono"
                  className="logo-img logo-secondary"
                  src="/img/05-img-costados-larga/4.png"
                />
              </a>
            </div>
          </div>

          <div className="contact-icons">
            <div className="contact-item">
              <a
                href="https://www.facebook.com/alegondramusic"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-facebook" /> Facebook
              </a>
            </div>
            <div className="contact-item">
              <a
                href="https://www.instagram.com/alegondramusic/?hl=es"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-instagram" /> Instagram
              </a>
            </div>
            <div className="contact-item">
              <a
                href="https://www.youtube.com/channel/UCBhJkysp3SnHU1tR3qAA5pQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-youtube" /> YouTube
              </a>
            </div>
            <div className="contact-item">
              <a
                href="https://open.spotify.com/artist/7qo7PxAcvyyyZb6XztH7zE"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-spotify" /> Spotify
              </a>
            </div>
            <div className="contact-item">
              <a
                href="mailto:bavaroalejandro@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-envelope" /> Escríbenos un mail
              </a>
            </div>
            <div className="contact-item">
              <a
                href="https://www.paypal.com/paypalme/alegondramusic?country.x=AR&locale.x=es_XC"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-paypal" /> Colaborá con nosotros
              </a>
            </div>
            <div className="contact-item">
              <a
                href="https://www.youtube.com/watch?v=c6fE_Y4ol98"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-play-circle" /> Ver videos
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr className="transparent-hr" />
    </div>
  );
};

export default ContactoLogoRedes;
