"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

type Tone =
  | "brand"
  | "blue"
  | "darkBlue"
  | "emerald"
  | "zinc"
  | "blueGradient";

type StyleVariant = "bold" | "glow" | "gradient";

const toneMap: Record<Tone, string> = {
  brand: "bg-brand text-white",
  blue: "bg-sky-700 text-white",
  darkBlue: "bg-indigo-700 text-white",
  emerald: "bg-emerald-700 text-white",
  zinc: "bg-zinc-900 text-white",
  blueGradient:
    "bg-gradient-to-r from-sky-700 via-blue-700 to-blue-600 text-white",
};

// clases para el texto del slide
const styleMap: Record<StyleVariant, string> = {
  bold:
    "font-extrabold tracking-wide uppercase " +
    "text-[13px] sm:text-[14px] md:text-[15px]",
  glow:
    "font-extrabold tracking-wide uppercase " +
    "text-[13px] sm:text-[14px] md:text-[15px] " +
    // brillo suave con drop-shadow (simula text-shadow)
    "drop-shadow-[0_1px_0_rgba(255,255,255,0.25)] drop-shadow-[0_10px_18px_rgba(0,0,0,0.25)]",
  gradient:
    // texto degradé animado
    "bg-clip-text text-transparent font-extrabold tracking-wide uppercase " +
    "text-[13px] sm:text-[14px] md:text-[15px] " +
    "bg-[linear-gradient(90deg,#ffffff,#dbeafe,#bfdbfe,#ffffff)] bg-[length:200%_100%] animate-gradient-x",
};

export default function TopBanner({
  messages,
  interval = 3500,
  tone = "blue",
  styleVariant = "glow",
  className = "",
}: {
  messages: string[];
  interval?: number;
  tone?: Tone;
  styleVariant?: StyleVariant;
  className?: string;
}) {
  return (
    <div
      className={[
        toneMap[tone],
        "text-sm border-b border-white/10 shadow-[inset_0_-1px_0_rgba(255,255,255,0.08)]",
        className,
      ].join(" ")}
      aria-label="Avisos importantes"
    >
      <div className="container py-2">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: interval, disableOnInteraction: false }}
          loop
          className="select-none"
        >
          {messages.map((m, i) => (
            <SwiperSlide key={i}>
              <p className={`text-center ${styleMap[styleVariant]}`}>{m}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
