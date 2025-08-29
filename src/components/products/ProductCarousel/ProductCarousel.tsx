"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ProductCarousel({
  slides,
}: { slides: { src: string; alt: string; href?: string }[] }) {
  return (
    <div className="overflow-hidden rounded-2xl">
      <Swiper modules={[Navigation, Pagination, Autoplay]} navigation pagination autoplay loop>
        {slides.map((s, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-[320px] w-full sm:h-[420px]">
              {s.href ? (
                <Link href={s.href} className="relative block size-full">
                  <Image src={s.src} alt={s.alt} fill className="object-cover" priority={i === 0} />
                </Link>
              ) : (
                <Image src={s.src} alt={s.alt} fill className="object-cover" priority={i === 0} />
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
