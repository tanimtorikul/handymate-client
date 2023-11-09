import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

const ServiceDetail = () => {
  const loadedService = useLoaderData();
  const [providerServices, setProviderServices] = useState([]);

  const { user } = useAuth();
  const userEmail = user?.email;
  //   console.log(user);
  //   console.log(loadedService);

  const {
    _id,
    serviceImage,
    serviceName,
    description,
    providerName,
    providerImage,
    providerEmail,
    serviceArea,
    price,
    providerDesc,
  } = loadedService;

  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const date = form.date.value;
    const instruction = form.instruction.value;
    const provider_email = form.provider_email.value;

    const bookingData = {
      service_id: _id,
      serviceName,
      serviceImage,
      description,
      providerName,
      providerImage,
      date,
      instruction,
      price,
      userEmail,

      provider_email,
    };
    console.log(bookingData);

    axios
      .post("http://localhost:5000/api/bookings", bookingData)
      .then((data) => {
        console.log(data.data);
        if (data.data.acknowledged) {
          document.getElementById("my_modal_3").close();
          toast.success("Your Booking has been successfully confirmed!");
        }
      })
      .catch((error) => {
        document.getElementById("my_modal_3").close();
        toast.error("You have already booked this service!");
      });
  };

  const fetchProviderServices = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/services/provider/${loadedService.providerEmail}`
      );
      setProviderServices(response.data);
    } catch (error) {
      console.error("Error fetching provider services:", error);
    }
  };

  useEffect(() => {
    if (loadedService && loadedService.providerEmail) {
      fetchProviderServices();
    }
  }, [loadedService]);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <Helmet>
        <title>HandyMate | {serviceName} Details</title>
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
        <div className="bg-white p-6 rounded-lg">
          <h2 className="text-3xl font-semibold mb-4">
            Details about {serviceName}
          </h2>
          <img
            src={serviceImage}
            alt={serviceName}
            className="mb-4 rounded-lg w-2/3"
          />
          <p className="text-xl font-semibold mb-2">
            Service Name: {serviceName}
          </p>
          <p className="mb-4">{description}</p>
          <div className="flex items-center mb-4">
            <img
              src={providerImage}
              alt={providerName}
              className="w-12 h-12 rounded-full mr-4"
            />
            <p className="text-lg font-semibold">
              Service Provider: {providerName}
            </p>
          </div>
          <p className="text-2xl text-green-600 font-semibold mb-4">
            Price: {price}
          </p>
          <button
            className="btn"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Book Now
          </button>
          <dialog id="my_modal_3" className="modal ">
            <div className="modal-box h-full">
              <button
                onClick={() => document.getElementById("my_modal_3").close()}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-gray-500 hover:text-red-500 transition duration-300 transform hover:rotate-45"
              >
                ✕
              </button>
              <form
                onSubmit={handleBooking}
                method="dialog"
                className="p-2 bg-white shadow-lg rounded-lg"
              >
                <h3 className="font-bold text-lg md:text-xl text-center text-[#25ad50de]">
                  Book {serviceName}
                </h3>

                <div className="form-group mb-4">
                  <label htmlFor="serviceName" className="text-gray-600">
                    Service Name:
                  </label>
                  <input
                    type="text"
                    defaultValue={serviceName}
                    readOnly
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div className="form-group mb-4">
                  <label htmlFor="serviceImage" className="text-gray-600">
                    Service Image:
                  </label>
                  <input
                    type="text"
                    defaultValue={serviceImage}
                    readOnly
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div className="form-group mb-4">
                  <label
                    htmlFor="serviceProviderEmail"
                    className="text-gray-600"
                  >
                    Service Provider Email:
                  </label>
                  <input
                    type="email"
                    readOnly
                    required
                    defaultValue={providerEmail}
                    name="provider_email"
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div className="form-group mb-4">
                  <label htmlFor="userEmail" className="text-gray-600">
                    User Email:
                  </label>
                  <input
                    type="email"
                    defaultValue={userEmail}
                    readOnly
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div className="form-group mb-4">
                  <label htmlFor="serviceDate" className="text-gray-600">
                    Service Taking Date:
                  </label>
                  <input
                    type="date"
                    name="date"
                    required
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div className="form-group mb-4">
                  <label htmlFor="price" className="text-gray-600">
                    Price:
                  </label>
                  <input
                    type="text"
                    defaultValue={price}
                    readOnly
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div className="form-group mb-4">
                  <label
                    htmlFor="specialInstructions"
                    className="text-gray-600"
                  >
                    Special Instructions:
                  </label>
                  <textarea
                    name="instruction"
                    rows="2"
                    required
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                  ></textarea>
                </div>
                <button
                  className="btn w-full bg-[#25ad50de] text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                  type="submit"
                  id="purchaseButton"
                >
                  Purchase This Service
                </button>
              </form>
            </div>
          </dialog>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-lg mb-4">
          <h2 className="text-3xl font-semibold mb-4">
            About Service Provider
          </h2>
          <p className="mb-2">Name: {providerName}</p>
          <p className="mb-2">Location: {serviceArea}</p>
          <p>Description: {providerDesc}</p>
        </div>

        {providerServices.length > 0 ? (
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg mb-4">
            <h2 className="text-3xl font-semibold mb-4">
              Other Services by {loadedService.providerName}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {providerServices.map((service) => (
                <Link
                  to={`/serviceDetail/${service._id}`}
                  key={service._id}
                  className="text-decoration-none"
                >
                  <div className="bg-white p-4 rounded-lg shadow-lg cursor-pointer">
                    <h3 className="text-xl font-semibold mb-2">
                      {service.serviceName}
                    </h3>
                    <img
                      src={service.serviceImage}
                      alt={service.serviceName}
                      className="mb-2 rounded-lg w-full"
                    />
                    <p className="text-sm mb-2">{service.description}</p>
                    <button className="btn btn-sm w-full">View Details</button>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg mb-4">
            <p className="text-xl font-semibold mb-4">
              {loadedService.providerName} doesnt offer any other services at
              the moment.
            </p>
          </div>
        )}
      </div>
    </div>
  );

  // ...
};

export default ServiceDetail;
