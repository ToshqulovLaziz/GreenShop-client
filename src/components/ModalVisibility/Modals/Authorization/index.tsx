import { Modal } from "antd";
import { useReduxDispatch, useReduxSelector } from "../../../../hooks/useRedux";
import { setAuthModal } from "../../../../redux/modalSlice";
import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const Authorization = () => {
  const [active, setActive] = useState<string>("login");
  const dispatch = useReduxDispatch();
  const { authModal } = useReduxSelector((state) => state.modal);

  return (
    <Modal
      open={authModal}
      onCancel={() => dispatch(setAuthModal())}
      footer={false}
    >
      <div className="flex gap-2.5 items-center justify-center mt-6">
        <h3
          tabIndex={0}
          onClick={() => setActive("login")}
          className={`cursor-pointer text-xl transition-all ${
            active === "login" && "text-[#46A358]"
          } ${!(authModal && active !== "login") || "opacity-20"}`}
        >
          Login
        </h3>
        <div className="border h-4 bg-[#3D3D3D]"></div>
        <h3
          tabIndex={0}
          onClick={() => setActive("register")}
          className={`cursor-pointer text-xl transition-all ${
            active === "register" && "text-[#46A358]"
          } ${!(authModal && active !== "register") || "opacity-20"} `}
        >
          Register
        </h3>
      </div>
      {active === "login" ? <Login /> : <Register />}
    </Modal>
  );
};

export default Authorization;
