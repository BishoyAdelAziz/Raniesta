import { createContext, useState } from "react";

export const AppContext = createContext();

const ContextProvider = (props) => {
  //Login Dialog Show/Hide Handling State
  const [ShowLogin, setShowLogin] = useState(false);
  // Users Object (as server)
  const Users = {};
  // User Object (as server Request)
  const User = {
    _id: 0,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    age: 0,
    bokkings: {},
  };

  //Context Dispatcher (value prop)
  const Server = {
    ShowLogin,
    setShowLogin,
    Users,
    User,
  };
  return (
    //am aware about this .children Error .. i should use prop types in the future while Application Scale Increament
    <AppContext.Provider value={Server}>{props.children}</AppContext.Provider>
  );
};

export default ContextProvider;
