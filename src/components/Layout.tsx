import { ReactNode } from "react";
import {Navbar, Footer} from '.';

type LayoutProps = {
  children: ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="overflow-x-hidden">
      <div className="flex flex-col items-center justify-center bg-[#f1f4f9]">
        <div className="w-full px-4 md:px-8 lg:px-12 max-w-[1240px]">
          <Navbar />
        </div>
        <main>{children}</main>
      </div>
      <footer className="bg-gray-700">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
