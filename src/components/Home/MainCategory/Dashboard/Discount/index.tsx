import type { FC } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import useLoader from "../../../../../generic/loader";

interface DataItemType {
  title?: string;
  id?: number;
  discoount_up_to?: number;
  poster_image_url?: string;
}
const Dicount: FC = () => {
  const { discount_loader } = useLoader();
  const { data, isLoading } = useQuery<DataItemType>(
    "/discount",
    () => {
      return axios({
        url: "https://greenshop.abduvoitov.com/api/features/discount",
        params: { access_token: "6519a32b5bf6635ccba4f9ad" },
      }).then((res) => res.data.data);
    },
    {
      refetchOnWindowFocus: false,
    },
  );
  return (
    <>
      <div className="text-center bg-[#d9fae0] p-2 mt-5">
        {isLoading ? (
          discount_loader()
        ) : (
          <div>
            <h3 className="text-[#46A358] text-4xl">{data?.title}</h3>
            <p className="mt-[11px] text-base font-bold">
              UP TO {data?.discoount_up_to}% OFF
            </p>
            <img src={data?.poster_image_url} alt={data?.title} />
          </div>
        )}
      </div>
    </>
  );
};

export default Dicount;
