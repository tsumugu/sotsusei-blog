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
          onSuccess={async (credentialResponse) => {
            const userInfo = await fetch(
              `https://${SITE_ORIGIN}/userinfo/userinfo?access_token=${credentialResponse.credential}`
            );
            console.log(credentialResponse, userInfo);
            //setCookie("google-cledentials", credentialResponse);
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
