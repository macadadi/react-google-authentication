import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { GoogleLogin } from "@react-oauth/google";
import "./style.css";
type Tresponse = {
  credential: string;
};

function UnAthenticatedLink() {
  const handleCookies: any = (response: Tresponse) => {
    localStorage.setItem("dtone_id", response.credential);
    window.location.reload();
  };

  return (
    <div className="App">
      <form className="login">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button disabled>Dissabled</button>
        <div className="google">
          <GoogleLogin
            onSuccess={handleCookies}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </div>
      </form>
    </div>
  );
}

export default UnAthenticatedLink;

type Tuser = {
  userName: string;
  photoUrl: string;
};
type Tdetails = {
  name: string;
  picture: string;
};

export const AuthenticatedLink = () => {
  const [user, setUser] = useState<Tuser>();
  const logUserOut = () => {
    localStorage.removeItem("dtone_id");
    window.location.reload();
  };

  useEffect(() => {
    let token = localStorage.getItem("dtone_id");
    if (token) {
      let details: Tdetails = jwt_decode(token);
      console.log(details);
      setUser({ userName: details.name, photoUrl: details.picture });
    } else {
      console.log("user is not authenticated");
    }
  }, [user?.userName]);

  return { user, setUser, logUserOut };
};
