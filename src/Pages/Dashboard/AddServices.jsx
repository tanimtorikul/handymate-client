import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const AddServices = () => {
  const { user } = useAuth();
  const providerEmail = user?.email;
  const providerName = user?.displayName;
  const providerImage = user?.photoURL;
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const serviceImage = form.photoURL.value;
    const serviceName = form.serviceName.value;
    const price = form.price.value;
    const description = form.description.value;
    const serviceArea = form.serviceArea.value;
    const providerDesc = form.providerDesc.value;

    const serviceData = {
      serviceName,
      serviceImage,
      description,
      providerName,
      providerImage,
      providerEmail,
      price,
      serviceArea,
      providerDesc,
    };
    console.log(serviceData);

    axios
      .post("https://handymate-server.vercel.app/api/services", serviceData)
      .then((data) => {
        if (data.data.acknowledged) {
          toast.success("Service added successfully!");
          form.reset();
        } else {
          toast.error("Failed to add the service. Please try again later.");
        }
      });
  };

  return (
    <div className="hero px-6">
      <Helmet>
        <title>HandyMate | Add a Service</title>
      </Helmet>
      <div className="card w-full max-w-4xl shadow-2xl">
        <form onSubmit={handleSubmit} className="card-body w-full mx-auto">
          <h2 className="text-3xl text-center font-semibold mb-6">
            Add a Service
          </h2>
          <div className="border border-gray-300 mb-6"></div>
          <div className="grid grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="text-lg font-semibold mb-2">
                  Photo URL of the Service
                </span>
              </label>
              <input
                type="text"
                name="photoURL"
                placeholder="Enter the picture URL"
                className="input rounded-lg bg-gray-200 mb-2"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-lg font-semibold mb-2">Service Name</span>
              </label>
              <input
                type="text"
                name="serviceName"
                placeholder="Enter the service name"
                className="input rounded-lg bg-gray-200 mb-2"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-lg font-semibold mb-2">
                  Provider's name
                </span>
              </label>
              <input
                type="text"
                name="proividerName"
                defaultValue={providerName}
                className="input rounded-lg bg-gray-200 cursor-not-allowed mb-2"
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-lg font-semibold mb-2">
                  Provider's email
                </span>
              </label>
              <input
                type="email"
                name="providerEmail"
                defaultValue={providerEmail}
                className="input rounded-lg bg-gray-200 mb-2 cursor-not-allowed"
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-lg font-semibold mb-2">Price</span>
              </label>
              <input
                type="text"
                name="price"
                placeholder="Enter the price"
                className="input rounded-lg bg-gray-200 mb-2"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-lg font-semibold mb-2">
                  Provider's Image URL
                </span>
              </label>
              <input
                type="text"
                name="providerImg"
                defaultValue={providerImage}
                className="input rounded-lg bg-gray-200 mb-2 cursor-not-allowed"
                readOnly
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="text-lg font-semibold mb-2">Description</span>
              </label>
              <textarea
                name="description"
                placeholder="Enter a description"
                className="input rounded-lg bg-gray-200 mb-2"
                required
              ></textarea>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-lg font-semibold mb-2">Service Area</span>
              </label>
              <input
                type="text"
                name="serviceArea"
                placeholder="Enter the service area"
                className="input rounded-lg bg-gray-200 mb-2"
                required
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="text-lg font-semibold mb-2">Service Provider's Description</span>
            </label>
            <input
              type="text"
              name="providerDesc"
              placeholder="About Service Provider"
              className="input rounded-lg bg-gray-200 mb-2"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn bg-black hover:bg-green-600 text-white rounded-lg py-2 px-4"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddServices;
