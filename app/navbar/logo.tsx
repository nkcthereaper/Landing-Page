"use client";
import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Image
        src="/logo-removebg-preview.png"
        width={80}
        height={80}
        alt="logo"
        priority
      />
    </div>
  );
};

export default Logo;
