const ServiceCard = ({ service }) => {
  console.log(service);
  const {
    service_image,
    service_name,
    service_description,
    service_provider_name,
    service_provider_image,
    service_area,
    price,
  } = service;
  console.log(service_image);

  return (
    <div className="overflow-hidden rounded-lg shadow-lg" href="#">
      <div className="relative pb-2/3">
        <img
          className="w-full h-full object-cover rounded-t-lg hover:shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-105"
          src={service_image}
          alt={service_name}
        />
      </div>
      <div className="p-4 md:p-5 bg-white">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {service_name}
        </h3>
        <p className="text-gray-600">{service_description}</p>
        <div className="flex items-center mt-3">
          <img
            src={service_provider_image}
            className="w-8 h-8 rounded-full"
            alt={service_provider_name}
          />
          <span className="text-gray-700 ml-2">{service_provider_name}</span>
        </div>
        <p className="text-gray-500 text-sm mt-2">{service_area}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-2xl font-semibold text-blue-600">{price}</span>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-400">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
