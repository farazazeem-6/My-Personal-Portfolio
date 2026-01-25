import Footer from "../components/Footer/Footer";
import Header from ".././components/Header/Header";
import React, { Fragment, useEffect } from "react";
import { Outlet } from "react-router-dom";
import PageWrapper from "../components/PageWrapper/PageWrapper";
import { useSelector } from "react-redux";
import "../../src/App.css";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import WhatsappBtn from "../components/WhatsappButton/WhatsappBtn";
import { ScrollProgress } from "../components/ui/scroll-progress";

function Layout() {
  const theme = useSelector((state) => state.theme.mode);
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <Fragment>
      <ScrollProgress />
      {/* <BasicModal/> */}
      <Header />
      <Outlet />
      <PageWrapper>
        <Footer />
      </PageWrapper>
      <WhatsappBtn />
      <ScrollToTop />
    </Fragment>
  );
}

export default Layout;
