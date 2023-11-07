import React from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetail = () => {
  const loadedService = useLoaderData();
  console.log(loadedService);

  const {
    service_image,
    service_name,
    service_description,
    service_provider_name,
    service_provider_image,
    service_area,
    price,
  } = loadedService;

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1  md:grid-cols-1 gap-8">
        <div className="bg-white p-6 rounded-lg">
          <h2 className="text-3xl font-semibold mb-4">Details about {service_name}</h2>
          <img src={service_image} alt={service_name} className="mb-4 rounded-lg w-2/3" />
          <p className="text-xl font-semibold mb-2">Service Name: {service_name}</p>
          <p className="mb-4">{service_description}</p>
          <div className="flex items-center mb-4">
            <img
              src={service_provider_image}
              alt={service_provider_name}
              className="w-12 h-12 rounded-full mr-4"
            />
            <p className="text-lg font-semibold">Service Provider: {service_provider_name}</p>
          </div>
          <p className="text-2xl text-green-600 font-semibold mb-4">Price: {price}</p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-700">
            Book Now
          </button>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-3xl font-semibold mb-4">Service Provider</h2>
          <p className="mb-2">Name: {service_provider_name}</p>
          <p className="mb-2">Location: {service_area}</p>
          <p>Description: {service_provider_name}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
