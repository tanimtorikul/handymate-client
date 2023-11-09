import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const MySchedules = () => {
  const [bookedServices, setBookedServices] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const userEmail = user?.email;
    axios
      .get(`https://handymate-server.vercel.app/api/bookings/${userEmail}`)
      .then((data) => {
        setBookedServices(data.data);
      });
  }, [user?.email]);

  const handleStatusChange = (bookingId, newStatus) => {
    axios
      .put(`https://handymate-server.vercel.app/api/bookings/${bookingId}`, {
        status: newStatus,
      })
      .then(() => {
        axios
          .get(
            `https://handymate-server.vercel.app/api/bookings/${user?.email}`
          )
          .then((data) => {
            setBookedServices(data.data);
          });
      })
      .catch((error) => {
        console.error("Error updating service status:", error);
      });
  };

  const myBookings = bookedServices.filter(
    (service) => service.userEmail === user?.email
  );

  const myPendingWorks = myBookings.filter(
    (service) => service.status === "Pending"
  );

  return (
    <div>
      <h2 className="text-center text-3xl font-bold">My Schedules</h2>

      <h2 className="text-2xl text-center font-medium my-4">My bookings</h2>
      {myBookings.length > 0 ? (
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {myBookings.map((service) => (
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
        <div className="flex justify-center">
          <p>No services booked.</p>
        </div>
      )}

      <h2 className="text-2xl font-medium text-center my-4">
        My Pending Works
      </h2>
      {myPendingWorks.length > 0 && (
        <div className="max-w-7xl mx-auto mt-8">
          <h2 className="text-center text-3xl font-bold">My Pending Works</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {myPendingWorks.map((pendingService) => (
              <div
                key={pendingService._id}
                className="bg-gray-100 p-4 rounded-lg shadow-lg"
              >
                <div
                  key={pendingService._id}
                  className="bg-gray-100 p-4 rounded-lg shadow-lg"
                >
                  <img
                    src={pendingService.serviceImage}
                    alt={pendingService.serviceName}
                    className="w-48 h-48 object-cover rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold text-center mb-2">
                    {pendingService.serviceName}
                  </h3>
                  <p className="text-gray-600 text-center mb-4">
                    {pendingService.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img
                        src={pendingService.providerImage}
                        alt={pendingService.providerName}
                        className="w-10 h-10 rounded-full"
                      />
                      <p className="ml-2">{pendingService.providerName}</p>
                    </div>
                    <p className="text-gray-600">Date: {pendingService.date}</p>
                  </div>
                  <p className="text-gray-600 mt-4">
                    Instruction: {pendingService.instruction}
                  </p>
                  <p className="text-lg font-bold text-green-600 mt-2">
                    {pendingService.price}
                  </p>
                  <select
                    value={pendingService.status}
                    onChange={(e) =>
                      handleStatusChange(pendingService._id, e.target.value)
                    }
                    className="mt-4 p-2 border border-gray-300 rounded-md"
                  >
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MySchedules;
