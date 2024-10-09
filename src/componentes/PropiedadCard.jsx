// src/componentes/PropiedadCard.jsx

import React from "react";
import { BsWhatsapp, BsFacebook, BsInstagram, BsEnvelope } from "react-icons/bs";
import "../assets/scss/_03-Componentes/_PropiedadCard.scss";

const PropiedadCard = ({
  item,
  currentImageIndex,
  handleNextImage,
  handlePrevImage,
  shareOnWhatsApp,
  shareOnFacebook,
  shareOnInstagram,
  shareOnEmail,
}) => {
  // Verifica si hay fotos disponibles
  const tieneFotos = item["Ver Fotos Propiedad"] && item["Ver Fotos Propiedad"].length > 0;

  return (
    <div className="data-item">
      <h3 className="titulo-propiedad">{item.Nombre}</h3>

      {/* Carousel de imágenes */}
      <div className="image-thumbnails-en-alquiler">
        {tieneFotos && (
          <div className="carousel">
            <button
              onClick={() => handlePrevImage(item.id)}
              disabled={currentImageIndex[item.id] === 0} // Desactiva el botón si está en la primera imagen
            >
              &#9664;
            </button>
            <img
              src={item["Ver Fotos Propiedad"][currentImageIndex[item.id]]}
              alt={`Foto de ${item.Nombre} ${currentImageIndex[item.id] + 1}`}
              className="thumbnail"
            />
            <button
              onClick={() => handleNextImage(item.id, item["Ver Fotos Propiedad"].length)}
              disabled={currentImageIndex[item.id] === item["Ver Fotos Propiedad"].length - 1} // Desactiva el botón si está en la última imagen
            >
              &#9654;
            </button>
          </div>
        )}
      </div>

      {/* Botones para compartir en redes sociales */}
      <div className="share-buttons">
        <button onClick={() => shareOnWhatsApp(item)}>
          <BsWhatsapp />
        </button>
        <button onClick={() => shareOnFacebook(item)}>
          <BsFacebook />
        </button>
        <button onClick={() => shareOnInstagram(item)}>
          <BsInstagram />
        </button>
        <button onClick={() => shareOnEmail(item)}>
          <BsEnvelope />
        </button>
      </div>

      <table>
        <tbody>
          <tr>
            <td><strong>Categoria:</strong></td>
            <td>{item.Categoria}</td>
          </tr>
          <tr>
            <td><strong>Tipo:</strong></td>
            <td>{item.Tipo}</td>
          </tr>
          {/* <tr>
            <td><strong>Titular:</strong></td>
            <td>{item.Titular}</td>
          </tr> */}
          <tr>
            <td><strong>Alquilado:</strong></td>
            <td>{item.Alquilado}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PropiedadCard;
