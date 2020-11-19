import axios from "axios";
import formatData from "../services/formatData";

const api = axios.create({
  baseURL: "https://api.github.com/",
});

const fetchUserData = async (userName) => {
  const response = await api.get(`users/${userName}`);
  return formatData.serializeUserData(response.data);
};

const fetchRepositories = async (userName) => {
  const response = await api.get(`users/${userName}/repos`);
  return formatData.serializeRepositories(response.data);
};
export default {
  fetchRepositories,
  fetchUserData,
};
