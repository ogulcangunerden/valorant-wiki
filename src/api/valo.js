import axios from "axios";

export const fetchAgents = () => {
  return axios.get(
    "https://valorant-api.com/v1/agents?isPlayableCharacter=true"
  );
};

export const fetchMaps = () => {
  return axios.get("https://valorant-api.com/v1/maps");
};

export const fetchWeapons = () => {
  return axios.get("https://valorant-api.com/v1/weapons");
};
