import { useEffect, useState } from "react";
import { fetchWeapons } from "../api/valo";
import WeaponDetail from "../components/WeaponDetail";

const Weapons = () => {
  const [weapons, setWeapons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchWeapons().then((response) => setWeapons(response.data.data));
    setLoading(false);
  }, []);

  return loading ? (
    <div className="loading">Loading...</div>
  ) : (
    <div className="weapon-list">
      {weapons.map((weapon, index) => (
        <WeaponDetail key={index} weapon={weapon} />
      ))}
    </div>
  );
};

export default Weapons;
