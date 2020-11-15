import React from "react";

const AuthContext = React.createContext({
  authenticated: false,
  signIn: () => {},
});

export default AuthContext;
