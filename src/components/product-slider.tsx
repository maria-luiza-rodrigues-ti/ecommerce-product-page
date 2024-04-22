import { useState } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "swiper/css/navigation";

import { FreeMode, Thumbs, Navigation } from "swiper/modules";
import { ProductImageProps } from "../app";

interface ProductSliderProps {
  onProductImages: () => ProductImageProps[];
}

export function ProductSlider({ onProductImages }: ProductSliderProps) {
  const images = onProductImages();
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [isButtonActive, setIsButtonActive] = useState(0);

  function handleSlideActive(index: number) {
    setIsButtonActive(index);
  }

  return (
    <div className="max-w-full md:max-w-[445px]">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          320: {
            spaceBetween: 0,
          },
          600: {
            spaceBetween: 10,
          },
        }}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Thumbs, Navigation]}
        className="mb-0 md:mb-8"
      >
        {images &&
          images.map((image) => (
            <SwiperSlide key={image.id}>
              <img
                src={image.image}
                alt={image.alt}
                className="md:rounded-[15px]"
              />
            </SwiperSlide>
          ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={30}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className="hidden md:block"
      >
        {images &&
          images.map((image, index) => (
            <SwiperSlide
              key={image.id}
              onClick={() => handleSlideActive(index)}
            >
              <img
                src={image.thumb}
                alt={image.alt}
                className={`rounded-[10px]  transition-all hover:opacity-100 ${
                  index === isButtonActive
                    ? "border-2 border-orange opacity-100"
                    : "opacity-50"
                }`}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
