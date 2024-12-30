import SectionHeading from "@/components/Helper/SectionHeading";
import { servicesData } from "@/Data/data";
import ServiceCard from "./ServiceCard";

const Services = ({ id }: { id: string }) => {
  return (
    <div id={id} className="pt-16 pb-16 bg-[#0f0715]">
      <SectionHeading>Services</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 h-full w-[80%] mx-auto items-center mt-20">
        {servicesData.map((service, index) => {
          return (
            <div
              data-aos="fade-left"
              data-aos-delay={`${index * 150}`}
              data-aos-anchor-placement="top-center"
              key={service.id}
            >
              <ServiceCard service={service} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
