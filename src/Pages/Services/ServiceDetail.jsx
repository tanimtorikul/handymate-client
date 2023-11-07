import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const ServiceDetail = () => {
  const loadedService = useLoaderData();
  const { user } = useAuth();
  const email = user?.email;
  console.log(user);
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
          <h2 className="text-3xl font-semibold mb-4">
            Details about {service_name}
          </h2>
          <img
            src={service_image}
            alt={service_name}
            className="mb-4 rounded-lg w-2/3"
          />
          <p className="text-xl font-semibold mb-2">
            Service Name: {service_name}
          </p>
          <p className="mb-4">{service_description}</p>
          <div className="flex items-center mb-4">
            <img
              src={service_provider_image}
              alt={service_provider_name}
              className="w-12 h-12 rounded-full mr-4"
            />
            <p className="text-lg font-semibold">
              Service Provider: {service_provider_name}
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
            <div className="modal-box">
              <form
                method="dialog"
                className="p-2 bg-white shadow-lg rounded-lg"
              >
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-gray-500 hover:text-red-500 transition duration-300 transform hover:rotate-45">
                  ✕
                </button>
                <h3 className="font-bold text-xl text-center text-[#25ad50de]">
                  Book {service_name}
                </h3>

                <div className="form-group mb-4">
                  <label htmlFor="serviceName" className="text-gray-600">
                    Service Name:
                  </label>
                  <input
                    type="text"
                    defaultValue={service_name}
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
                    defaultValue={service_image}
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
                    type="text"
                    id="serviceProviderEmail"
                    readOnly
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div className="form-group mb-4">
                  <label htmlFor="userEmail" className="text-gray-600">
                    User Email:
                  </label>
                  <input
                    type="text"
                    defaultValue={email}
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
                    id="serviceDate"
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
                    id="specialInstructions"
                    rows="4"
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                  ></textarea>
                </div>

                <button
                  className="btn w-full bg-[#25ad50de] text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                  type="submit"
                >
                  Purchase This Service
                </button>
              </form>
            </div>
          </dialog>
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
