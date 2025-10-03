import React, { useState } from "react";
import { AppContext } from "./AppContext";

const AppProvider = ({ children }) => {
  let storedUser = null;
  try {
    const userData = localStorage.getItem("user");
    storedUser =
      userData && userData !== "undefined" ? JSON.parse(userData) : null;
  } catch (err) {
    storedUser = null;
  }

  const [popup, setPopup] = useState(null);
  const [user, setUser] = useState(storedUser);

  return (
    <AppContext.Provider value={{ popup, setPopup, user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
