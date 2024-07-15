import type { ReactNode } from "react";
import { CookiesProvider, useCookies } from "react-cookie";
import TamabiOnlyContent from "./TamabiOnlyContent";
import GoogleLoginButton from "./GoogleLoginButton";

type TamabiOnlyImageProps = {
  src: string;
  width?: number;
  height?: number;
  alt?: string;
};

const TamabiOnlyImage: React.FC<TamabiOnlyImageProps> = ({
  src,
  width,
  height,
  alt,
}) => {
  return (
    <TamabiOnlyContent
      contentPlaceholder={
        <div
          style={{
            width: width,
            height: height,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          閲覧するには多摩美のGoogleアカウントでログインしてください
          <GoogleLoginButton />
        </div>
      }
      limitedContent={<img src={src} width={width} height={height} alt={alt} />}
    />
  );
};

export default TamabiOnlyImage;
