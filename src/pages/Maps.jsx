//React
import { useEffect, useState } from "react";
//Api
import { fetchMaps } from "../api/valo";
//Components
import MapsDetail from "../components/MapsDetail";

const Maps = () => {
  const [maps, setMaps] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetchMaps().then((response) => setMaps(response.data.data));
    setLoading(false);
  }, []);

  return loading ? (
    <div className="loading">Loading...</div>
  ) : (
    <div className="map-list">
      {maps.map((maplar, index) => (
        <MapsDetail key={index} maplar={maplar} />
      ))}
    </div>
  );
};

export default Maps;
