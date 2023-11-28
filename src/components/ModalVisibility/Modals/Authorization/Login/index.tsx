import { useState, type FC } from "react";
import { Form, Modal, Input, Divider, Button, notification, Space } from "antd";
import {
  FacebookOutlined,
  GoogleOutlined,
  ScanOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { useSignIn } from "react-auth-kit";
import {
  useReduxDispatch,
  useReduxSelector,
} from "../../../../../hooks/useRedux";
import {
  setAuthModal,
  setGoogleVerification,
} from "../../../../../redux/modalSlice";
import axios from "axios";
import { signInWithGoogle } from "../../../../../config";

type NotificationType = "success" | "info";

const Login: FC = () => {
  const signIn = useSignIn();
  const dispatch = useReduxDispatch();
  const [isLoading, setIsLoading] = useState<boolean>();
  const [api, contextHolder] = notification.useNotification();
  const { authModal } = useReduxSelector((state) => state.modal);
  const onFinish = (evt: { email: string; password: string }) => {
    setIsLoading(true);
    dispatch(setAuthModal());
    axios({
      url: "https://greenshop.abduvoitov.com/api/user/sign-in",
      method: "POST",
      data: evt,
      params: {
        access_token: "6519a32b5bf6635ccba4f9ad",
      },
    }).then((res) => {
      signIn({
        token: res.data.data.token,
        expiresIn: 3600,
        tokenType: "Bearer",
        authState: res.data.data.user,
      });
    });
    dispatch(setAuthModal());
    setIsLoading(false);
  };
  const openNotificationInfo = (type: NotificationType) => {
    api[type]({
      message: "Not yet supported!",
    });
  };
  const onGoogleAuth = async (type: NotificationType) => {
    const data = await signInWithGoogle();
    dispatch(setGoogleVerification());
    dispatch(setAuthModal());
    await axios({
      url: "https://greenshop.abduvoitov.com/api/user/sign-in/google",
      method: "POST",
      data: {
        email: data.user.email,
      },
      params: {
        access_token: "6519a32b5bf6635ccba4f9ad",
      },
    }).then((res) => {
      signIn({
        token: res.data.data.token,
        expiresIn: 3600,
        tokenType: "Bearer",
        authState: res.data.data.user,
      });
    });
    api[type]({
      message: "Successfully authenticated via Google!",
      duration: 3,
    });
    dispatch(setGoogleVerification());
  };
  return (
    <div className="w-4/5 mx-auto">
      <h3 className="text-sm  mt-8 font-normal">
        Enter your username and password to login
      </h3>
      <Form onFinish={onFinish}>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input
            className="h-[40px] mt-[14px] border border-[#46A358]"
            placeholder="almamun_uxui@outlook.com"
            type="email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            className="h-[40px] mt-[14px] border border-[#46A358]"
            placeholder="***********"
            type="password"
          />
        </Form.Item>
        <h3 className="text-[#46A358] font-normal mt-[14px] cursor-pointer w-fit ml-auto">
          Forgot Password?
        </h3>
        <button
          className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white w-full h-[45px] my-[27px]"
          type="submit"
          onClick={() => dispatch(setAuthModal())}
        >
          {isLoading ? <LoadingOutlined /> : "Login"}
        </button>
        <Divider className="font-normal text-xs " plain>
          Or login with
        </Divider>
        {contextHolder}
        <Space className="block flex-col">
          <Button
            className="cursor-pointer flex items-center gap-2 border border-[#EAEAEA] h-[40px] w-full rounded-md mb-[15px]"
            onClick={() => openNotificationInfo("info")}
          >
            <FacebookOutlined
              className="ml-[15px]"
              style={{
                fontSize: "16px",
                color: "#fff",
                backgroundColor: "#000",
              }}
            />
            Login with Facebook
          </Button>
          <Button
            className="btn cursor-pointer flex items-center gap-2 border border-[#EAEAEA] h-[40px] w-full rounded-md mb-[15px]"
            onClick={() => onGoogleAuth("success")}
          >
            <GoogleOutlined className="pl-[15px]" />
            Login with Google
          </Button>
          <Button
            className="cursor-pointer flex items-center gap-2 border border-[#EAEAEA] h-[40px] w-full rounded-md mb-[15px]"
            onClick={() => openNotificationInfo("info")}
          >
            <ScanOutlined className="pl-[15px]" />
            Login with Qr Code
          </Button>
        </Space>
      </Form>
    </div>
  );
};

export default Login;
