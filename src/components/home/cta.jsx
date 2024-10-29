import ArrowRight from "@/icons/arrow-right";
import Image from "next/image";
import React from "react";

export default function CTA() {
  return (
    <section className="relative py-10 md:py-14 bg-black text-white">
      <Image
        src={"/light-rays.jpeg"}
        width={1920}
        height={880}
        className="absolute top-0 left-0 w-full h-full"
        alt="Light Rays Background"
      />
      <div className="relative z-20 xl:container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 lg:space-y-6 text-center max-w-xl mx-auto">
          <h6 className="text-xs md:text-sm lg:text-base text-center">
            Ready to get started?
          </h6>
          <h2 className="text-xl md:text-2xl lg:text-4xl font-display text-center">
            Partner with Visperah Professionals for Customized Solutions
          </h2>
          <h6 className="text-center text-xs md:text-sm lg:text-base lg:px-28 px-10">
            Discuss your project requirements get your project started.
          </h6>
          <button
            type="button"
            className="bg-white text-black rounded-md md:px-4 md:py-3 px-3 py-1.5 text-xs font-medium md:text-sm inline-flex items-center"
          >
            <span>Get Free Consultation</span>
            <ArrowRight className="inline ml-2 size-5 stroke-black" />
          </button>
        </div>
      </div>
    </section>
  );
}
