import TamabiOnlyContent from "./TamabiOnlyContent";
import GoogleLoginButton from "./GoogleLoginButton";

const TamabiOnlyImage = ({ src, width, height, alt }) => {
  return (
    <TamabiOnlyContent
      contentPlaceholder={
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "60%",
              aspectRatio: "16 / 9",
              display: "flex",
              flexFlow: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "#FFFFFF",
              padding: "16px",
              paddingTop: "32px",
              paddingBottom: "32px",
              backgroundImage:
                "url('https://d3djg0dm3dsv8.cloudfront.net/33a385fed503b8d5555a056922af688b64a9741c67f294e97cfc8797830fc895.jpg')",
              backgroundSize: "cover",
            }}
          >
            <p
              style={{
                margin: 0,
                padding: 0,
                paddingBottom: "16px",
              }}
            >
              この画像は多摩美関係者のみ閲覧できます
            </p>
            <p style={{ margin: 0, padding: 0 }}>
              <GoogleLoginButton />
            </p>
          </div>
        </div>
      }
      limitedContent={<img src={src} width={width} height={height} alt={alt} />}
    />
  );
};

export default TamabiOnlyImage;
