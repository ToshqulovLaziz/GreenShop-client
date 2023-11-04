import type { FC } from "react";
import { Skeleton } from "antd";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  HeartOutlined,
} from "@ant-design/icons";

interface DataItemType {
  title?: string;
  _id?: number;
  price?: number;
  main_image?: string;
  isLoading: boolean;
}

const Card: FC<DataItemType> = ({ main_image, title, price, isLoading }) => {
  if (isLoading) {
    return <Skeleton.Image />;
  }
  return (
    <div>
      <div className="group h-[300px] bg-[#f5f5f5] flex justify-center items-center flex-col relative">
        <img className="w-4/5 " src={main_image} alt={title} />
        <div className="hidden absolute inset-x-auto bottom-2 gap-4 group-hover:flex">
          <div className="bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center  cursor-pointer text-[20px]">
            <ShoppingCartOutlined />
          </div>
          <div className="bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center  cursor-pointer text-[20px]">
            <HeartOutlined />
          </div>
          <div className="bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center  cursor-pointer text-[20px]">
            <SearchOutlined />
          </div>
        </div>
      </div>
      <h3 className="font-normal cursor-pointer mt-[12px]">{title}</h3>
      <span className="text-[#46A358] font-bold">{`$${price}`}</span>
    </div>
  );
};

export default Card;
