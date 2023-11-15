import type { FC } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import useLoader from "../../../../../generic/loader";

interface DataItemType {
  title?: string;
  _id?: string;
  count?: number;
  created_at?: Date;
  created_by?: string;
  route_path?: string;
}

const Categories: FC = () => {
  const [params, setParams] = useSearchParams();
  const { category_loader } = useLoader();
  const range_min: string = String(params.get("range-min") ?? 0);
  const range_max: string = String(params.get("range-max") ?? 1000);
  const active_type: string = String(params.get("type") ?? "all-plants");
  const active_sort: string = String(params.get("sort") ?? "default-sorting");

  const { data, isLoading } = useQuery(
    "/categories",
    () => {
      return axios({
        url: "https://greenshop.abduvoitov.com/api/flower/category",
        params: {
          access_token: "6519a32b5bf6635ccba4f9ad",
          range_min,
          range_max,
          active_sort,
          active_type,
        },
      }).then((res) => {
        return res.data.data;
      });
    },
    {
      refetchOnWindowFocus: false,
    },
  );

  const active_path: string = String(params.get("category") ?? "house-plants");
  return (
    <>
      <div>
        <h3 className="mb-[10px] font-bold">Categories</h3>
        <ul className="flex flex-col gap-4 pl-[10px]">
          {isLoading
            ? category_loader()
            : data?.map((item: DataItemType) => (
                <li key={item._id}>
                  <div
                    className={`flex justify-between text-base font-normal cursor-pointer hover:text-[#46A358] active:text-[#46A358] transition-colors ${
                      active_path === item.route_path && "text-[#46A358]"
                    }`}
                    onClick={() =>
                      setParams({
                        category: item.route_path as string,
                        range_min,
                        range_max,
                        sort: active_sort,
                        type: active_type,
                      })
                    }
                  >
                    <h4>{String(item.title)}</h4>
                    <span>({item.count})</span>
                  </div>
                </li>
              ))}
        </ul>
      </div>
    </>
  );
};
export default Categories;
