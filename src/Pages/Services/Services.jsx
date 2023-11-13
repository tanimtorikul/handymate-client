import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { Helmet } from "react-helmet-async";

const Services = () => {
  const [services, setServices] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredServices, setFilteredServices] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [servicesPerPage] = useState(6);

  useEffect(() => {
    axios
      .get("https://handymate-server.vercel.app/api/services")
      .then((data) => {
        setServices(data.data);
        setFilteredServices(data.data);
      });
  }, []);

  useEffect(() => {
    Aos.init();
  }, []);

  const handleInputChange = (event) => {
    event.preventDefault();
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    const filteredServices = services.filter((service) => {
      const serviceName = service.serviceName?.toLowerCase();
      const search = searchValue.toLowerCase();
      return serviceName?.includes(search);
    });
    setFilteredServices(filteredServices);
    setCurrentPage(1);
  };

  // Pagination
  const indexOfLastService = currentPage * servicesPerPage;
  const indexOfFirstService = indexOfLastService - servicesPerPage;
  const currentServices = filteredServices.slice(
    indexOfFirstService,
    indexOfLastService
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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

              <p className="text-lg mb-6 ">
                Explore our top-notch handyman services designed to meet your
                needs. Our experts are ready to enhance your space with skillful
                solutions.
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
                    className="bg-green-500 text-white py-2 px-4 rounded-r"
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
      <div
        className="grid md:grid-cols-3 gap-5 md:max-w-[1200px] mx-auto py-12"
        data-aos="zoom-out-up"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="2000"
      >
        {currentServices.length > 0 ? (
          currentServices.map((service) => (
            <ServiceCard key={service._id} service={service} />
          ))
        ) : (
          <div className="text-center font-bold text-3xl text-gray-800">
            <p>No matching services found.</p>
          </div>
        )}
      </div>
      <div className="flex justify-center">
        <ul className="flex space-x-2">
          {Array.from(
            { length: Math.ceil(filteredServices.length / servicesPerPage) },
            (_, index) => (
              <li key={index}>
                <button
                  onClick={() => paginate(index + 1)}
                  className={`${
                    currentPage === index + 1
                      ? "bg-green-500 text-white"
                      : "bg-gray-200 text-gray-800"
                  } py-2 px-4 rounded`}
                >
                  {index + 1}
                </button>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Services;
