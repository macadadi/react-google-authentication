import React from "react";
import Profile from "./profile";

type user = {
  userName: string;
  photoUrl: string;
};
type prop = {
  logOut: () => void;
  userProfile: user;
};

function AuthenticatedUser({ logOut, userProfile }: prop) {
  return (
    <div>
      <h1>Hello Maricus</h1>
      <Profile logOut={logOut} userProfile={userProfile} />
    </div>
  );
}

export default AuthenticatedUser;
