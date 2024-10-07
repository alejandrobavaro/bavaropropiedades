import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

//------------ESTILOS--------------//
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/scss/_01-General/_BodyIndexApp.scss";
//------------HEADER--------------//
import Header from "./componentes/Header";
import { HeaderNotificationsProvider } from "./componentes/HeaderNotificacionesContext";

//-----------HOME - MAIN-----------------//
import MainContent from "./componentes/MainContent";
import MainWhatsappIcon from "./componentes/MainWhatsappIcon";
import MainPublicidadSlider from "./componentes/MainPublicidadSlider";

//--------------FOOTER----------------//
import Footer from "./componentes/Footer";

//-----------CONTACTO-----------------//
import ContactoLogoRedes from "./componentes/ContactoLogoRedes";
import ContactoFormularioSlider from "./componentes/ContactoFormularioSlider";

//--------------PROPIEDADES---------------//
import PropiedadesEnVenta from "./componentes/PropiedadesEnVenta";
import PropiedadesEnAlquiler from "./componentes/PropiedadesEnAlquiler";

//-----------LOGIN-LOGOUT-REGISTRO-----------------//
import { AuthProvider, useAuth } from "./componentes/SesionAuthContext";
import SesionRegister from "./componentes/SesionRegistrate";
import SesionLogout from "./componentes/SesionLogout";
import SesionLogin from "./componentes/SesionLogin";

//-----------OTROS--------------//
import ConsultasAyuda from "./componentes/ConsultasAyuda";
//---------------------------------------------------------//

const ProtectedRoute = ({ element }) => {
  const { state } = useAuth();
  return state.isAuthenticated ? element : <Navigate to="/login" />;
};

function App() {
  // Establece isDarkMode a true por defecto para iniciar en modo oscuro
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };



  return (
    <AuthProvider>
      <HeaderNotificationsProvider>
        <Router>
          {/* Pasa las props de modo oscuro/claro al Header */}
          <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
          <hr className="border border-0 opacity-20" />
          <div className="main-content">
            <div className="content">
              <Routes>
                <Route path="/login" element={<SesionLogin />} />
                <Route path="/register" element={<SesionRegister />} />
                <Route path="/logout" element={<SesionLogout />} />
                <Route path="/" element={<MainContent />} />

                <Route
                  path="/contacto"
                  element={
                    <ProtectedRoute
                      element={
                        <>
                          <ContactoLogoRedes />
                          <ContactoFormularioSlider />
                        </>
                      }
                    />
                  }
                />
             
                <Route
                  path="/ayuda"
                  element={<ProtectedRoute element={<ConsultasAyuda />} />}
                />

                <Route
                  path="/en-alquiler"
                  element={<ProtectedRoute element={<PropiedadesEnAlquiler />} />}
                />
             
                <Route
                  path="/en-venta"
                  element={<ProtectedRoute element={<PropiedadesEnVenta />} />}
                />
              </Routes>
            </div>
          </div>
          <hr className="border border-0 opacity-20" />
          <MainPublicidadSlider />
          <Footer />
          <MainWhatsappIcon />
        </Router>
      </HeaderNotificationsProvider>
    </AuthProvider>
  );
}

export default App;
