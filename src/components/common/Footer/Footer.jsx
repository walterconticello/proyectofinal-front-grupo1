import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import logoApp from "../../../assets/logo-canchas.png";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container-fluid footerContainer p-3">
      <div className="row p-4">
        <div className="footerLogoContainer col-lg-4 d-flex flex-column align-items-center justify-content-center p-3">
          <img src={logoApp} alt="logoReservaGol" className="logoFooter mb-4" />
          <div className="d-flex gap-4 align-items-center justify-content-center text-gray-200">
            <FaFacebook size={38} className="socialIcon" />
            <FaTwitter size={38} className="socialIcon" />
            <FaInstagram size={38} className="socialIcon" />
          </div>
        </div>
        <div className="footerMenuContainer col-lg-8 align-items-center justify-content-center mt-4">
          <div className="row gap-3 footer2 align-items-center mt-1">
            <div className="col-xs-1 col-lg-3 col-md-2 text-center">
              <h3 className="text-white footerText mb-3">
                Politicas y Privacidad
              </h3>
              <div className="text-gray-300 mb-2 itemFooter">
                <Link className="text-white" to="/*">
                  Terminos de uso
                </Link>
              </div>
              <div className="text-gray-300 mb-2 itemFooter">
                <Link className="text-white" to="/*">
                  Politicas de privacidad
                </Link>
              </div>
              <div className="text-gray-300 mb-2 itemFooter">
                <Link className="text-white" to="/nosotros">
                  Acerca de nosotros
                </Link>
              </div>
            </div>
            <div className="col-xs-1 col-lg-3 col-md-2 text-center">
              <h3 className="text-white footerText mb-3">Soporte Técnico</h3>
              <div className="text-gray-300 mb-2 itemFooter">
                <Link className="text-white" to="/contacto">
                  Contacto
                </Link>
              </div>
              <div className="text-gray-300 mb-2 itemFooter">
                <Link className="text-white" to="/*">
                  Preguntas frecuentes
                </Link>
              </div>
              <div className="text-gray-300 mb-2 itemFooter">
                <Link className="text-white" to="/*">
                  Disponibilidad de zonas
                </Link>
              </div>
            </div>
            <div className="col-xs-1 col-lg-3 col-md-2 text-center">
              <h3 className="text-white footerText mb-3">Legales</h3>
              <div className="text-gray-300 mb-2 itemFooter">
                <Link className="text-white" to="/*">
                  Terminos de Uso
                </Link>
              </div>
              <div className="text-gray-300 mb-2 itemFooter">
                <Link className="text-white" to="/*">
                  Politicas de Privacidad
                </Link>
              </div>
              <div className="text-gray-300 mb-2 itemFooter">
                <Link className="text-white" to="/*">
                  Información Legal
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
