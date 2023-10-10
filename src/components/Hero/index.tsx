import { type FC } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./hero.scss";

const Hero: FC = () => {
  return (
    <>
      <section className="hero  flex w-[80%] mx-auto">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
        >
          <SwiperSlide>
            <div className="flex justify-between items-center">
              <div className="hero__start max-w-3xl">
                <p className="text-base m-0">WELCOME TO GREENSHOP</p>
                <h1 className="text-8xl font-black text-[#3d3d3d] max-2xl:text-6xl max-lg:text-5xl max-md:text-2xl">
                  LET{"'"}S MAKE A BETTER{" "}
                  <span className="text-[#46A358]">PLANET</span>
                </h1>
                <p className="text-sm text-[#727272] w-3/5 mt-[10px] mb-[30px]">
                  We are an online plant shop offering a wide range of cheap and
                  trendy plants. Use our plants to create an unique Urban
                  Jungle. Order your favorite plants!
                </p>
                <Link
                  className="text-white text-base	bg-[#46a358] pt-[6px] pb-[6px] ps-[18px] pe-[18px] rounded-md"
                  to="/"
                >
                  SHOP NOW
                </Link>
              </div>
              <div className="relative">
                <img
                  className="max-md:hidden"
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower1.png?alt=media&token=0b53d608-7264-4c54-b497-a9bf054fcd9d"
                  }
                  alt="flowers"
                />
                <img
                  className="absolute bottom-[-20px]  max-md:hidden max-xl:sticky"
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower2.png?alt=media&token=905a94e2-1250-4e56-9dcb-d16bbb1a31ca"
                  }
                  alt="flowers"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-between items-center">
              <div className="hero__start max-w-3xl">
                <p className="text-base m-0">WELCOME TO GREENSHOP</p>
                <h1 className="text-8xl font-black text-[#3d3d3d] max-2xl:text-6xl max-lg:text-5xl max-md:text-2xl">
                  LET{"'"}S LIVE IN A BETTER{" "}
                  <span className="text-[#46A358]">PLANET</span>
                </h1>
                <p className="text-sm text-[#727272] w-3/5 mt-[10px] mb-[30px]">
                  We are an online plant shop offering a wide range of cheap and
                  trendy plants. Use our plants to create an unique Urban
                  Jungle. Order your favorite plants!
                </p>
                <Link
                  className="text-white text-base	bg-[#46a358] pt-[6px] pb-[6px] ps-[18px] pe-[18px] rounded-md"
                  to="/"
                >
                  LET{"'"}S START
                </Link>
              </div>
              <div className="relative">
                <img
                  className=" max-md:hidden"
                  width={386}
                  height={386}
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fhero-flower-1.png?alt=media&token=74ea8d3d-06b5-41e7-bb12-7caaf3035a6d"
                  }
                  alt="flowers"
                />
                <img
                  className="absolute bottom-0 max-md:hidden max-xl:sticky"
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower2.png?alt=media&token=905a94e2-1250-4e56-9dcb-d16bbb1a31ca"
                  }
                  alt="flowers"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-between items-center">
              <div className="hero__start max-w-3xl">
                <p className="text-base m-0">WELCOME TO GREENSHOP</p>
                <h1 className="text-8xl font-black text-[#3d3d3d] max-2xl:text-6xl max-lg:text-5xl max-md:text-2xl">
                  LET{"'"}S OBSERVE A BETTER{" "}
                  <span className="text-[#46A358]">PLANET</span>
                </h1>
                <p className="text-sm text-[#727272] w-3/5 mt-[10px] mb-[30px]">
                  We are an online plant shop offering a wide range of cheap and
                  trendy plants. Use our plants to create an unique Urban
                  Jungle. Order your favorite plants!
                </p>
                <Link
                  className="text-white text-base inline-block	bg-[#46a358] pt-[6px] pb-[6px] ps-[18px] pe-[18px] rounded-md"
                  to="/"
                >
                  GET CREDITS
                </Link>
              </div>
              <div className="relative">
                <img
                  className="max-md:hidden"
                  width={386}
                  height={386}
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fhero-flower-2.png?alt=media&token=5b5addec-d344-4897-a983-95c9b10a1662"
                  }
                  alt="flowers"
                />
                <img
                  className="absolute bottom-[-10px] max-md:hidden max-xl:sticky"
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower2.png?alt=media&token=905a94e2-1250-4e56-9dcb-d16bbb1a31ca"
                  }
                  alt="flowers"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Hero;
