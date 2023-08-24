import React from "react";

const GoogleMapComponent = () => {
  return (
    <div className="w-100">
      <iframe
        title="Embedded Google Map"
        width="100%"
        height="600"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=General%20paz%20576+(Gol%20de%20reserva)&amp;t=p&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default GoogleMapComponent;
