const WeaponDetail = ({ weapon }) => {
  return (
    <div className="weapon-general">
      <div className="weapon-card">
        <img
          className="weapon-img"
          src={weapon?.displayIcon}
          alt={weapon?.displayName}
        />
        <h3 className="weapon-name">{weapon?.displayName}</h3>

        <div className="weapon-detail">
          <p>Fire Rate: {weapon?.weaponStats?.fireRate}</p>
          <p>Magazine Size: {weapon?.weaponStats?.magazineSize}</p>
          <p>Reload Time: {weapon?.weaponStats?.reloadTimeSeconds} Sec</p>
        </div>
        <div className="weapon-cost">
          <p>Cost: {weapon?.shopData?.cost}</p>
        </div>
      </div>
    </div>
  );
};

export default WeaponDetail;
