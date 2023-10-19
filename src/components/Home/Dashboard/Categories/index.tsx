import { useState, type FC, useEffect } from "react";
import axios from "axios";

interface DataItemType {
  title?: string;
  _id?: number;
  count?: number;
  created_at?: Date;
  created_by?: string;
  route_path?: string;
}
const Categories: FC = () => {
  const [data, setData] = useState<DataItemType[]>([]);

  useEffect(() => {
    axios({
      url: "https://greenshop.abduvoitov.com/api/flower/category",
      params: { access_token: "6519a32b5bf6635ccba4f9ad" },
    })
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div>
        <h3 className="mb-[10px] font-bold">Categories</h3>
        <ul className="flex flex-col gap-4 pl-[10px]">
          {data.length > 0 &&
            data?.map((item) => (
              <li
                key={item._id}
                className="flex justify-between text-base font-normal cursor-pointer hover:text-[#46A358] transition-colors"
              >
                <h4>{String(item.title)}</h4>
                <span>({item.count})</span>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default Categories;
