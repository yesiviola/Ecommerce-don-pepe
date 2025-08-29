"use client";
import { useState } from "react";
import Image, { ImageLoaderProps } from "next/image";

const isDev = process.env.NODE_ENV !== "production";
const rawLoader = ({ src }: ImageLoaderProps) => src; // evita /_next/image

type Tone = "neutral" | "cool" | "warm" | "emerald";
type Ratio = "square" | "landscape" | "portrait";

export default function MediaFrame({
  src,
  alt,
  ratio = "square",
  tone = "neutral",
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  ratio?: Ratio;
  tone?: Tone;
  priority?: boolean;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  const ratioCls =
    ratio === "landscape" ? "aspect-[4/3]" :
    ratio === "portrait"  ? "aspect-[3/4]" :
    "aspect-square";

  const toneBg =
    tone === "cool"
      ? "bg-gradient-to-br from-sky-50 to-indigo-50 before:bg-[radial-gradient(120%_90%_at_20%_10%,rgba(255,255,255,0.85),rgba(255,255,255,0)_55%)]"
      : tone === "warm"
      ? "bg-gradient-to-br from-rose-50 to-amber-50 before:bg-[radial-gradient(120%_90%_at_20%_10%,rgba(255,255,255,0.85),rgba(255,255,255,0)_55%)]"
      : tone === "emerald"
      ? "bg-gradient-to-br from-emerald-50 to-teal-50 before:bg-[radial-gradient(120%_90%_at_20%_10%,rgba(255,255,255,0.85),rgba(255,255,255,0)_55%)]"
      : "bg-gradient-to-br from-white to-zinc-50 before:bg-[radial-gradient(120%_90%_at_20%_10%,rgba(255,255,255,0.9),rgba(255,255,255,0)_55%)]";

  return (
    <div
      className={[
        "relative isolate overflow-hidden rounded-2xl border border-zinc-200",
        "shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]",
        ratioCls,
        toneBg,
        "before:absolute before:inset-0 before:content-['']",
        "after:absolute after:inset-x-10 after:bottom-6 after:h-10 after:rounded-full after:bg-black/10 after:blur-xl after:content-['']",
        "transition hover:ring-1 hover:ring-zinc-300",
        className,
      ].join(" ")}
    >
      {!failed ? (
        <Image
          loader={rawLoader}
          unoptimized={true}            // fuerza evitar optimizer
          src={src}
          alt={alt}
          fill
          sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
          className="object-contain p-6 drop-shadow-[0_12px_28px_rgba(0,0,0,0.18)] sm:p-8"
          priority={priority}
          onError={() => setFailed(true)}
        />
      ) : (
        // Fallback nativo si algo falla
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 size-full object-contain p-6 sm:p-8"
          loading={isDev ? "eager" : "lazy"}
        />
      )}
    </div>
  );
}
