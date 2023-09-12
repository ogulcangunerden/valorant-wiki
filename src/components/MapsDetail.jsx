import React from "react";

const MapsDetail = ({ maplar }) => {
  return (
    <div className="map-general">
      <div className="map-card">
        <h3 className="map-name">{maplar?.displayName}</h3>
        <img className="map-img" src={maplar.splash} alt="splash" />
        <img
          className="map-display"
          src={maplar.displayIcon}
          alt="display-icon"
        />
      </div>
    </div>
  );
};

export default MapsDetail;
