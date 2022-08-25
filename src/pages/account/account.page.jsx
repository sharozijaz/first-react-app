import { signInWithGooglePopup } from "../../utils/firebase/firebase.util";

const Account = () => {
  const SignIn = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };
  return (
    <div>
      <h1>SignIn Page</h1>
      <button onClick={SignIn}>SignIn with Google</button>
    </div>
  );
};

export default Account;
