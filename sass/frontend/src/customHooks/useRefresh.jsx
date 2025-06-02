import { useContext } from "react";
import { AuthContext } from "../authContext/AuthContext";
import axios from "axios";
function useRefresh() {
  const { setAuth, persist } = useContext(AuthContext);
  return async function refresh() {
    try {
      const res = await axios.get(
        "http://localhost:8000/api/v1/owner/refresh",
        { withCredentials: true }
      );

      if (res?.data?.status === 1) {
        if (!persist) {
          console.log("persist", persist);
          return;
        }
        setAuth((prev) => {
          return {
            ...prev,
            accessToken: res?.data?.accessToken,
            user: res?.data?.data,
          };
        });

        return res?.data?.accessToken;
      }
    } catch (error) {
      console.error("Error refreshing token:", error);
      setAuth((prev) => {
        return {
          ...prev,
          accessToken: null,
        };
      });
      return null;
    }
  };
}

export default useRefresh;
