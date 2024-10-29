import MailIcon from "@/icons/mail-icon";
import Link from "next/link";
import React from "react";
import OurPartners from "./our-partners";

export default function HomeHero() {
  return (
    <div className="relative isolate overflow-hidden pt-14">
      <img
        src="/home-hero-bg.png"
        width={1920}
        height={1080}
        alt="Home Hero Background"
        className="absolute inset-0 -z-10 h-full w-full "
      />
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-40"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-3xl py-10 sm:py-14 lg:py-[4.5rem]  ">
        <div className="text-center px-4 md:px-0">
          <h1 className="text-3xl md:text-5xl  font-display ">
            Build Your Brand with Visperah Let&apos;s Grow Together.
          </h1>
          <p className="mt-6 lg:text-base text-sm leading-6 text-gray-700 max-w-md mx-auto">
            We are a full-service digital agency, specializing in modern
            technology,With the best service and professional people
          </p>
          <div className="mt-6 flex items-center justify-center gap-x-4">
            <Link
              href="#"
              className="rounded-lg bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400 drop-shadow-md"
            >
              <span>Get a Quote</span>
              <MailIcon className="size-4 inline ml-2 mb-px" />
            </Link>
            <Link
              href="#"
              className=" px-3.5 py-2 text-sm font-semibold leading-6 bg-white border border-gray-300 rounded-lg"
            >
              See our work
            </Link>
          </div>
        </div>
        <OurPartners />
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
}
