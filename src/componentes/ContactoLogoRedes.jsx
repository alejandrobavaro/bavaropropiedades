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
                href="mailto:bavaroalejandro@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-envelope" /> Escríbenos un mail
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
