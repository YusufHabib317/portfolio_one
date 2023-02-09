import { serviceFinishes, services } from "../../data/Data";
import { SectionTitle } from "../sectionTitle/SectionTitle";

const Services = () => {
  return (
    <div id="services" className="section">
      <SectionTitle title={"What I do"} />

      <div className="grid sm:grid-cols-2 gap-8">
        {services.map((service, idx) => {
          return (
            <div
              key={idx}
              className="flex gap-4 p-4 hover:bg-red-100 rounded-lg"
            >
              <div className="text-red-500 text-[2rem]">{service.icon}</div>
              <div>
                <h3 className="font-bold text-xl">{service.title}</h3>
                <p className="opacity-80 mt-4 text-[0.9rem]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Debitis, minus explicabo nemo praesentium quis illo blanditiis
                  perferendis soluta fugit enim! Earum consectetur sit assumenda
                  omnis animi cupiditate temporibus fugit repudiandae!
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 mt-12 gap-4">
        {serviceFinishes.map((serviceFinishe, idx) => {
          return (
            <div
              key={idx}
              className="text-center border border-solid border-grey p-8 rounded-md"
            >
              <div className="flex justify-center text-red-500 mb-4 text-[1.5rem]">
                {serviceFinishe.icon}
              </div>
              <div className="mb-4 text-[0.9rem] font-bold">
                {serviceFinishe.text}
              </div>
              <div className="text-5xl text-grey">{serviceFinishe.amount}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
