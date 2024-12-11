const ProjectCards = ({ product }) => {
  return (
    <>
      <div className="max-w-[340px] bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        {/* Product Image */}
        <div className="group">
          {" "}
          <img
            className="rounded-t-lg w-full h-52 object-contain  group-hover:scale-105 duration-300"
            src={product.image}
            alt=""
          />
        </div>
        {/* Product Details */}
        <div className="p-4">
          <h5 className="text-lg font-bold text-gray-900 truncate">
            {product.name}
          </h5>
          <p className="mt-2 text-sm text-gray-600">{product.description}</p>
          <div className="mt-4 flex items-center justify-between">
            <button className="px-4 py-2 shadow-lg  text-black text-sm font-medium rounded-lg  transition-colors">
              Live Demo
            </button>
            <button className="px-4 py-2 shadow-lg text-black text-sm font-medium rounded-lg  transition-colors">
              View Code
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProjectCards;
