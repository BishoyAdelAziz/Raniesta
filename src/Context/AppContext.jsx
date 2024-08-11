import { createContext, useState } from "react";

export const AppContext = createContext();
const [ShowLogin, setShowLogin] = useState(false);
const Server = {
  ShowLogin,
  setShowLogin,
};
const ContextProvider = (props) => {
  return (
    <AppContext.Provider value={Server}>{props.children}</AppContext.Provider>
  );
};

export default ContextProvider;
