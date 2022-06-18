import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

function Authenticate() {
  const handleCookies = (response) => {
    localStorage.setItem("dtone_id", response.credential);
    window.location.reload();
  };
  const client__id =
    "300013803126-j7e8khlvmjftmnkjfn5rtvdtf4hp2eoc.apps.googleusercontent.com";

  useEffect(() => {
    try {
      /*global google*/
      if (google !== undefined) {
        google.accounts.id.initialize({
          client_id: client__id,
          callback: handleCookies,
        });
        google.accounts.id.renderButton(document.getElementById("theme"), {
          theme: "outline",
          size: "large",
        });
      }
    } catch (err) {
      throw err;
    }
  }, []); 
  return (
    <div>
      <button id="theme"></button>
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
