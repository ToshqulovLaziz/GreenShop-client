import type { FC } from "react";

const FooterNav: FC = () => {
  return (
    <>
      <section className="flex bg-[#f5f5f5] p-[23px] max-sm:flex-col max-sm:gap-4">
        <div className="flex flex-col  w-[389px] gap-2">
          <h3 className="font-bold">My Account</h3>
          <p>My Account</p>
          <p>Address</p>
          <p>Wishlist</p>
        </div>
        <div className="flex flex-col  w-[389px] gap-2">
          <h3 className="font-bold">Categories</h3>
          <p>House Plants</p>
          <p>Potter Plants</p>
          <p>Seeds</p>
          <p>Small Plants</p>
          <p>Accessories</p>
        </div>
        <div className="flex flex-col  w-[389px]">
          <h3 className="font-bold">Social Media</h3>
          <div className="flex gap-5 mt-4">
            <div className="border border-[#46A35833] w-[30px] h-[30px] flex justify-center items-center cursor-pointer">
              <img
                src={
                  "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Ffacebook.svg?alt=media&token=3db32f6e-a8c2-4dd2-829a-840b16fede49"
                }
                alt="facebook"
              />
            </div>
            <div className="border border-[#46A35833] w-[30px] h-[30px] flex justify-center items-center cursor-pointer">
              <img
                src={
                  "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Finstagram.svg?alt=media&token=3db32f6e-a8c2-4dd2-829a-840b16fede49"
                }
                alt="instagram"
              />
            </div>
            <div className="border border-[#46A35833] w-[30px] h-[30px] flex justify-center items-center cursor-pointer">
              <img
                src={
                  "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Ftwitter.svg?alt=media&token=3db32f6e-a8c2-4dd2-829a-840b16fede49"
                }
                alt="twitter"
              />
            </div>
            <div className="border border-[#46A35833] w-[30px] h-[30px] flex justify-center items-center cursor-pointer">
              <img
                src={
                  "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Flinkedin.svg?alt=media&token=3db32f6e-a8c2-4dd2-829a-840b16fede49"
                }
                alt="linkedin"
              />
            </div>
            <div className="border border-[#46A35833] w-[30px] h-[30px] flex justify-center items-center cursor-pointer">
              <img
                src={
                  "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Funion.svg?alt=media&token=3db32f6e-a8c2-4dd2-829a-840b16fede49"
                }
                alt="youtube"
              />
            </div>
          </div>
          <h3 className="font-bold mt-[33px]">We accept</h3>
          <div className="flex gap-5 mt-4">
            <img
              className="w-[30px] h-[30px]"
              src={
                "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Fpaypal.svg?alt=media&token=51f12650-aff4-485a-bbcb-0ee3f4e64cca"
              }
              alt="paypal"
            />
            <img
              className="w-[30px] h-[30px]"
              src={
                "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Fmastercard.svg?alt=media&token=51f12650-aff4-485a-bbcb-0ee3f4e64cca"
              }
              alt="mastercard"
            />
            <img
              className="w-[30px] h-[30px]"
              src={
                "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Fvisa.svg?alt=media&token=51f12650-aff4-485a-bbcb-0ee3f4e64cca"
              }
              alt="visa"
            />
            <img
              className="w-[30px] h-[30px]"
              src={
                "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Famex.svg?alt=media&token=51f12650-aff4-485a-bbcb-0ee3f4e64cca"
              }
              alt="amex"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default FooterNav;
