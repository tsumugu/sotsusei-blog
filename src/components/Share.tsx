import {
  FacebookIcon,
  FacebookShareButton,
  HatenaIcon,
  HatenaShareButton,
  LineIcon,
  LineShareButton,
  TwitterShareButton,
  XIcon,
} from "react-share";
import { FaShareAlt } from "react-icons/fa";

interface ShareInfo {
  info: {
    title: string;
    text: string;
    url: string;
  };
}

const Share = (props: ShareInfo) => {
  return (
    <ul style={{ display: "flex", gap: "24px", listStyle: "none", padding: 0 }}>
      <li>
        <button
          onClick={async () => {
            console.log(props.info);
            try {
              await navigator.share(props.info);
            } catch (err) {
              console.log(`Error: ${err}`);
            }
          }}
          style={{
            background: "transparent",
            border: "none",
            margin: 0,
            marginTop: "6px",
            padding: 0,
            cursor: "pointer",
          }}
        >
          <FaShareAlt size={38} />
        </button>
      </li>
      <li>
        <TwitterShareButton title={props.info.title} url={props.info.url}>
          <XIcon size={48} round />
        </TwitterShareButton>
      </li>
      <li>
        <FacebookShareButton title={props.info.title} url={props.info.url}>
          <FacebookIcon size={48} round />
        </FacebookShareButton>
      </li>
      <li>
        <LineShareButton title={props.info.title} url={props.info.url}>
          <LineIcon size={48} round />
        </LineShareButton>
      </li>
      <li>
        <HatenaShareButton title={props.info.title} url={props.info.url}>
          <HatenaIcon size={48} round />
        </HatenaShareButton>
      </li>
    </ul>
  );
};

export default Share;
