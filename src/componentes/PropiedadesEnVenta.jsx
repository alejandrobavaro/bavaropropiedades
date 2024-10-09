// src/componentes/PropiedadesEnVenta.jsx

import React, { useState, useEffect } from "react";
import "../assets/scss/_03-Componentes/_PropiedadesEnVenta.scss";
import PropiedadCard from "./PropiedadCard";

const PropiedadesEnVenta = () => {
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("TODOS");
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  useEffect(() => {
    fetch("/infoventas.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        const initialIndexes = {};
        data.forEach((item) => {
          initialIndexes[item.id] = 0;
        });
        setCurrentImageIndex(initialIndexes);
      })
      .catch((error) => console.error("Error al cargar los datos:", error));
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredData = data.filter((item) => {
    return (
      selectedCategory === "TODOS" || item.Categoria === selectedCategory
    );
  });

  const handleNextImage = (id, totalImages) => {
    setCurrentImageIndex((prevState) => ({
      ...prevState,
      [id]: (prevState[id] + 1) % totalImages,
    }));
  };

  const handlePrevImage = (id, totalImages) => {
    setCurrentImageIndex((prevState) => ({
      ...prevState,
      [id]: (prevState[id] - 1 + totalImages) % totalImages,
    }));
  };

  const shareOnWhatsApp = (item) => {
    const message = `Mirá esta propiedad: ${item.Nombre}.\nDescripción: ${item.Tipo}\nValor alquiler: ${item.Alquilado}`;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const shareOnFacebook = (item) => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
    window.open(facebookUrl, "_blank");
  };

  const shareOnInstagram = (item) => {
    const message = `Mirá esta propiedad: ${item.Nombre}.`;
    const instagramUrl = `https://www.instagram.com/?url=${encodeURIComponent(message)}`;
    window.open(instagramUrl, "_blank");
  };

  const shareOnEmail = (item) => {
    const subject = `Interesado en la propiedad: ${item.Nombre}`;
    const body = `Mirá esta propiedad: ${item.Nombre}.\nDescripción: ${item.Tipo}\nValor alquiler: ${item.Alquilado}`;
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="propiedades-en-venta">
      <div className="filter-buttons-venta">
        <button
          className={selectedCategory === "TODOS" ? "selected" : ""}
          onClick={() => handleCategoryChange("TODOS")}
        >
          TODOS
        </button>
        <button
          className={selectedCategory === "Categoria" ? "selected" : ""}
          onClick={() => handleCategoryChange("Categoria")}
        >
          Categoria
        </button>
        <button
          className={selectedCategory === "Tipo" ? "selected" : ""}
          onClick={() => handleCategoryChange("Tipo")}
        >
          Tipo
        </button>
      </div>

      {filteredData.length === 0 ? (
        <h4>No se encontraron datos en la búsqueda. Verifique su selección.</h4>
      ) : (
        <div className="propiedades-lista-venta">
          {filteredData.map((item) => (
            <PropiedadCard
              key={item.id}
              item={item}
              currentImageIndex={currentImageIndex}
              handleNextImage={handleNextImage}
              handlePrevImage={handlePrevImage}
              shareOnWhatsApp={shareOnWhatsApp}
              shareOnFacebook={shareOnFacebook}
              shareOnInstagram={shareOnInstagram}
              shareOnEmail={shareOnEmail}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default PropiedadesEnVenta;
