import type { FC } from "react";
import {
  SearchOutlined,
  BellOutlined,
  ShoppingCartOutlined,
  LoginOutlined,
} from "@ant-design/icons";

const Navbar: FC = () => {
  return (
    <div className="w-[80%] m-auto p-[32px] flex justify-between items-center border-b-2 border-bg-[#46a358]">
      <div>
        <img
          src={
            "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Flogo.svg?alt=media&token=fc9659d6-f435-43b9-a624-8b0d3a574baa"
          }
          alt="Logo"
        />
      </div>
      <div className="flex gap-6">
        <h3 className="cursor-pointer">Home</h3>
        <h3 className="cursor-pointer">Blog</h3>
      </div>
      <div className="flex gap-6 items-center">
        <SearchOutlined className="text-[23px] cursor-pointer" />
        <BellOutlined className="text-[23px] cursor-pointer" />
        <ShoppingCartOutlined className="text-[23px] cursor-pointer" />
        <button className="bg-[#46a358] text-white flex justify-center gap-2 rounded-md items-center w-[98px] h-[36px]">
          <LoginOutlined className="text-[23px]" />
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
