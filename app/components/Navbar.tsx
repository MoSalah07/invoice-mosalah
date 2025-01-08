import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/warning-gift.gif";
import { buttonVariants } from "@/components/ui/button";
import { RainbowButton } from "@/components/ui/rainbow-button";

function Navbar() {
  return (
    <div className="flex items-center justify-between py-5">
      <Link href={`/`} className="flex items-center gap-4 md:gap-6">
        <Image src={Logo} alt="logo" className="size-10 hidden sm:block" />
        <h3 className="text-lg sm:text-xl md:text-3xl font-semibold">
          Invoice<span className="text-blue-500 ml-2">Mo Salah</span>
        </h3>
      </Link>
      <Link href={``}>
        <RainbowButton>Get Started</RainbowButton>
      </Link>
    </div>
  );
}

export default Navbar;
