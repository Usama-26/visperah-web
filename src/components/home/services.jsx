const services = [
  {
    title: "UI/UX Design",
    desc: " Deliver intuitive, user-centered designs that enhance engagement and create lasting connections. Shape memorable experiences with impactful interfaces.",
  },
  {
    title: "Web and Mobile Application Development",
    desc: "Bring your vision to life with dynamic web and app development, crafted for exceptional performance and an outstanding user experience.",
  },
  {
    title: "Video Editing",
    desc: "Enhance your visuals with expert video editing that brings your story to life. Deliver polished, high-impact content that captivates your audience.",
  },
  {
    title: "Social Media Management",
    desc: "Maximize your brand's reach and engagement through strategic, data-driven social media management.",
  },
  {
    title: "Building Memorable Brands with Storytelling",
    desc: "Shape your brand’s identity through powerful storytelling that connects with your audience. Create lasting impressions with narratives that resonate.",
  },
];

export default function Services() {
  return (
    <section className="mt-10 md:mt-14 lg:mt-24 mb-10 md:mb-14 lg:mb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="font-display text-2xl lg:text-4xl text-center lg:mb-6">
            What We Deliver
          </h2>
          <p className="max-w-xl mx-auto text-xs md:text-sm lg:text-base text-center text-gray-500 leading-5">
            Explore a range of specialized services designed to bring your
            vision to life. From concept to execution, we deliver solutions that
            drive results.
          </p>
        </div>

        <div className="mt-8 lg:mt-12 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {services.map((service, key) => (
            <ServiceCard key={key} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white border border-dashed border-gray-300 px-4 pt-6 rounded-xl transition duration-200 ease-in-out hover:scale-105 hover:shadow-lg cursor-pointer ">
      <div className="mb-8">
        <h2 className="text-xl font-display mb-2 h-14">{service.title}</h2>
        <p className="md:text-sm text-xs leading-5 text-gray-500">
          {service.desc}
        </p>
      </div>
    </div>
  );
};
