import axios from "axios";
import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { Helmet } from "react-helmet-async";

const Services = () => {
  const [services, setServices] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredServices, setFilteredServices] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/services").then((data) => {
      setServices(data.data);
      setFilteredServices(data.data);
    });
  }, []);

  const handleInputChange = (event) => {
    event.preventDefault();
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    console.log("search value", searchValue);
    const filteredServices = services.filter((service) => {
      const serviceName = service.serviceName.toLowerCase();
      const search = searchValue.toLowerCase();
      console.log("serviceName:", serviceName);
      return serviceName.includes(search);
    });
    setFilteredServices(filteredServices);
  };

  return (
    <div>
      <Helmet>
        <title>HandyMate | Services in Bangladesh</title>
      </Helmet>
      <div>
        <div className="relative overflow-hidden bg-white">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
            <div className="text-center text-gray-800">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                Discover Our Services
              </h1>

              <p className="text-lg mb-6">
                Elevate your business with insights from industry experts.
              </p>

              <div className="mx-auto max-w-xl relative">
                <div className="flex items-center border border-gray-300 rounded">
                  <input
                    type="text"
                    placeholder="Search for services"
                    className="py-2 px-4 focus:outline-none flex-grow"
                    value={searchValue}
                    onChange={handleInputChange}
                  />
                  <button
                    className="bg-blue-500 text-white py-2 px-4 rounded-r"
                    onClick={handleSearch}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-5 md:max-w-[1200px] mx-auto py-12">
        {filteredServices.length > 0 ? (
          filteredServices.map((service) => (
            <ServiceCard key={service._id} service={service} />
          ))
        ) : (
          <div className="text-center font-bold text-3xl text-gray-800">
            <p>No matching services found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
