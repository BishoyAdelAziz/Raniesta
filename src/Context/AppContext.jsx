import { createContext } from "react";

export const AppContext = createContext();
const Server = {};
const ContextProvider = (props) => {
  return (
    <AppContext.Provider value={Server}>{props.children}</AppContext.Provider>
  );
};

export default ContextProvider;
