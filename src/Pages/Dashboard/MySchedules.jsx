import { useEffect, useState } from "react";
import axios from "axios"; 
import useAuth from "../../hooks/useAuth";

const MySchedules = () => {
  const [bookedServices, setBookedServices] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    const userEmail = user?.email;
    axios
      .get(`http://localhost:5000/api/bookings/${userEmail}`)
      .then((response) => {
        setBookedServices(response.data);
      })
      .catch((error) => {
        console.error("Error fetching booked services:", error);
      });
  }, [user?.email]);

  return (
    <div>
      <h2 className="text-center text-3xl font-bold">My Booked Services</h2>
      {bookedServices.length > 0 ? (
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {bookedServices.map((service) => (
            <div
              key={service._id}
              className="bg-gray-100 p-4 rounded-lg shadow-lg"
            >
              <img
                src={service.serviceImage}
                alt={service.serviceName}
                className="w-48 h-48 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-center mb-2">
                {service.serviceName}
              </h3>
              <p className="text-gray-600 text-center mb-4">
                {service.description}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src={service.providerImage}
                    alt={service.providerName}
                    className="w-10 h-10 rounded-full"
                  />
                  <p className="ml-2">{service.providerName}</p>
                </div>
                <p className="text-gray-600">Date: {service.date}</p>
              </div>
              <p className="text-gray-600 mt-4">
                Instruction: {service.instruction}
              </p>
              <p className="text-lg font-bold text-green-600 mt-2">
                {service.price}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p>No services booked.</p>
      )}
    </div>
  );
};

export default MySchedules;
