"use client";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  landscape?: boolean;     // true = 4:3, false = 3:4
  className?: string;
};

export default function TabletMock({ src, alt, landscape = true, className = "" }: Props) {
  const ratio = landscape ? "aspect-[4/3]" : "aspect-[3/4]";

  return (
    <div className={`relative mx-auto w-full max-w-xl ${ratio} ${className}`}>
      {/* carcasa */}
      <div className="absolute inset-0 rounded-[28px] border border-zinc-300 bg-gradient-to-br from-zinc-300 to-zinc-100 shadow-xl" />
      {/* bisel negro */}
      <div className="absolute inset-1.5 rounded-[24px] bg-black/90" />
      {/* cámara frontal */}
      <div className="absolute left-1/2 top-2 size-1.5 -translate-x-1/2 rounded-full border border-white/20 bg-black/70" />
      {/* botones laterales (puramente decorativos) */}
      <div className="absolute -left-1.5 top-16 h-12 w-1.5 rounded bg-zinc-300" />
      <div className="absolute -right-1.5 top-28 h-20 w-1.5 rounded bg-zinc-300" />
      {/* pantalla */}
      <div className="absolute inset-4 overflow-hidden rounded-[18px] bg-zinc-900">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain"   // ← sin recorte
          sizes="(max-width:768px) 100vw, 50vw"
          priority={false}
        />
        {/* reflejo suave */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
      </div>
      {/* aro sutil */}
      <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-black/5" />
    </div>
  );
}
