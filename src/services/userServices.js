import axios from "axios";

const getAllUserService = async () => {
  return await axios.get(`/api/users`);
};
export { getAllUserService };
