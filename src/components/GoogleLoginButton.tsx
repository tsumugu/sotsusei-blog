//import { CookiesProvider, useCookies } from "react-cookie";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { SITE_ORIGIN } from "../consts";

function GoogleLoginButton() {
  //const [_, setCookie] = useCookies(["google-cledentials"]);
  return (
    <div>
      {/* <CookiesProvider defaultSetOptions={{ path: "/" }}> */}
      <GoogleOAuthProvider clientId={import.meta.env.PUBLIC_GOOGLE_CLIENT_ID}>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            const fetchUserInfo = async () => {
              const userInfo = await fetch(
                `https://wribrm1pf4.execute-api.ap-northeast-1.amazonaws.com/default/verifyGoogleCredential?access_token=${credentialResponse.credential}`
              );
              console.log(userInfo.json());
              //setCookie("google-cledentials", credentialResponse);
            };
            fetchUserInfo();
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </GoogleOAuthProvider>
      {/* </CookiesProvider> */}
    </div>
  );
}

export default GoogleLoginButton;
