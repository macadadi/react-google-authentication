import React from "react";

import "./App.css";
import UnAuthenticatedLink, { AuthenticatedLink } from "./Api/Authenticate";
import AuthenticatedUser from "./components/AuthenticatedUser";

function App() {
  const { user, logUserOut } = AuthenticatedLink();

  if (!user) return <UnAuthenticatedLink />;

  return (
    <div className="App">
      <AuthenticatedUser userProfile={user} logOut={logUserOut} />
    </div>
  );
}

export default App;
