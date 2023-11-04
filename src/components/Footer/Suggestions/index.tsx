import type { FC } from "react";
import { useState, useEffect, useRef } from "react";
import { offers } from "../../../utils/offer";
import axios from "axios";

const Suggestions: FC = () => {
  const [email, setEmail] = useState<string | undefined>(undefined);
  const emailRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    const emailValue = emailRef.current?.value;
    if (emailValue !== undefined) {
      setEmail(emailValue);
    }
  };
  useEffect(() => {
    if (email) {
      axios
        .post(
          "https://greenshop.abduvoitov.com/api/features/email-subscribe?access_token=6519a32b5bf6635ccba4f9ad",
          { email },
          {
            headers: {
              "Content-Type": "application/json",
            },
          },
        )
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [email]);

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
            <form
              className="flex w-full h-[40px] mb-[17px]"
              onSubmit={(evt) => handleSubmit(evt)}
            >
              <input
                className="h-full w-4/5 rounded-s-xl pl-[11px] placeholder:font-light"
                type="email"
                placeholder="enter your email address..."
                ref={emailRef}
              />
              <button className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white h-full w-1/5 rounded-e-xl">
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
