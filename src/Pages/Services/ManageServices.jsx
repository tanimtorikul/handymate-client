import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ManageServices = () => {
  const { user } = useAuth();
  const providerEmail = user?.email;
  const providerName = user?.displayName;
  const [userServices, setUserServices] = useState([]);

  useEffect(() => {
    if (providerEmail) {
      axios
        .get(`http://localhost:5000/api/services/provider/${providerEmail}`)
        .then((data) => {
          setUserServices(data.data);
        });
    }
  }, [providerEmail]);

  console.log(userServices);

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/api/services/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              setUserServices((userServices) =>
                userServices.filter((item) => item._id !== _id)
              );
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="container max-auto">
      <h2 className="text-3xl font-bold text-center text-gray-900 mt-8 mb-6">
        Added Services of {providerName}
      </h2>
      <ul className="grid px-2 max-w-7xl mx-auto grid-cols-1 lg:grid-cols-4 gap-8">
        {userServices.map((service) => (
          <div
            key={service._id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <div className="relative">
              <img
                className="md:w-full object-cover object-center"
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
                <Link to={`/updateService/${service._id}`}>
                  <button className="bg-black text-white font-semibold py-2 px-4 rounded-md focus:outline-none flex items-center">
                    <FaEdit className="mr-2" /> Update
                  </button>
                </Link>
                <Link>
                  <button
                    onClick={() => handleDelete(service._id)}
                    className="bg-red-700 text-white font-semibold py-2 px-4 rounded-md focus:outline-none flex items-center"
                  >
                    <FaTrashAlt className="mr-2" /> Delete
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ManageServices;
