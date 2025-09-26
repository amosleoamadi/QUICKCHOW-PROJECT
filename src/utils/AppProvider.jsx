import React, { useState } from "react";
import { AppContext } from "./AppContext";

const AppProvider = ({ children }) => {
  const [popup, setPopup] = useState(false);
  return (
    <AppContext.Provider value={{ popup, setPopup }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
