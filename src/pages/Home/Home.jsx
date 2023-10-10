import "./home.css";
import messiImg from "../../assets/Frame_2.png";
import { Button, Card } from "react-bootstrap";
import { CenterContext } from "../../context/CenterContext";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdLocationPin, MdPhone } from "react-icons/md";
const Home = () => {
  const { complexs } = useContext(CenterContext);
  const [randomComplexs, setRandomComplexs] = useState([]);

  useEffect(() => {
    if (randomComplexs.length === 0) {
      const getRandomComplexs = () => {
        const shuffledComplexs = complexs.sort(() => 0.5 - Math.random());
        const selectedComplexs = shuffledComplexs.slice(0, 4); // Cambio a 3 complejos
        return selectedComplexs;
      };

      setRandomComplexs(getRandomComplexs());
    }
  }, [complexs, randomComplexs.length]);

  return (
    <>
      {/* Hero Section */}
      <div className="heroContainer mt-1 mb-1">
        <div className="flex flex-col sm:flex-row justify-content-around items-center p-5 gap-3">
          <p className="headerText text-lime-500 text-5xl md:text-6xl lg:text-7xl">
            RESERVA <br /> <span className="font-bold">TU CANCHA</span>
          </p>
          <Link to="/complejos">
            <button className="bg-lime-500 hover:bg-white h-10 rounded-md px-5 py-4 text-sm hover:text-lime-500 font-bold w-60 transition text-gray-50 heroButton">
              <span className="flex items-center justify-center h-full">
                RESERVA HOY!
              </span>
            </button>
          </Link>
        </div>
      </div>

      {/* SearchSection */}
      <div className="searchContainer mt-1 mb-1 p-2">
        <div className="complexCards container mx-auto p-3 ">
          <div className="d-flex flex-nowrap overflow-auto cards-container gap-4 ">
            {randomComplexs.map((complex) => (
              <Card key={complex._id} className="sportcenter-card col-12">
                <Card.Img variant="top" src={complex.photo.url} />
                <Card.Body>
                  <Card.Title>{complex.name}</Card.Title> <hr />
                  <Card.Text>
                    <div className="d-flex mx-1">
                      <MdLocationPin size={25} /> {complex.address}
                    </div>
                    <br />
                    <div className="d-flex mx-1">
                      <MdPhone size={25} /> {complex.phone}
                    </div>
                  </Card.Text>
                  <Link to={`/complejos/${complex._id}`}>
                    <Button className="reserve-button" variant="primary">
                      Ver Complejo
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Messi Section */}
      <div className="messiContainer container mx-auto px-4 md:flex justify-around items-center py-10 overflow-x-hidden">
        <div className="w-full md:w-3/4 lg:w-3/4 mb-6 md:mb-0 flex items-center justify-center">
          <img src={messiImg} alt="Messi" className="w-full" />
        </div>

        <div className="flex flex-col justify-center items-center w-full md:w-3/5">
          <p className="headerText text-lime-500 text-5xl md:text-6xl lg:text-7xl text-center md:text-left mb-4 md:mb-6">
            INDUMENTARIA <br /> <span className="font-bold">DEPORTIVA</span>
          </p>
          <Link to="/store">
            <button className="bg-lime-500 hover:bg-white h-10 rounded-md px-5 py-4 text-sm hover:text-lime-500 font-bold w-60 transition text-gray-50 heroButton">
              <span className="flex items-center justify-center h-full">
                Ver tienda
              </span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
