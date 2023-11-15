/* eslint-disable array-callback-return */
import type { FC } from "react";
import { Select } from "antd";
import { typeHeaders } from "../../../../../utils/type";
import { useSearchParams } from "react-router-dom";

const Headers: FC = () => {
  const [params, setParams] = useSearchParams();
  const active_type: string = String(params.get("type") ?? "all-plants");
  const active_sort: string = String(params.get("sort") ?? "default-sorting");
  const range_min: string = String(params.get("range-min") ?? 0);
  const range_max: string = String(params.get("range-max") ?? 1000);
  const category: string = String(params.get("category") ?? "house-plants");
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
                setParams({
                  category,
                  range_min,
                  range_max,
                  sort: active_sort,
                  type: item.value,
                });
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
              setParams({
                category,
                range_min,
                range_max,
                sort: selectedOption,
                type: active_type,
              });
            }
          }}
        />
      </div>
    </div>
  );
};

export default Headers;
