import React from "react";

import "./App.css";
import Authenticate, { IsAuthentcated } from "./Api/Authenticate";

function App() {
  const { user, logUserOut } = IsAuthentcated();

  if (!user) return <Authenticate />;

  return (
    <div className="App">
      <h1>Adadi {user.userName}</h1>
      <button onClick={logUserOut}>Log out</button>
    </div>
  );
}

export default App;
