import { Children, createContext } from "react";

export const AppContext = createContext();
const Server = {};
const ContextProvider = () => {
  return <AppContext.Provider value={Server}>{Children}</AppContext.Provider>;
};

export default ContextProvider;
