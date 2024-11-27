import type { ReactNode } from "react";
import { CookiesProvider, useCookies } from "react-cookie";
import { isExhibition } from "../../consts";

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
        {userInfo.isTamabiUser || isExhibition ? (
          <>{limitedContent}</>
        ) : (
          <>{contentPlaceholder}</>
        )}
      </div>
    </CookiesProvider>
  );
};

export default TamabiOnlyContent;
