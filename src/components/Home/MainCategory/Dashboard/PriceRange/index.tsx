import { useState, type FC } from "react";
import { Slider } from "antd";
import { useSearchParams } from "react-router-dom";

const PriceRange: FC = () => {
  const [params, setParams] = useSearchParams();
  const range_min: number = Number(params.get("range-min") ?? 0);
  const range_max: number = Number(params.get("range-max") ?? 1000);
  const category: string = String(params.get("category") ?? "house-plants");
  const active_type: string = String(params.get("type") ?? "all-plants");
  const active_sort: string = String(params.get("sort") ?? "default-sorting");
  const [price, setPrice] = useState<[number, number]>([range_min, range_max]);

  const onFiltered = () => {
    setParams({
      category,
      range_min: String(price[0]),
      range_max: String(price[1]),
      sort: active_sort,
      type: active_type,
    });
  };

  return (
    <>
      <div className="mt-5">
        <h3 className="font-bold">Price Range</h3>
        <Slider
          onChange={(evt) => setPrice(evt)}
          range
          defaultValue={price}
          max={1000}
          min={0}
        />
        <p className="font-bold text-[#46a358]">
          Price: {`$${price[0]} - $${price[1]}`}
        </p>
        <button
          type="button"
          className="mt-[16px] bg-[#46A358] text-white px-[23px] py-[8px] rounded-lg"
          onClick={onFiltered}
        >
          Filter
        </button>
      </div>
    </>
  );
};

export default PriceRange;
