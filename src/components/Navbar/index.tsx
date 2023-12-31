import type { FC } from "react";
import SiteMap from "./SiteMap";
import {
  SearchOutlined,
  BellOutlined,
  ShoppingCartOutlined,
  LoginOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { useReduxDispatch } from "../../hooks/useRedux";
import { setAuthModal, setSiteMapModalVisibilty } from "../../redux/modalSlice";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuthUser, useIsAuthenticated } from "react-auth-kit";

const Navbar: FC = () => {
  const userData = useAuthUser()();
  const isAuthed = useIsAuthenticated()();
  const dispatch = useReduxDispatch();
  const navigate = useNavigate();
  return (
    <>
      <div className="w-[80%] m-auto p-[32px] flex justify-between items-center border-b-2 border-bg-[#46a358]">
        <SiteMap />
        <div>
          <img
            src={
              "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Flogo.svg?alt=media&token=fc9659d6-f435-43b9-a624-8b0d3a574baa"
            }
            alt="Logo"
            onClick={() => navigate("/")}
          />
        </div>
        <div className="flex gap-6 max-sm:hidden">
          <h3 className="cursor-pointer" onClick={() => navigate("/")}>
            Home
          </h3>
          <h3 className="cursor-pointer" onClick={() => navigate("/blog")}>
            Blog
          </h3>
        </div>
        <div className="flex gap-6 items-center max-sm:hidden">
          <SearchOutlined className="text-[23px] cursor-pointer" />
          <BellOutlined className="text-[23px] cursor-pointer" />
          <ShoppingCartOutlined className="text-[23px] cursor-pointer" />
          <button
            onClick={() => dispatch(setAuthModal())}
            className="bg-[#46a358] text-white flex justify-center gap-2 rounded-md items-center w-[98px] h-[36px]"
          >
            {isAuthed ? (
              userData?.name
            ) : (
              <>
                <LoginOutlined className="text-[23px]" />
                Login
              </>
            )}
          </button>
        </div>
        <div className="gap-6 items-center hidden max-sm:flex">
          <SearchOutlined className="text-[23px] cursor-pointer" />
          <ShoppingCartOutlined className="text-[23px] cursor-pointer" />
          <MenuOutlined
            className="text-[23px] cursor-pointer"
            onClick={() => dispatch(setSiteMapModalVisibilty())}
          />
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
