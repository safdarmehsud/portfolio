const Hero = () => {
  return (
    <>
      <div className="hero-main flex flex-col justify-center items-center mt-10">
        <div className="image-div  rounded-full p-3">
          <img
            src="/my-img.jpg"
            alt=""
            className=" rounded-[100%] h-[300px] w-[330px]"
          />
        </div>
        <div className="heading-div p-3">
          <h1 className="text-3xl">
            Hello, I am{" "}
            <strong className="text-purple-600">Safdar Rehman</strong>, Frontend
            Developer
          </h1>
        </div>
        <div className="socialmedia-div p-3">
          <ul className="flex">
            <li>
              <img src="/github.png" alt="" className="h-[60px] w-[60px]" />
            </li>
            <li>
              {" "}
              <img src="/linkedin.png" alt="" className="h-[60px] w-[60px]" />
            </li>
          </ul>
        </div>
        <div className="button-div p-3">
          <button className="h-[50px] w-[120px] bg-purple-500 rounded-lg text-white">
            Contact Me
          </button>
        </div>
      </div>
    </>
  );
};
export default Hero;
