import type { FC } from "react";
import Categories from "./Categories";
import Discount from "./Discount";
import PriceRange from "./PriceRange";

const Dashboard: FC = () => {
  return (
    <section className="w-[80%] mx-auto">
      <div className="w-[310px] bg-[#f5f5f5] flex flex-col p-[15px] mb-[30px]">
        <Categories />
        <PriceRange />
        <Discount />
      </div>
    </section>
  );
};

export default Dashboard;
