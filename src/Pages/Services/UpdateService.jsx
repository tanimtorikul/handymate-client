import axios from "axios";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const UpdateService = () => {
  const {
    _id,
    serviceName,
    serviceImage,
    description,
    price,
    serviceArea,
    providerDesc,
  } = useLoaderData();
  console.log("image", serviceImage);
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const serviceImage = form.photoURL.value;
    const serviceName = form.serviceName.value;
    const price = form.price.value;
    const description = form.description.value;
    const serviceArea = form.serviceArea.value;
    const providerDesc = form.providerDesc.value;

    const updatedService = {
      serviceImage,
      serviceArea,
      serviceName,
      price,
      description,
      providerDesc,
    };
    console.log(updatedService);

    fetch(`http://localhost:5000/api/services/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedService),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Service Updated successfully!", {
            style: {
              background: "#0074E4",
              color: "white",
              border: "none",
            },
          });
        }
      });
  };
  
  return (
    <div>
      <Helmet>
        <title>HandyMate | Update Service</title>
      </Helmet>
      <div className="card w-full max-w-4xl mx-auto shadow-2xl">
        <form onSubmit={handleUpdate} className="card-body w-full mx-auto">
          <h2 className="text-3xl text-center font-semibold mb-6">
            Update {serviceName}
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
                defaultValue={serviceImage}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-lg font-semibold mb-2">Service Name</span>
              </label>
              <input
                type="text"
                name="serviceName"
                defaultValue={serviceName}
                placeholder="Enter the service name"
                className="input rounded-lg bg-gray-200 mb-2"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="text-lg font-semibold mb-2">Price</span>
              </label>
              <input
                type="text"
                name="price"
                defaultValue={price}
                placeholder="Enter the price"
                className="input rounded-lg bg-gray-200 mb-2"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="text-lg font-semibold mb-2">Description</span>
              </label>
              <textarea
                name="description"
                placeholder="Enter a description"
                defaultValue={description}
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
                defaultValue={serviceArea}
                placeholder="Enter the service area"
                className="input rounded-lg bg-gray-200 mb-2"
                required
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="text-lg font-semibold mb-2">
                Service Providers Description
              </span>
            </label>
            <input
              type="text"
              name="providerDesc"
              defaultValue={providerDesc}
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
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateService;
