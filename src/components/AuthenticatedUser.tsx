
import Profile from "./profile";
import SchoolComponent from "./shooolComponent";

type Tuser = {
  userName: string;
  photoUrl: string;
};
type Tprop = {
  logOut: () => void;
  userProfile: Tuser;
};
function AuthenticatedUser({ logOut, userProfile }: Tprop) {
  return (
    <div>
      <Profile logOut={logOut} userProfile={userProfile} />
      <SchoolComponent />
      
    </div>
  );
}

export default AuthenticatedUser;
