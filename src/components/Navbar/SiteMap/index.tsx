import { Modal } from "antd";
import type { FC } from "react";
import { useReduxDispatch, useReduxSelector } from "../../../hooks/useRedux";
import {
  setAuthModal,
  setSiteMapModalVisibilty,
} from "../../../redux/modalSlice";
import { LoginOutlined } from "@ant-design/icons";
import { useAuthUser, useIsAuthenticated } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
const SiteMap: FC = () => {
  const dispatch = useReduxDispatch();
  const userData = useAuthUser()();
  const isAuthed = useIsAuthenticated()();
  const navigate = useNavigate();

  const { siteMapModalVisibilty } = useReduxSelector((state) => state.modal);
  const hover_style: string =
    "hover:border-l-2 hover:border-[#46a358] hover:text-[#46a358] hover:pl-2";
  return (
    <Modal
      onCancel={() => dispatch(setSiteMapModalVisibilty())}
      open={siteMapModalVisibilty}
      footer={false}
      title="Site map"
    >
      <div className="flex gap-2 flex-col">
        <h3
          onClick={() => navigate("/")}
          className={`font-bold  cursor-pointer transition-colors ${hover_style}`}
        >
          Home
        </h3>
        <h3
          onClick={() => navigate("/blog")}
          className={`font-bold  cursor-pointer transition-colors ${hover_style}`}
        >
          Blog
        </h3>
        <button
          onClick={() => dispatch(setAuthModal())}
          className="bg-[#46a358] text-white flex justify-center gap-2 rounded-md items-center w-[128px] h-[36px] mx-auto"
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
    </Modal>
  );
};

export default SiteMap;
