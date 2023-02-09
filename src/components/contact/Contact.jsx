import { Link } from "react-router-dom";
import { contacts } from "../../data/Data";
import { SectionTitle } from "../sectionTitle/SectionTitle";

const Contact = () => {
  return (
    <div id="contact" className="container mx-auto mb-7 px-6">
      <SectionTitle title="Contact" />
      <div className="shadow-lg p-4 max-w-[700px] mx-auto">
        <div className="grid gap-8 sm:grid-cols-3">
          {contacts.map((contact, idx) => {
            const { icon, text } = contact;
            return (
              <div key={idx} className="flex gap-2 items-center flex-col">
                <div>{icon}</div>
                <div>{text}</div>
              </div>
            );
          })}
        </div>
        <div className="mt-8 flex gap-12 flex-wrap justify-center">
          <div>
            <div className="mb-5">
              <input
                type="text"
                className="outline-none border border-solid border-red-500 bg-transparent p-2 text-[0.9rem]"
                placeholder="Name"
              />
            </div>
            <div className="mb-5">
              <input
                type="text"
                className="outline-none border border-solid border-red-500 bg-transparent p-2 text-[0.9rem]"
                placeholder="Email"
              />
            </div>
            <div className="mb-5">
              <input
                type="text"
                className="outline-none border border-solid border-red-500 bg-transparent p-2 text-[0.9rem]"
                placeholder="Budget"
              />
            </div>
          </div>
          <div>
            <textarea
              placeholder="Project Description"
              className="outline-none bg-transparent border border-solid border-red-500 resize-none text-[0.9rem] p-2 h-40 w-80"
            ></textarea>
            <div className="text-end mt-2">
              <Link to="" className="text-[0.9rem] text-red-500 ">
                Send Message
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
