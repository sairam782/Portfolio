import Image from "next/image";

// Approved Abhi autograph with a gently pointed A and a transparent background.
export default function BrandMark({ className = "brand-mark" }) {
  return (
    <Image
      className={className}
      src="/assets/brand/abhi-autograph.png"
      width={708}
      height={354}
      alt=""
      aria-hidden="true"
      unoptimized
    />
  );
}
