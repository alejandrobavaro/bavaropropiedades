import React from "react";
import "../assets/scss/_03-Componentes/_MainContent.scss";

function MainContent() {
  return (
    <main className="mainContent ">
      <div className="gridPadre"></div>

      <div className="gridItem">
        {/* Eliminar GastosPorPagar si no se necesita */}
        {/* <GastosPorPagar /> */}
      </div>
    </main>
  );
}

export default MainContent;
