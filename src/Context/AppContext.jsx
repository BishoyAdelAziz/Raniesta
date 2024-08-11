import { createContext, useState } from "react";

export const AppContext = createContext();

const ContextProvider = (props) => {
  //Login Dialog Show/Hide Handling State
  const [ShowLogin, setShowLogin] = useState(false);

  //Context Dispatcher (value prop)
  const Server = {
    ShowLogin,
    setShowLogin,
  };
  return (
    //am aware about this .children Error .. i should use prop types in the future while Application Scale Increament
    <AppContext.Provider value={Server}>{props.children}</AppContext.Provider>
  );
};

export default ContextProvider;
