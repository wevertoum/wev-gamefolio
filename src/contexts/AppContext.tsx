import React, { createContext } from "react";

const AppContext = createContext({} as Contexts.App);

export const AppProvider: React.FC = ({ children }) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

export default AppContext;
