import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./header/Header";

const MainLayout = async ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default MainLayout;
