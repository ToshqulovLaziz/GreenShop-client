import { Modal } from "antd";
import type { FC } from "react";
import { useReduxDispatch, useReduxSelector } from "../../../hooks/useRedux";
import { setSiteMapModalVisibilty } from "../../../redux/modalSlice";
import { LoginOutlined } from "@ant-design/icons";
const SiteMap: FC = () => {
  const dispatch = useReduxDispatch();
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
          className={`font-bold  cursor-pointer transition-colors ${hover_style}`}
        >
          Home
        </h3>
        <h3
          className={`font-bold  cursor-pointer transition-colors ${hover_style}`}
        >
          Blog
        </h3>
        <button className="bg-[#46a358] text-white flex justify-center gap-2 rounded-md items-center w-[128px] h-[36px] mx-auto">
          <LoginOutlined className="text-[23px]" />
          Login
        </button>
      </div>
    </Modal>
  );
};

export default SiteMap;
