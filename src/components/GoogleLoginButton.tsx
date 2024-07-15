import { CookiesProvider, useCookies } from "react-cookie";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

function GoogleLoginButton() {
  const [_, setCookie] = useCookies(["userInfo"]);
  return (
    <div>
      <CookiesProvider defaultSetOptions={{ path: "/" }}>
        <GoogleOAuthProvider clientId={import.meta.env.PUBLIC_GOOGLE_CLIENT_ID}>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              const fetchUserInfo = async () => {
                const userInfo = await (
                  await fetch(
                    `https://wribrm1pf4.execute-api.ap-northeast-1.amazonaws.com/default/verifyGoogleCredential?access_token=${credentialResponse.credential}`
                  )
                ).json();
                if (userInfo.isTamabiUser) {
                  setCookie("userInfo", userInfo);
                } else {
                  alert("多摩美のメールアドレスでログインしてください");
                  console.log(userInfo.email);
                }
              };
              fetchUserInfo();
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </GoogleOAuthProvider>
      </CookiesProvider>
    </div>
  );
}

export default GoogleLoginButton;
