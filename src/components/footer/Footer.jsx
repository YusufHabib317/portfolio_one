import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container mx-auto p-4 flex flex-wrap items-center justify-between">
      <div className="text-[0.9rem]">
        <Link className="text-blue mr-2">Twitter</Link>
        <Link className="text-blue mr-2">Facebook</Link>
        <Link className="text-blue mr-2">Instagram</Link>
      </div>
      <div className="text-[0.9rem] text-red-500">
        &#169; 2023 All Rights Deserved.
      </div>
    </div>
  );
};

export default Footer;
