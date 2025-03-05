import NavLinks from "./navbar";
import { ReactNode } from "react";

type PageWrapperProps = {
  children: ReactNode;
};

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <div className="w-full h-full custom-scrollbar-example">
      <NavLinks />
      <div className="mt-15">{children}</div>
    </div>
  );
};

export default PageWrapper;
