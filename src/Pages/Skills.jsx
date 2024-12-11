const Skills = () => {
  const techs = [
    {
      id: 1,
      src: "/html.png",
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: "/css.png",
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: "/tailwind.png",
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 4,
      src: "/Bootstrap.png",
      title: "Bootstrap",
      style: "shadow-purple-500",
    },
    {
      id: 5,
      src: "/javascript.png",
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 6,
      src: "/react.png",
      title: "React",
      style: "shadow-blue-600",
    },

    {
      id: 7,
      src: "/github.png",
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 8,
      src: "/nextjs.png",
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];

  return (
    <>
      <div
        name="experience"
        className="bg-gradient-to-b from-gray-800 to-black w-full h-full py-8"
      >
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
          <div className="pb-8">
            <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
              SKILLS
            </p>
            <p className="py-6">These are the technologies I've worked with</p>
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 text-center py-8 px-12 sm:px-0">
            {techs.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              >
                <img src={src} alt={title} className="w-20 mx-auto" />
                <p className="mt-4">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Skills;
