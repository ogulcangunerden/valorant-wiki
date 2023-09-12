const AgentDetail = ({ agent }) => {
  return (
    <div className="agent-general">
      <div className="agent-heading">
        <h3 className="agent-name">{agent?.displayName}</h3>
        <p className="agent-description">{agent?.description}</p>
      </div>
      <img className="agent-img" src={agent?.displayIcon} alt="" />
      <div className="agent-info">
        <p className="agent-role">{agent?.role.displayName}</p>
        <div className="agent-ability">
          {agent?.abilities.map((ability, idx) => (
            <p key={idx}>{ability?.displayName}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AgentDetail;
