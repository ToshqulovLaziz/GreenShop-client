import { Skeleton } from "antd";

const useLoader = () => {
  const category_loader = (count?: number) => {
    count = count ?? 9;
    return Array.from({ length: count }).map((_, id) => (
      <div key={id}>
        <Skeleton.Input active={true} block={true} />
      </div>
    ));
  };
  const discount_loader = () => {
    return (
      <div className="text-center bg-[#d9fae0] p-2 mt-5">
        <h3 className="text-[#46A358] text-4xl">
          <Skeleton.Input active={true} />
        </h3>
        <p className="mt-[11px] text-base font-bold mb-2">
          UP TO <Skeleton.Button active={true} />% OFF
        </p>
        <Skeleton.Image active={true} />
      </div>
    );
  };
  const flowers_loader = (count?: number) => {
    count = count ?? 9;
    return Array.from({ length: count }).map((_, id) => (
      <div key={id}>
        <div className="group h-[300px] bg-[#f5f5f5] flex justify-center items-center flex-col relative">
          <Skeleton.Image className="w-4/5" active={true} />
        </div>
        <h3 className="font-normal cursor-pointer mt-[12px]">
          <Skeleton.Input active={true} />
        </h3>
        <span className="text-[#46A358] font-bold">
          <Skeleton.Button active={true} />
        </span>
      </div>
    ));
  };
  return {
    category_loader,
    discount_loader,
    flowers_loader,
  };
};

export default useLoader;
