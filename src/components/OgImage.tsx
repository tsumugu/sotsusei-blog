import { Resvg } from "@resvg/resvg-js";
import satori from "satori";
import { SITE_TITLE, SITE_ORIGIN } from "../consts";

const fontFamily = "Zen Kaku Gothic New";

export async function getOgImage(text: string) {
  const fontNormal = await fetchFont(SITE_TITLE, fontFamily, 400);
  const fontBold = await fetchFont(SITE_TITLE + text, fontFamily, 700);

  const svg = await satori(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-between",
        height: "100%",
        width: "100%",
        backgroundColor: "#097586",
        padding: "36px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          rowGap: "24px",
          height: "100%",
          width: "100%",
          backgroundColor: "#fff",
          borderRadius: "8px",
          color: "#333",
          padding: "24px 24px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            width: "100%",
            fontSize: "24px",
          }}
        >
          <span>{SITE_TITLE}</span>
        </div>
        <div
          style={{
            flexGrow: "1",
            textOverflow: "ellipsis",
            fontSize: "48px",
            fontWeight: 700,
            wordBreak: "keep-all",
          }}
        >
          {text}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            width: "100%",
            fontSize: "24px",
          }}
        >
          <span>{SITE_ORIGIN}</span>
        </div>
      </div>
    </div>,
    {
      width: 800,
      height: 400,
      fonts: [
        {
          name: fontFamily,
          data: fontNormal,
          weight: 400,
          style: "normal",
        },
        {
          name: fontFamily,
          data: fontBold,
          weight: 700,
          style: "normal",
        },
      ],
    }
  );

  const resvg = new Resvg(svg);

  return resvg.render().asPng();
}

async function fetchFont(
  text: string,
  font: string,
  weight: number
): Promise<ArrayBuffer> {
  const API = `https://fonts.googleapis.com/css2?family=${font}:wght@${weight}&text=${encodeURIComponent(
    text
  )}`;

  const css = await (
    await fetch(API, {
      headers: {
        // Make sure it returns TTF.
        "User-Agent":
          "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1",
      },
    })
  ).text();

  const resource = css.match(
    /src: url\((.+)\) format\('(opentype|truetype)'\)/
  );

  if (!resource) {
    throw new Error("Failed to fetch font");
  }

  const res = await fetch(resource[1]);

  return res.arrayBuffer();
}
