import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../authContext/AuthContext.jsx";
function PrivateAxios() {
  const { auth } = useContext(AuthContext);
  return axios.create({
    baseURL: "http://localhost:8000/api/v1/owner",
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${auth.accessToken}`,
    },
  });
}

export default PrivateAxios;
