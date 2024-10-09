import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./SesionAuthContext";
import HeaderDolarApi from "./HeaderDolarApi";
import HeaderNotificaciones from "./HeaderNotificaciones";
import { useHeaderNotifications } from "./HeaderNotificacionesContext";
import { BsFillPersonPlusFill, BsBoxArrowRight, BsList, BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from 'react-icons/ai'; // Importa el icono de correo
import { Navbar, Nav, Container } from "react-bootstrap";
import "../assets/scss/_03-Componentes/_Header.scss";

const Header = ({ isDarkMode, toggleDarkMode }) => {
  const { state, dispatch } = useAuth();
  const { notifications } = useHeaderNotifications();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeLink, setActiveLink] = useState(null); // Para gestionar el botón seleccionado

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleToggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    setIsMobileMenuOpen(false); // Cierra el menú móvil después de hacer clic
  };

  const getFormattedDate = () => {
    const today = new Date();
    const options = {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    const formattedDate = today.toLocaleDateString("es-ES", options);
    const [weekday, dayMonthYear] = formattedDate.split(", ");
    return { weekday, dayMonthYear };
  };

  const { weekday, dayMonthYear } = getFormattedDate();

  return (
    <header className="header">
      <Navbar expand="lg" className="navbar">
        <Container>
          <Nav.Item>
            <HeaderDolarApi />
          </Nav.Item>

          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <BsList className="menu-icon" onClick={handleToggleMobileMenu} />
          </Navbar.Toggle>
          <Navbar.Collapse
            id="basic-navbar-nav"
            className={`${isMobileMenuOpen ? "show" : ""}`}
          >
            <Nav className="mr-auto">
              <Nav.Link
                className={`nav-link home-link ${activeLink === "home" ? "active" : ""}`}
                as={Link}
                to="/"
                onClick={() => handleLinkClick("home")}
              >
                HOME
              </Nav.Link>

              <Nav.Item className="notifications-item">
                <Link to="/calendario-pagos">
                  <HeaderNotificaciones reminderCount={notifications.today} />
                </Link>
              </Nav.Item>

          


              <Nav.Link
                className={`nav-link ${activeLink === "alquiler" ? "active" : ""}`}
                as={Link}
                to="/en-alquiler"
                onClick={() => handleLinkClick("alquiler")}
              >
                ALQUILER
              </Nav.Link>

              <Navbar.Brand as={Link} to="/" className="logo-container">
                <img
                  src="/img/02-logos/logobavaropropiedades3.png"
                  alt="Logo"
                  className="logoHeader"
                />
              </Navbar.Brand>

          

              <Nav.Link
                className={`nav-link ${activeLink === "venta" ? "active" : ""}`}
                as={Link}
                to="/en-venta"
                onClick={() => handleLinkClick("venta")}
              >
                VENTA
              </Nav.Link>

              <Nav.Link
  className={`nav-link contacto-link ${activeLink === "contacto" ? "active" : ""}`}
  as={Link}
  to="/contacto"
  onClick={() => handleLinkClick("contacto")}
>
  <AiOutlineMail className="icon-contact" /> {/* Aplica una clase personalizada */}
</Nav.Link>


              <Nav.Link
                className={`nav-link ${activeLink === "consultas" ? "active" : ""}`}
                as={Link}
                to="/ayuda"
                onClick={() => handleLinkClick("consultas")}
              >
                CONSULTAS
              </Nav.Link>

              

              <Nav.Item className="auth-buttons-container">
                {state.isAuthenticated ? (
                  <div className="auth-welcome-container">
                    <div className="auth-welcome">
                      <span>Hola,</span>
                      <span>{state.user.email.split("@")[0]}</span>
                    </div>
                    <Link
                      className="nav-linkHeader auth-link logout-link"
                      to="/logout"
                      onClick={() => {
                        dispatch({ type: "LOGOUT" });
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      <BsBoxArrowRight className="auth-icon" />
                    </Link>
                  </div>
                ) : (
                  <>
                    <Link className="nav-linkHeader auth-link" to="/login">
                      <BsFillPersonPlusFill className="auth-icon" />
                    </Link>
                    <hr className="auth-divider" />
                    <Link className="nav-linkHeader auth-link" to="/register">
                      Regístrate
                    </Link>
                  </>
                )}
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
