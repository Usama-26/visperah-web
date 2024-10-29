import Link from "next/link";
import React from "react";

export default function WhoWeAre() {
  return (
    <section className="my-6 lg:my-16">
      <div className="xl:container mx-auto px-4 sm:px-6 lg:px-8">
        <h6 className="text-purple-500 text-sm lg:text-base font-medium">
          Who We Are ?
        </h6>
        <div className="mt-4 flex flex-col gap-10 lg:gap-16 md:justify-between md:flex-row">
          <div className="space-y-2 md:basis-1/2">
            <h2 className="font-display text-2xl lg:text-4xl">
              We always prioritize quality, unique style & on time delivery
            </h2>
            <p className="text-justify leading-6 lg:w-11/12 lg:text-base md:text-sm text-xs text-gray-600">
              At Visperah, we combine quality, unique style, and user-driven
              solutions to deliver beyond expectations. Every project is crafted
              with precision, bringing your vision to life and enhancing it with
              our expertise.
            </p>
            <div className="pt-3 lg:translate-y-3">
              <Link
                href="#"
                className="rounded-lg bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400 drop-shadow-md"
              >
                <span>Learn More</span>
              </Link>
            </div>
          </div>
          <div className="px-4 lg:px-0 grid grid-cols-2 gap-x-10 lg:gap-x-16 gap-y-6 md:gap-y-0 md:basis-1/2">
            <div className="grid grid-cols-2">
              <span className="font-medium text-2xl md:text-3xl lg:text-5xl">
                03+
              </span>
              <h6 className="text-sm md:text-base lg:text-lg">
                Years of Experience
              </h6>
            </div>
            <div className="grid grid-cols-2">
              <span className="font-medium text-2xl md:text-3xl lg:text-5xl">
                15+
              </span>
              <h6 className="text-sm md:text-base lg:text-lg">
                Projects Completed
              </h6>
            </div>
            <div className="grid grid-cols-2">
              <span className="font-medium text-2xl md:text-3xl lg:text-5xl">
                12+
              </span>
              <h6 className="text-sm md:text-base lg:text-lg">
                Trusted <br className="hidden lg:block" /> Partners
              </h6>
            </div>
            <div className="grid grid-cols-2 ">
              <span className="font-medium lg:font-semibold text-lg md:text-2xl lg:text-4xl">
                100%
              </span>
              <h6 className="text-sm md:text-base lg:text-lg">
                Customer Satisfaction
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
