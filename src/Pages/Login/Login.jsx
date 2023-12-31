import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import toast from "react-hot-toast";

const Login = () => {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    const toastId = toast.loading("Logging in..");

    signIn(email, password)
      .then((res) => {
        console.log(res.user);
        e.target.reset;
        toast.success("Logged in successfully", { id: toastId });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
        setLoginError("Invalid email or password. Please try again.");
      });
  };

  return (
    <>
      <div className="hero md:px-6 md:my-12">
        <div className=" w-full md:max-w-[500px] shadow-2xl">
          <form
            onSubmit={handleLogin}
            className="card-body w-full md:w-[420px] mx-auto"
          >
            <h2 className="text-xl md:text-3xl text-center font-semibold mb-[12px]">
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
                onBlur={(e) => setEmail(e.target.value)}
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
                onBlur={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn bg-black hover:bg-green-600 text-white"
              >
                Login
              </button>
            </div>
            <h2 className="text-center text-lg font-medium">
              Dont Have An Account?{" "}
              <Link to="/register">
                <span className="text-red-600">Register</span>
              </Link>{" "}
            </h2>
            {loginError && (
              <p className="text-red-500 font-medium text-center">
                {loginError}
              </p>
            )}
          </form>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </>
  );
};

export default Login;
