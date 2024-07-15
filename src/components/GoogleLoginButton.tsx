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
            const userInfo = await new Promise((resolve) => {
              const xhr = new XMLHttpRequest();

              xhr.open("GET", `https://www.googleapis.com/oauth2/v3/userinfo`);
              xhr.setRequestHeader(
                "Authorization",
                `Bearer ${credentialResponse.credential}`
              );
              xhr.onload = function () {
                if (this.status >= 200 && this.status < 300)
                  resolve(JSON.parse(this.responseText));
                else resolve({ err: "404" });
              };
              xhr.send();
            });
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
