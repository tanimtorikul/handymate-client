import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  // console.log(service);
  const {
    _id,
    serviceImage,
    serviceName,
    description,
    providerName,
    providerImage,
    serviceArea,
    price,
  } = service;
  // console.log(serviceImage);

  return (
    <div className="overflow-hidden rounded-lg shadow-lg" href="#">
      <div className="relative pb-2/3">
        <img
          className="w-full h-full object-cover rounded-t-lg hover:shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-105"
          src={serviceImage}
          alt={serviceName}
        />
      </div>
      <div className="p-4 md:p-5 bg-white">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {serviceName}
        </h3>
        <p className="text-gray-600">{description}</p>
        <div className="flex items-center mt-3">
          <img
            src={providerImage}
            className="w-8 h-8 rounded-full"
            alt={providerName}
          />
          <span className="text-gray-700 ml-2">{providerName}</span>
        </div>
        <p className="text-gray-500 text-sm mt-2">{serviceArea}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-2xl font-semibold text-green-600">{price}</span>
          <Link>
            <button className="px-4 py-2 bg-[#25ad50de] text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-400">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
