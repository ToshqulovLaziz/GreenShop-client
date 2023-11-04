import { useState, type FC } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import Headers from "./Headers";
import Card from "./Card";

interface DataItemType {
  title?: string;
  _id?: number;
  price?: number;
  main_image?: string;
}
const FlowerContainer: FC = () => {
  const [params, setParams] = useSearchParams();

  const category: string = String(params.get("category") ?? "house-plants");
  const active_type: string = String(params.get("type") ?? "all-plants");
  const active_sort: string = String(params.get("sort") ?? "default-sorting");
  const rangeMin = Number(params.get("range-min") ?? 0);
  const rangeMax = Number(params.get("range-max") ?? 1000);

  const { data, isLoading } = useQuery(
    [
      `/flowers/${category}/${active_sort}/${active_type}/${rangeMin}/${rangeMax}`,
    ],
    () => {
      return axios
        .get(
          `https://greenshop.abduvoitov.com/api/flower/category/${category}`,
          {
            params: {
              access_token: "6519a32b5bf6635ccba4f9ad",
              sort: active_sort,
              type: active_type,
              range_min: rangeMin,
              range_max: rangeMax,
            },
          },
        )
        .then((res) => {
          return res.data.data;
        });
    },
    {
      refetchOnWindowFocus: false,
    },
  );
  return (
    <>
      <div className="flex flex-col gap-8 w-full">
        <Headers
          active_type={active_type}
          active_sort={active_sort}
          setParams={setParams}
        />
        <div className="grid grid-cols-3 gap-4 max-sm:grid-cols-2">
          {data?.length > 0 &&
            data?.map((item: DataItemType) => (
              <Card key={item._id} {...item} isLoading={isLoading} />
            ))}
        </div>
      </div>
    </>
  );
};

export default FlowerContainer;
