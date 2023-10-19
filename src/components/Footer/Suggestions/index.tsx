import type { FC } from "react";
import { offers } from "../../../utils/offer";

const Suggestions: FC = () => {
  return (
    <>
      <section className="bg-[#f5f5f5]">
        <div className="flex max-md:flex-col">
          <div className="flex [&>*:last-child]:border-none max-md:flex-col">
            {offers.map((item) => (
              <div
                className="pe-[23px] pb-[23px] me-[23px] border-e border-[#46a358] m-[23px] max-md:border-b max-md:border-e-0"
                key={item.id}
              >
                <img
                  className="w-[68px] h-[87px]"
                  src={item.img_url}
                  alt={item.title}
                />
                <h3 className="font-bold text-base mt-[17px] mb-[9px]">
                  {item.title}
                </h3>
                <p className="text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="p-[23px]">
            <h3 className="font-bold text-base mt-[17px] mb-[9px]">
              Would you like to join newsletters?
            </h3>
            <form className="flex w-full h-[40px] mb-[17px]">
              <input
                className="h-full w-4/5 rounded-s-xl pl-[11px] placeholder:font-light"
                type="email"
                placeholder="enter your email address..."
              />
              <button className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white h-full w-1/5 rounded-none rounded-e-xl">
                Join
              </button>
            </form>
            <p className="font-light text-xs leading-6">
              We usually post offers and challenges in newsletter. We’re your
              online houseplant destination. We offer a wide range of
              houseplants and accessories shipped directly from our (green)house
              to yours!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Suggestions;
