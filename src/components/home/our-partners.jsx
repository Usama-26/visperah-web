import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import Image from "next/image";
import React from "react";

export default function OurPartners() {
  return (
    <div className="lg:pt-20 pt-10 space-y-6 max-w-screen-lg mx-auto">
      <h4 className="font-jetbrains-mono uppercase md:text-base sm:text-sm text-xs text-center text-gray-500">
        trusted by Our Partners
      </h4>
      {/* <div className="relative before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:w-20 before:bg-gradient-to-r before:from-gray-100/10 before:via-gray-100 before:to-gray-100/10 before:z-20 before:-translate-x-1/2 after:content-[''] after:absolute after:top-0 after:right-0 after:h-full after:w-20 after:bg-gradient-to-l after:from-gray-100/10 after:via-[#e6dbe6]/50 after:to-gray-200/10 after:translate-x-1/2"> */}
      <div>
        <Splide
          extensions={{ AutoScroll }}
          options={{
            arrows: false,
            perPage: 4,
            type: "loop",
            width: "64rem",
            autoScroll: { autoStart: true, speed: 1, pauseOnHover: false },
            breakpoints: {
              640: {
                perPage: 2,
              },
            },
          }}
        >
          <PartnerSlide src={"/partners/ht-dash.png"} />
          <PartnerSlide src={"/partners/genex.png"} />
          <PartnerSlide src={"/partners/kingdom-advisors.png"} />
          <PartnerSlide src={"/partners/seamless-ai.png"} />
          <PartnerSlide src={"/partners/skipmatrix.png"} />
          <PartnerSlide src={"/partners/howtodesignbetter.png"} />
        </Splide>
      </div>
    </div>
  );
}

function PartnerSlide({ src }) {
  return (
    <SplideSlide>
      <Image
        src={src}
        width={400}
        height={150}
        className="w-32 h-16 object-contain"
      />
    </SplideSlide>
  );
}
