import { Modal, Spin } from "antd";
import type { FC } from "react";
import { useReduxSelector } from "../../../../hooks/useRedux";

const GoogleVerification: FC = () => {
  const { googleVerification } = useReduxSelector((state) => state.modal);
  return (
    <Modal
      title="Google Authentication"
      open={googleVerification}
      footer={false}
      closable={false}
    >
      <div className="w-full flex items-center justify-center h-[100px]">
        <Spin size="large" />
      </div>
      <h3 className="text-center w-[80%] mx-auto font-bold">
        Authentication is on the precess, please stands by while {"we're"}{" "}
        collecting your data..
      </h3>
    </Modal>
  );
};

export default GoogleVerification;
