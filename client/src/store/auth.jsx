import React, { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [isLoading, setisLoading] = useState(true);
  const [services, setServices] = useState([]); // Renamed from `service` to `services`
  const authorizationToken = `Bearer ${token}`; 

  const storeTokenInLS = (serverToken) => {
    localStorage.setItem("token", serverToken);
    setToken(serverToken);
  };

  let isLoggedIn = !!token;
  console.log("isLoggedIn", isLoggedIn);

  const LogoutUser = () => {
    setToken("");
    localStorage.removeItem("token");
  };

  const userAuthentication = async () => {
    try {
      setisLoading(true);
      const response = await fetch("http://localhost:5000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("user data", data.userData);
        setUser(data.userData);
        setisLoading(false);
      } else {
        setisLoading(false);
      }
    } catch (error) {
      console.log("Error fetching user data", error);
    }
  };

  const getServices = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/data/service", {
        method: "GET",
      });
      if (response.ok) {
        const data = await response.json();
        console.log("Fetched services data:", data); // Log data
        setServices(data);
      } else {
        console.log("Failed to fetch services");
      }
    } catch (error) {
      console.log(`Service error: ${error}`);
    }
  };

  useEffect(() => {
    if (token) {
      userAuthentication();
    }
    getServices();
  }, [token]);

  useEffect(() => {
    console.log("Updated services state:", services);
  }, [services]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, LogoutUser, user, services, authorizationToken, isLoading, }}>
      {children}
    </AuthContext.Provider>
  );
}; 

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};
