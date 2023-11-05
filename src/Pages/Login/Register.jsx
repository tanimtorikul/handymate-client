import { Link } from "react-router-dom";
import SocialLogin from "./SocialLogin";

const Register = () => {
  return (
    <>
      <div className="hero px-4 md:px-6 md:my-12">
        <div className="card w-full md:max-w-[500px] shadow-2xl">
          <form className="card-body w-full md:w-[420px] mx-auto">
            <h2 className="text-3xl text-center font-semibold mb-[12px]">
              Register an account
            </h2>
            <p className="border border-[#E7E7E7] mb-6"></p>
            <div className="form-control">
              <label className="label">
                <span className="text-lg font-semibold mb-2">
                  Name
                </span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input bg-[#F3F3F3] mb-2"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-lg font-semibold mb-2">
                  Email address
                </span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="input bg-[#F3F3F3] mb-2"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-lg font-semibold mb-2">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Create a password"
                className="input bg-[#F3F3F3]"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-black hover:bg-green-600 text-white">
                Register
              </button>
            </div>
            <h2 className="text-center text-lg font-medium">
              Already have an account?{" "}
              <Link to="/login">
                <span className="text-red-600">Login</span>
              </Link>{" "}
            </h2>
          </form>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </>
  );
};

export default Register;
