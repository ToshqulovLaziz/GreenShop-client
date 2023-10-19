import type { FC } from "react";
import { address } from "../../../utils/address";

const Address: FC = () => {
  return (
    <>
      <section>
        <div className="flex justify-between bg-[#46A3581A] p-[23px] max-lg:flex-col max-lg:justify-center max-lg:items-center gap-3">
          <img
            className="w-[150px] h-[35px]"
            src={
              "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Flogo.svg?alt=media&token=fc9659d6-f435-43b9-a624-8b0d3a574baa"
            }
            alt="Logo greenshop"
          />
          {address.map((item) => (
            <div
              className="flex items-center gap-2 w-[203px] max-lg:justify-center"
              key={item.id}
            >
              <img
                className="w-[20px] h-[20px]"
                src={item.icon}
                alt={item.text}
              />
              <p className="text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Address;
