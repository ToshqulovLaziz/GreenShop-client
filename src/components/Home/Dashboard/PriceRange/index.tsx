import { useState, type FC, useEffect } from "react";
import axios from "axios";
import { Slider } from "antd";

interface DataItemType {
  title?: string;
  id?: number;
  discoount_up_to?: number;
  poster_image_url?: string;
}
const PriceRange: FC = () => {
  const [value, setValue] = useState<any>([0, 1000]);
  return (
    <>
      <div className="mt-5">
        <h3 className="font-bold">Price Range</h3>
        {/* <Slider range defaultValue={[0, data?.discoount_up_to || 0]} /> */}
        <Slider range defaultValue={value} />
      </div>
    </>
  );
};

export default PriceRange;
