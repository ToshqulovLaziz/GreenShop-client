import type { FC } from "react";
import Dashboard from "./Dashboard";
import FlowerContainer from "./FlowerContainer";

const MainCategory: FC = () => {
  return (
    <div className="flex gap-12 w-[80%] mx-auto mb-[30px]">
      <Dashboard />
      <FlowerContainer />
    </div>
  );
};
export default MainCategory;
