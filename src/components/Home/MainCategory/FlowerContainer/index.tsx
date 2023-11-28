import { useState, type FC } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import Headers from "./Headers";
import Card from "./Card";
import useLoader from "../../../../generic/loader";

interface DataItemType {
  title?: string;
  _id?: number;
  price?: number;
  main_image?: string;
}
const FlowerContainer: FC = () => {
  const { flowers_loader } = useLoader();
  const [params] = useSearchParams();

  const category: string = String(params.get("category") ?? "house-plants");
  const range_min: string = String(params.get("range_min") ?? 0);
  const range_max: string = String(params.get("range_max") ?? 1000);
  const active_type: string = String(params.get("type") ?? "all-plants");
  const active_sort: string = String(params.get("sort") ?? "default-sorting");

  const { data, isLoading } = useQuery(
    [`/category/${category}?range_min=${range_min}&range_max=${range_max}`],
    () => {
      return axios
        .get(
          `https://greenshop.abduvoitov.com/api/flower/category/${category}`,
          {
            params: {
              access_token: "6519a32b5bf6635ccba4f9ad",
              range_min,
              range_max,
              active_sort,
              active_type,
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
        <Headers />
        <div className="grid grid-cols-3 gap-4 max-sm:grid-cols-2">
          {isLoading
            ? flowers_loader()
            : data?.map((item: DataItemType, _id: number) => (
                <Card key={item._id} {...item} isLoading={isLoading} />
              ))}
        </div>
      </div>
    </>
  );
};

export default FlowerContainer;
