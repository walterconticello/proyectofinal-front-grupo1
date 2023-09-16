import Slider from "../../components/Slider/Slider.jsx";
import SportCenterCards from "../../components/SportCenterCards/SportCenterCards.jsx";

const SportCenter = () => {
  return (
    <>
      <div className="container">
        <Slider />
        <SportCenterCards />
      </div>
    </>
  );
};

export default SportCenter;
