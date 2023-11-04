import { useState, type FC } from "react";
import { Slider } from "antd";
import { useSearchParams } from "react-router-dom";

const PriceRange: FC = () => {
  const [params, setParams] = useSearchParams();
  const rangeMin: number = Number(params.get("range-min") ?? 0);
  const rangeMax: number = Number(params.get("range-max") ?? 1000);
  const [price, setPrice] = useState<[number, number]>([rangeMin, rangeMax]);

  return (
    <>
      <div className="mt-5">
        <h3 className="font-bold">Price Range</h3>
        <Slider
          range
          defaultValue={price}
          max={1000}
          min={0}
          onChange={(evt) => {
            setPrice(evt);
          }}
        />
        <p className="font-bold text-[#46a358]">
          Price: {`$${price[0]} - $${price[1]}`}
        </p>
        <button
          type="button"
          className="mt-[16px] bg-[#46A358] text-white px-[23px] py-[8px] rounded-lg"
          onClick={() => {
            const newParams = new URLSearchParams();
            newParams.set("range-min", String(price[0]));
            newParams.set("range-max", String(price[1]));
            setParams(newParams);
          }}
        >
          Filter
        </button>
      </div>
    </>
  );
};

export default PriceRange;
