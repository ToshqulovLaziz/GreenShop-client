import type { FC } from "react";
import Suggestions from "./Suggestions";
import Address from "./Adsress";
import FooterNav from "./FooterNav/indes";

const Footer: FC = () => {
  return (
    <footer className="w-[80%] mx-auto">
      <Suggestions />
      <Address />
      <FooterNav />
      <h3 className="text-center p-[10px] font-normal text-sm">
        © 2023 GreenShop. All Rights Reserved.
      </h3>
    </footer>
  );
};

export default Footer;
