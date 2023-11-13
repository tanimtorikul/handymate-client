import useAuth from "../hooks/useAuth";

const ContactForm = () => {
  const { user } = useAuth();
  const userName = user?.displayName;
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      });

      if (response.ok) {
        // Handle success (e.g., show a success message)
        console.log("Form submitted successfully");
      } else {
        // Handle error (e.g., show an error message)
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section className="bg-[#F8F8F8] py-12 px-4 mx-auto max-w-screen-lg">
      <div className="bg-white rounded-lg p-8 shadow-md">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
          Contact Us
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Experiencing home repairs or improvements? Need assistance with a
          handyman task? Interested in our services or have questions about our
          offerings? Let us know how we can help!
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="services"
                className="block text-sm font-medium text-gray-700"
              >
                What type of services do you want?
              </label>
              <input
                type="text"
                name="services"
                className="w-full p-3 bg-gray-100 rounded-md"
                placeholder="e.g., Plumbing, Electrical, Painting"
                required
              />
            </div>
            <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700"
              >
                Your location
              </label>
              <input
                type="text"
                name="location"
                className="w-full p-3 bg-gray-100 rounded-md"
                placeholder="Enter your location"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Your name
              </label>
              <input
                type="text"
                name="name"
                defaultValue={userName}
                readOnly
                className="w-full p-3 bg-gray-100 rounded-md"
                required
              />
            </div>
            <div>
              <label
                htmlFor="mobile"
                className="block text-sm font-medium text-gray-700"
              >
                Your mobile number
              </label>
              <input
                type="text"
                name="mobile"
                className="w-full p-3 bg-gray-100 rounded-md"
                placeholder="Your mobile number"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Your message
            </label>
            <textarea
              name="message"
              rows="3"
              className="w-full p-3 bg-gray-100 rounded-md"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-[#533232] text-white font-medium text-center rounded-md hover:bg-gray-800 focus:outline-none focus:ring focus:border-primary-500"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
