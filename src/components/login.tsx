import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

function LoginUserForm() {
  return (
    <div>
      <GoogleOAuthProvider clientId={import.meta.env.GOOGLE_CLIENT_ID}>
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

export default LoginUserForm;
