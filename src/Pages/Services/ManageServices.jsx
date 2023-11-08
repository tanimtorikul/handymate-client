import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const ManageServices = () => {
  const { user } = useAuth();
  const providerEmail = user?.email;
  const providerName = user?.displayName;
  const [userServices, setUserServices] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/services/provider/${providerEmail}`)
      .then((data) => {
        setUserServices(data.data);
      });
  }, []);
  console.log(userServices);

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-bold text-center text-gray-900 mt-8 mb-6">
        {providerName}'s Added Services
      </h2>
      <ul className="grid w-[1000px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {userServices.map((service) => (
          <div
            key={service._id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <div className="relative">
              <img
                className="w-full object-cover object-center"
                src={service.serviceImage}
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {service.serviceName}
              </h2>
              <p className="text-gray-600 text-base mb-4">
                {service.description}
              </p>
              <p className="text-indigo-700 font-semibold text-lg mb-4">
                ${service.price}
              </p>
              <p className="text-gray-600 text-base mb-4">
                Service Area: {service.serviceArea}
              </p>
              <p className="text-gray-600 text-base mb-6">
                {service.providerDesc}
              </p>
              <div className="flex justify-between items-center">
                <button className="bg-black text-white font-semibold py-2 px-4 rounded-md focus:outline-none flex items-center">
                  <FaEdit className="mr-2" /> Edit
                </button>
                <button className="bg-red-700 text-white font-semibold py-2 px-4 rounded-md focus:outline-none flex items-center">
                  <FaTrashAlt className="mr-2" /> Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ManageServices;
