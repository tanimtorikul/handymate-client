import { Link } from "react-router-dom";
import SocialLogin from "./SocialLogin";

const Login = () => {
  return (
    <>
    <div className="hero px-4 md:px-6 md:my-12">
      <div className="card w-full md:max-w-[500px]  shadow-2xl">
        <form
          className="card-body w-full md:w-[420px] mx-auto"
        >
          <h2 className="text-3xl text-center font-semibold mb-[12px]">
            Login your account
          </h2>
          <p className="border border-[#E7E7E7] mb-6"></p>
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
              placeholder="Enter your password"
              className="input bg-[#F3F3F3]"
              required
            />
            <label className="label">
              <a
                href="#"
                className="label-text-alt link link-hover text-base"
              >
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-black hover:bg-green-600 text-white">
              Login
            </button>
          </div>
          <h2 className="text-center text-lg font-medium">
            Dont Have An Account?{" "}
            <Link to="/register">
              <span className="text-red-600">Register</span>
            </Link>{" "}
          </h2>
          
        </form>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  </>
  );
};

export default Login;
