import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./header";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default MainLayout;
