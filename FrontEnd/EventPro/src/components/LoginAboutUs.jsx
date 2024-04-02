import React from "react";
import Footer from "./Footer";
import AnimatedPage from "./Animation/AnimatedPage";
import LoginHeader from "./Header/LoginHeader";

import About from "./About";

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
