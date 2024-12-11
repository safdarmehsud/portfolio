import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <>
      <div className="main-navbar flex justify-between shadow-lg mt-3">
        <div className="logo-div">
          <Link to="/home">
            {" "}
            <h1 className="text-3xl p-2 font-bold cursor-pointer">
              Safdar Rehman
            </h1>
          </Link>
        </div>
        <div className="menu ">
          <ul className="flex">
            <Link to="/projects">
              <li className="p-5 font-semibold cursor-pointer">PROJECTS</li>
            </Link>
            <Link to="/skills">
              <li className="p-5 font-semibold cursor-pointer">SKILLS</li>
            </Link>
            <Link to="/about">
              <li className="p-5 font-semibold cursor-pointer">ABOUT</li>
            </Link>
            <Link to="/blog">
              <li className="p-5 font-semibold cursor-pointer">BLOG</li>
            </Link>
          </ul>
        </div>
        <div className="calltoaction-div p-2">
          <button className="h-[50px] w-[120px] bg-purple-500 rounded-lg text-white p-2">
            Get in touch
          </button>
        </div>
      </div>
    </>
  );
};
export default NavigationBar;
