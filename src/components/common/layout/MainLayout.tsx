import React, { ReactNode } from "react";
import DesktopNav from "./DesktopNav";
import Footer from "./Footer";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <DesktopNav />
      {children}
      <Footer />
    </main>
  );
};

export default MainLayout;
