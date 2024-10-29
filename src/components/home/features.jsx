import React from "react";
const features = [
  {
    title: "Client-Centered Approach",
    desc: "We put your business challenges at the heart of everything we do. We listen to your needs, analyze the root of the problem, and develop customized solutions that deliver real impact.",
  },
  {
    title: "Problem-Solving Mindset",
    desc: "We approach every project as problem-solvers. Whether you need help with your branding, website, or digital marketing, we’re here to solve the challenges that are holding your business back.",
  },
  {
    title: "Fast Growth",
    desc: "Our services don’t just solve short-term issues— they lay the groundwork for sustained, long-term growth. From creating a unique brand identity to managing your social media presence.",
  },
  {
    title: "Commitment to Quality",
    desc: "We hold ourselves to high standards, ensuring that the work We deliver meets your expectations and industry benchmarks. Our focus is on providing consistent quality.",
  },
  {
    title: "Results You Can Measure",
    desc: "We don’t just promise results; we deliver. Whether it’s improving your website’s performance, increasing user engagement, or driving more leads, our goal is to provide solutions that have tangible.",
  },
];
export default function Features() {
  return (
    <section className="my-12">
      <div className="xl:container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h6 className="text-sm md:text-base text-purple-500 font-medium text-center md:text-left mb-2">
              Why work with Visperah
            </h6>
            <h2 className="md:text-5xl text-2xl text-center md:text-left font-display md:px-0 px-10">
              Invest in Quality and See the Return
            </h2>
          </div>
          {features.map((feature, key) => (
            <FeatureCard feature={feature} key={key} />
          ))}
        </div>
      </div>
    </section>
  );
}

const FeatureCard = ({ feature }) => {
  return (
    <div className="relative border-dashed border border-gray-300 rounded-lg p-4 space-y-2">
      <span className="absolute top-0 left-0 -translate-x-2 -translate-y-2 size-4 bg-purple-500 rounded-sm"></span>
      <h2 className="font-display text-xl">{feature.title}</h2>
      <p className="lg:text-base md:text-sm text-xs leading-5">
        {feature.desc}
      </p>
    </div>
  );
};
