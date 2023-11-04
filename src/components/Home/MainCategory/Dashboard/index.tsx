/* eslint-disable @typescript-eslint/no-redeclare */
import type { FC } from "react";
import Categories from "./Categories";
import Discount from "./Discount";
import PriceRange from "./PriceRange";

const Dashboard: FC = () => {
  return (
    <div className="w-[310px] h-fit bg-[#f5f5f5] flex flex-col p-[15px] mb-[30px]">
      <Categories />
      <PriceRange />
      <Discount />
    </div>
  );
};

export default Dashboard;
