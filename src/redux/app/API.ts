import { api } from "../_axios";

const home = () => api.get('api/v1/home');


const AppAPI = {
  home
};

export default AppAPI;
