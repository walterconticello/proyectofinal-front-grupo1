import Lottie from "lottie-web";
import { Link } from "react-router-dom";
import animationData from "../../assets/lottieFiles/lottieAnimation404.json";
import { useEffect } from "react";
import "./error404.css";
const Error404 = () => {
  useEffect(() => {
    const container = document.getElementById("lottie-container");
    const animation = Lottie.loadAnimation({
      container,
      animationData,
      loop: true,
      autoplay: true,
    });

    return () => {
      animation.destroy();
    };
  }, []);
  return (
    <div className="not-found-page">
      <div id="lottie-container" className="lottie-container"></div>
      <h1>Página no encontrada</h1>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
      <Link to="/" className="goback-button">
        Volver al inicio
      </Link>
    </div>
  );
};

export default Error404;
