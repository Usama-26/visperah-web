import React from "react";

const processSteps = [
  {
    number: "01",
    title: "Discovery & Analysis",
    desc: "We begin by thoroughly understanding your business needs and challenges, forming a strategic approach to address them. This ensures our solution is aligned with your specific goals and long-term vision.",
  },
  {
    number: "02",
    title: "Designing",
    desc: "We begin by thoroughly understanding your business needs and challenges, forming a strategic approach to address them. This ensures our solution is aligned with your specific goals and long-term vision.",
  },
  {
    number: "03",
    title: "Development",
    desc: "We begin by thoroughly understanding your business needs and challenges, forming a strategic approach to address them. This ensures our solution is aligned with your specific goals and long-term vision.",
  },
  {
    number: "04",
    title: "Testing",
    desc: "We begin by thoroughly understanding your business needs and challenges, forming a strategic approach to address them. This ensures our solution is aligned with your specific goals and long-term vision.",
  },
];

export default function Process() {
  return (
    <section className="bg-black text-white pt-8 pb-14">
      <div className="xl:container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 pb-10">
          <h6 className="text-xs md:text-sm lg:text-base">Our Process</h6>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display px-6 max-w-md mx-auto">
            Customized Solutions for Your Business
          </h2>
        </div>

        <div className="lg:mt-16 md:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8">
          {processSteps.map((step, key) => (
            <ProcessStep step={step} key={key} />
          ))}
        </div>
      </div>
    </section>
  );
}

const ProcessStep = ({ step }) => {
  return (
    <div className="space-y-3">
      <h1 className="text-4xl md:text-5xl lg:text-6xl text-neutral-600 font-semibold ">
        {step.number}
      </h1>
      <h2 className="font-medium text-2xl lg:text-3xl font-display md:h-14 h-10">
        {step.title}
      </h2>
      <p className="text-xs md:text-sm lg:text-base leading-5">{step.desc}</p>
    </div>
  );
};
