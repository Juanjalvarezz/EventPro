import Logo from "/Logo.png"
import LoginNav from "../Nav/LoginNav";

function LoginHeader() {
  return (
    <header className="top-0 mb-8 bg-primary-600 flex-wrap z-[20] mx-auto flex w-full items-center justify-between pr-8 pl-8]">
      
      <img src={Logo} className="logo w-40 -mt-4 -mb-2" alt="Logo"/>

      <LoginNav/>

    </header>
  );
}

export default LoginHeader;