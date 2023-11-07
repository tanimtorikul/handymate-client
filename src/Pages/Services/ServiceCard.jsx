const ServiceCard = ({service}) => {
  console.log(service);
  const {
    service_image,
    service_name,
    service_description,
    service_provider_name,
    service_area,
    price,
  } = service;
  return (
    <div className="bg-white rounded-lg shadow-lg">
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">{service_name}</h2>
        </div>
        <p className="text-gray-600 text-sm mt-2">{service_description}</p>
      </div>
      <div className="p-4">
        <div className="flex items-center">
          <img src={service_image} className="w-8 h-8 rounded-full" />
          <span className="text-gray-700 ml-2">{service_provider_name}</span>
        </div>
        <p className="text-gray-600 text-sm mt-2">{service_area}</p>
        <div className="mt-4">
          <span className="text-xl font-semibold">{price}</span>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg mt-2 hover:bg-blue-600">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
