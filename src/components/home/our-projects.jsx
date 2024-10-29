import ArrowLongLeft from "@/icons/arrow-long-left";
import ArrowLongRight from "@/icons/arrow-long-right";
import ArrowTopRight from "@/icons/arrow-top-right";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

export default function OurProjects() {
  const splideRef = useRef(null);

  const goNext = () => {
    if (splideRef.current) splideRef.current.splide.go(">");
  };

  const goPrev = () => {
    if (splideRef.current) splideRef.current.splide.go("<");
  };
  return (
    <div className="mb-14">
      <div className="xl:container mx-auto px-4 md:px-6 lg:px-8  ">
        <div className="flex justify-between items-end gap-4">
          <h1 className="font-display lg:text-4xl md:text-2xl text-xl max-w-md">
            Checkout some of our projects
          </h1>
          <div className="inline-flex">
            <button
              onClick={goPrev}
              className="active:scale-90 transition ease-in-out duration-200"
            >
              <ArrowLongLeft className="lg:size-12 md:size-10 size-8  " />
            </button>
            <button
              onClick={goNext}
              className="active:scale-90 transition ease-in-out duration-200"
            >
              <ArrowLongRight className="lg:size-12 md:size-10 size-8 " />
            </button>
          </div>
        </div>
      </div>
      <div className="2xl:container mx-auto pl-4 sm:pl-6 lg:pl-8 xl:pl-16 2xl:pl-8 md:mt-6 mt-2">
        <Splide
          options={{
            perPage: 2.5,
            perMove: 1,
            gap: "20px",
            arrows: false,
            type: "loop",
            padding: { right: "5%" },
            breakpoints: {
              640: {
                perPage: 1.5,
              },
            },
          }}
          hasTrack={false}
          ref={splideRef}
        >
          <SplideTrack>
            <Slide
              imgSrc={"/alsadarah-project.png"}
              link={"https://alsadaraco.com"}
            />
            <Slide imgSrc={"/kafu-card-admin.png"} />
            <Slide
              imgSrc={"/kafu-card-app-project.png"}
              link={"https://kafucard.com"}
            />
          </SplideTrack>
        </Splide>
      </div>

      <div className="xl:container mx-auto px-4 md:px-6 lg:px-8  lg:mt-6 md:mt-4">
        <Link
          href={"#"}
          className="rounded-lg inline-flex items-center gap-2 px-5 py-3 text-white bg-black transition duration-200 hover:shadow-lg text-xs md:text-sm lg:text-base"
          target="__blank"
          rel="noopener noreferrer"
        >
          <span>View All Projects</span>
        </Link>
      </div>
    </div>
  );
}

function Slide({ link, imgSrc }) {
  return (
    <SplideSlide>
      <div className="space-y-3">
        <Image
          src={imgSrc}
          width={800}
          height={400}
          alt="Alsadarah Project"
          className=" md:rounded-xl rounded-lg"
        />
        <div className="flex items-center gap-4">
          {link ? (
            <Link
              href={link}
              className="rounded-full border border-black inline-flex items-center gap-2 lg:px-5 lg:py-3 md:px-3 md:py-2 px-2 py-1 hover:text-white hover:bg-black transition duration-200 text-xs md:text-sm lg:text-base font-medium"
              target="__blank"
              rel="noopener noreferrer"
            >
              <span>
                Visit <span className="hidden md:inline">Website</span>
              </span>
              <ArrowTopRight className="lg:size-5 md:size-4 size-3 " />
            </Link>
          ) : null}
        </div>
      </div>
    </SplideSlide>
  );
}
