import axios from "axios";
import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { Helmet } from "react-helmet-async";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/services").then((data) => {
      setServices(data.data);
    });
  }, []);
  console.log(services);
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
  
          <div className="mt-7 sm:mt-12 mx-auto max-w-xl relative">
            {/* <!-- Form --> */}
            <form>
              <div className="relative z-10 flex space-x-3 p-3 bg-white border rounded-lg shadow-lg shadow-gray-100">
                <div className="flex-[1_0_0%]">
                  <label className="block text-sm font-medium text-gray-800">
                    <span className="sr-only">Search for services</span>
                  </label>
                  <input
                    type="text"
                    className="p-3 block w-full bg-gray-100 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500 text-gray-800"
                    placeholder="Search for services"
                  />
                </div>
                <div className="flex-[0_0_auto]">
                  <a
                    className="p-4 inline-flex justify-center items-center gap-2 rounded-md border border-blue-500 font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm"
                    href="#"
                  >
                    Explore
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
 <div className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto py-12">
 {
     services.map((service) => (
        <ServiceCard key={service._id} service={service} />
      ))
  }
 </div>
   </div>
  
  );
};

export default Services;
