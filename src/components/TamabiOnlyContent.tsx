import type { ReactNode } from "react";
import { CookiesProvider, useCookies } from "react-cookie";

type TamabiOnlyContentProps = {
  contentPlaceholder: ReactNode;
  limitedContent: ReactNode;
};

const TamabiOnlyContent: React.FC<TamabiOnlyContentProps> = ({
  contentPlaceholder,
  limitedContent,
}) => {
  const [userInfo, _] = useCookies(["isTamabiUser"]);
  return (
    <CookiesProvider defaultSetOptions={{ path: "/" }}>
      <div className="tamabiOnlyContent">
        {userInfo.isTamabiUser ? (
          <>{contentPlaceholder}</>
        ) : (
          <>{limitedContent}</>
        )}
      </div>
    </CookiesProvider>
  );
};

export default TamabiOnlyContent;
