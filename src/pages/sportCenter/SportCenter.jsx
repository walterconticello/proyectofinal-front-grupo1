import Slider from "../../components/sliderSportCenters/SliderSportCenters";
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
