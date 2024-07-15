import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

function GoogleLoginButton() {
  return (
    <div>
      <button
        onClick={() => {
          console.log(import.meta.env.PUBLIC_GOOGLE_CLIENT_ID);
        }}
      >
        CLIENT_ID
      </button>
      <GoogleOAuthProvider clientId={import.meta.env.PUBLIC_GOOGLE_CLIENT_ID}>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </GoogleOAuthProvider>
    </div>
  );
}

export default GoogleLoginButton;
