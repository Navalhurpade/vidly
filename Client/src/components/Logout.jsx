import { logout } from "../services/authService";

const Logout = () => {
  logout();
  window.location = "/";
};

export default Logout;
