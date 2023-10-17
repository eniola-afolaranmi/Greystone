"use client";
import Image from "next/image";

export default function BackgroundImage({ src, alt }) {
  return (
    <Image
      src={src}
      alt={alt}
      sizes="100vw"
      fill
      style={{ objectFit: "cover", zIndex: -1 }}
    />
  );
}
