import React from "react";
import Footer from "../components/Footer";
import AnimatedPage from "../components/AnimatedPage";
import LoginHeader from "./LoginHeader";

import About from "../components/About";

function LoginAboutUs() {
  return (
    <>
      <AnimatedPage>
        <LoginHeader />

        <About/>

        <Footer />
      </AnimatedPage>
    </>
  );
}

export default LoginAboutUs;
