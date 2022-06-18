import React from "react";
type user = {
  userName: string;
  photoUrl: string;
};
type prop = {
  logOut: () => void;
  userProfile: user;
};
function Profile({ logOut, userProfile }: prop) {
  return (
    <div>
      <button onClick={() => logOut()}>Log out</button>
      <p>{userProfile.userName}</p>
    
    </div>
  );
}

export default Profile;
