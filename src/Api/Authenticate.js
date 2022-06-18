import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { GoogleLogin } from "@react-oauth/google";

function Authenticate() {
  const handleCookies = (response) => {
    localStorage.setItem("dtone_id", response.credential);
    window.location.reload();
  };

  return (
    <div>
      <GoogleLogin
        onSuccess={handleCookies}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </div>
  );
}

export default Authenticate;

export const IsAuthentcated = () => {
  const logUserOut = () => {
    localStorage.removeItem("dtone_id");
    window.location.reload();
  };
  const [user, setUser] = useState();
  useEffect(() => {
    let token = localStorage.getItem("dtone_id");
    if (token) {
      let details = jwt_decode(token);

      setUser({ userName: details.name, userPhoto: details.photo });
    } else {
      setUser();
    }
  }, [user]);

  return { user, setUser, logUserOut };
};
