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
  console.log(userProfile.photoUrl);
  return (
    <div className="ProfileContainer">
      <h1>Logo</h1>
      <div>
        <div className="userProfile">
          <div className="avatar">
            <img
              src={userProfile.photoUrl}
              className="avatar__image"
              alt="DTone"
            />
          </div>
          <p className="userName">{userProfile.userName}</p>
          <button onClick={() => logOut()}>Log out</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
