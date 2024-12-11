import NavigationBar from "../Components/NavigationBar";
import ProjectCards from "../Components/ProjectCards";

const Projects = ({ product }) => {
  const products = [
    {
      id: 1,
      image: "./project1.png",
      name: "Digital Business Langing Page",
      description: "This is the first product.",
    },
    {
      id: 2,
      image: "./project2.png",
      name: "YouTube Clone",
      description: "This is the first product.",
    },
    {
      id: 3,
      image: "./project3.png",
      name: "Ecommerce website",
      description: "This is the first product.",
    },
    {
      id: 4,
      image: "./project4.png",
      name: "Resturant Website",
      description: "This is the first product.",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
        {products.map((product) => (
          <ProjectCards key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};
export default Projects;
