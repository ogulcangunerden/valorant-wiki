//React
import { useEffect, useState } from "react";

//Api
import { fetchAgents } from "../api/valo";

//Components
import AgentDetail from "../components/AgentDetail";

const Agents = () => {
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetchAgents().then((response) => setAgents(response.data.data));
    setLoading(false);
  }, []);

  return loading ? (
    <div className="loading">Loading...</div>
  ) : (
    <div className="agent-list">
      {agents.map((agent, index) => (
        <p key={index}>
          <AgentDetail agent={agent} />
        </p>
      ))}
    </div>
  );
};

export default Agents;
