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

const Register: FC = () => {
  const signIn = useSignIn();
  const dispatch = useReduxDispatch();
  const [isLoading, setIsLoading] = useState<boolean>();
  const [api, contextHolder] = notification.useNotification();
  const { authModal } = useReduxSelector((state) => state.modal);
  const onFinish = (evt: { email: string; password: string }) => {
    dispatch(setAuthModal());
    setIsLoading(true);
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
        Enter your email and password to register.
      </h3>
      <Form onFinish={onFinish}>
        <Form.Item
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input
            className="h-[40px] mt-[14px] border border-[#46A358]"
            placeholder="Name"
            type="text"
          />
        </Form.Item>
        <Form.Item
          name="surname"
          rules={[{ required: true, message: "Please input your surname!" }]}
        >
          <Input
            className="h-[40px] mt-[14px] border border-[#46A358]"
            placeholder="Surname"
            type="text"
          />
        </Form.Item>
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
        <Form.Item
          name="confirm"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The new password that you entered do not match!"),
                );
              },
            }),
          ]}
        >
          <Input.Password
            className="h-[40px] mt-[14px] border border-[#46A358]"
            placeholder="***********"
            type="password"
          />
        </Form.Item>
        <button
          className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white w-full h-[45px] my-[27px]"
          type="submit"
          onClick={() => dispatch(setAuthModal())}
        >
          {isLoading ? <LoadingOutlined /> : "Register"}
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
        </Space>
      </Form>
    </div>
  );
};

export default Register;
