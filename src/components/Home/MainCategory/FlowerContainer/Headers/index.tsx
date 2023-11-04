/* eslint-disable array-callback-return */
import type { FC } from "react";
import { Select } from "antd";
import { typeHeaders } from "../../../../../utils/type";
interface HeadersProps {
  active_type: string;
  active_sort: string;
  setParams: Function;
}
const Headers: FC<HeadersProps> = ({ active_type, active_sort, setParams }) => {
  return (
    <div className="flex w-full justify-between items-center">
      <div className="flex gap-8 p-[5px]">
        {typeHeaders.map((item) => (
          <div key={item.id}>
            <button
              className={`${
                active_type === item.value &&
                "text-[#46A358] border-b-2 border-[#46a358] pb-1"
              }`}
              onClick={() => {
                setParams({ type: item.value });
              }}
            >
              {item.subtitle}
            </button>
          </div>
        ))}
      </div>
      <div className="flex gap-2 items-center max-lg:hidden">
        <span>Sort by:</span>
        <Select
          value={active_sort}
          style={{ width: 147 }}
          options={[
            { label: "Default Sorting", value: "default-sorting" },
            { label: "The Cheapest", value: "the-cheapest" },
            { label: "Most Expensive", value: "most-expensive" },
          ]}
          onChange={(selectedOption) => {
            if (typeof selectedOption === "string") {
              setParams({ sort: selectedOption });
            }
          }}
        />
      </div>
    </div>
  );
};

export default Headers;
