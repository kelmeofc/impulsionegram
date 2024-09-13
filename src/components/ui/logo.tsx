"use client";

import Image from "next/image";
import Link from "next/link";

export default function Logo({ width = "199", height = "36", className }: { width: string, height: string, className?: string }) {
  return (
    <>
      <Link href="/" className={`${className}`}>
        <Image src={'/images/logo.png'} alt="" width={+width} height={+height} />
      </Link>
    </>
  );
}
