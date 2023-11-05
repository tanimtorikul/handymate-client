import { Link } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";

const Register = () => {
  const { createUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registerError, setRegisterError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setRegisterError("Password should be at least 6 characters or longer");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError("Password should have at least uppercase character");
      return;
    } else if (!/[^a-zA-Z0-9]/.test(password)) {
      setRegisterError("Password should have at least one special character");
      return;
    }

    createUser(email, password)
      .then((res) => {
        console.log(res.user);

      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="hero px-4 md:px-6 md:my-12">
        <div className="card w-full md:max-w-[500px] shadow-2xl">
          <form
            onSubmit={handleRegister}
            className="card-body w-full md:w-[420px] mx-auto"
          >
            <h2 className="text-3xl text-center font-semibold mb-[12px]">
              Register an account
            </h2>
            <p className="border border-[#E7E7E7] mb-6"></p>
            <div className="form-control">
              <label className="label">
                <span className="text-lg font-semibold mb-2">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input bg-[#F3F3F3] mb-2"
                required
                onBlur={(e) => setName(e.target.value)}
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
                placeholder="Create a password"
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
                Register
              </button>
            </div>
            {registerError && (
              <p className="text-red-600 text-center font-medium">
                {registerError}
              </p>
            )}
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
