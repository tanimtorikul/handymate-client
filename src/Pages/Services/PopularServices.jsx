import Aos from "aos";
import axios from "axios";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PopularServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get("https://handymate-server.vercel.app/api/services")
      .then((response) => {
        setServices(response.data);
      });
  }, []);
  useEffect(() => {
    Aos.init();
  }, []);

  const popularServices = services.slice(0, 4);

  return (
    <div className="py-12">
      <h2 className="text-2xl md:text-4xl text-center font-semibold text-gray-800 mb-12">
        Popular Services
      </h2>
      <div className="grid grid-cols-1 max-w-[1400px] mx-auto md:grid-cols-2 lg:grid-cols-4 gap-4">
        {popularServices.map((service) => (
          <div
            key={service._id}
            className="card bg-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
            data-aos="zoom-in-down"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="2000"
          >
            <div className="image-container relative h-48">
              <img
                className="w-full h-full object-cover rounded-t-lg"
                src={service.serviceImage}
                alt={service.serviceName}
              />
            </div>
            <div className="card-content p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.serviceName}
              </h3>
              <p className="text-gray-600">{service.description}</p>
              <div className="provider-info flex items-center mt-3">
                <img
                  src={service.service_provider_image}
                  className="w-8 h-8 rounded-full"
                  alt={service.providerName}
                />
                <span className="text-gray-700 ml-2">
                  {service.providerName}
                </span>
              </div>
              <div className="price-button flex items-center justify-between mt-4">
                <span className="text-2xl font-semibold text-green-600">
                  {service.price}
                </span>
                <Link to={`/serviceDetail/${service._id}`}>
                  <button className="view-details-button bg-[#25ad50de] text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-400 px-4 py-2">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Link to="/services">
          <button className="show-all-button bg-[#25ad50de] text-white px-6 py-2 rounded-lg hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-400">
            Show All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PopularServices;
