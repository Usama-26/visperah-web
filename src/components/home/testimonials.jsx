import React from "react";

export default function Testimonials() {
  return (
    <section className="py-10 md:py-14  bg-neutral-100">
      <div className="xl:container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-4xl font-display text-center mb-8">
          Our happy Clients
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {Array.from({ length: 6 }, (_, i) => (
            <TestimonialCard key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

const TestimonialCard = () => {
  return (
    <div className="rounded-md bg-white px-4 py-6 space-y-3 shadow">
      <h4 className="italic font-medium text-base md:text-lg">Jane Cooper</h4>
      <p
        className="text-xs md:text-sm lg:text-base
       text-gray-500"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cum
        fugit temporibus, molestias illo repellat blanditiis hic sequi omnis
        fugiat.
      </p>
    </div>
  );
};
