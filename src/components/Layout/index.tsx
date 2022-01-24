import React from "react";
import Footer from "../Footer";
import Header from "../Header";

type LayoutProps = {
  children: React.ReactNode;
  isLoggedIn?: boolean;
};

const Layout = ({ children, isLoggedIn }: LayoutProps) => {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
