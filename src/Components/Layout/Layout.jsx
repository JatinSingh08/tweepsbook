import React from "react";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <div className="py-10 px-24">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
