import { RainbowButton } from "@/components/ui/rainbow-button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeroImage from "@/public/invoice-mosalah-project.png";

function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center py-12 lg:py-20">
      <div className="text-center">
        <span className="text-sm text-primary font-medium tracking-tight bg-primary/10 px-4 py-2 rounded-lg">
          Introducing Invoice MoSalah 1.0
        </span>
        <h1 className="mt-8 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tighter">
          Invoicing made{" "}
          <span className="block -mt-2 bg-gradient-to-l from-blue-500 via-teal-500 to-green-500 text-transparent bg-clip-text">
            super easy!
          </span>
        </h1>
        <p className="max-w-xl mx-auto mt-4 lg:text-lg text-muted-foreground">
          Creating Invoices can be a pain! We at Invoice Mo Salah make it super
          easy for you to get paid in time!
        </p>
        <div className="mt-7 mb-12">
          <Link href={`/login`}>
            <RainbowButton>Get Unlimted Access</RainbowButton>
          </Link>
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
        </div>
        <div className="relative items-center flex w-full py-12 mx-auto mt-12">
          <Image
            src={HeroImage}
            alt="Hero Image"
            className="relative object-cover w-full border rounded-lg lg:rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
