import Logo from "../assets/img/Logo.png"
import PromotorNav from "./PromotorNav";

function PromotorHeader() {
  return (
    <header className="top-0 mb-8 bg-primary-600 flex-wrap z-[20] mx-auto flex w-full items-center justify-between pr-8 pl-8]">
      
      <img src={Logo} className="logo w-40 -mt-4 -mb-2" alt="Logo"/>

      <PromotorNav/>

    </header>
  );
}

export default PromotorHeader;