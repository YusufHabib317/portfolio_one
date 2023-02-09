import { Link } from "react-router-dom";

const Navlinks = ({ href, text, setToggle }) => {
  return (
    <div>
      <a href={`#${href}`} className="text-xl">
        {text}
      </a>
    </div>
  );
};

export default Navlinks;
