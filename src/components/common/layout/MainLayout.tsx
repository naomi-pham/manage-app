import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./header/Header";
import getNavList from "@/lib/getNavList";

const MainLayout = async ({ children }: { children: ReactNode }) => {
  const navbars = await getNavList();

  return (
    <main>
      <Header navList={navbars} />
      {children}
      <Footer />
    </main>
  );
};

export default MainLayout;
