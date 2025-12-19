import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from '../../contexts/AuthContext';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then(() => {
        toast.success("Login successful!");
        navigate("/");  page
      })
      .catch((err) => {
        toast.error(err.message);
      })
      .finally(() => setLoading(false));
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        toast.success("Google login successful!");
        navigate("/");
      })
      .catch((err) => {
        toast.error("Google login failed: " + err.message);
      });
  };

  return (
    <div className="flex justify-center min-h-screen items-center bg-blue-100">
      <div className="hidden lg:flex w-1/2 items-center justify-center">
        <div className="max-w-md text-center px-8 flex flex-col items-center">
          <img
            src="https://i.ibb.co.com/LXNqS4SY/freelance-icon-vector-image-can-be-used-design-120816-245926.avif"
            className="rounded-full w-25 h-25"
            alt=""
          />
          <h1 className="text-3xl font-bold text-blue-800 mb-3">Welcome Back</h1>
          <p className="text-blue-600 font-semibold">
            Login to your account to continue your journey.
          </p>
        </div>
      </div>

      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">Login</h2>
        <div className="card-body">
          <form onSubmit={handleLogin} className="space-y-2">
            <label className="label">Email</label>
            <input type="email" name="email" className="input" placeholder="Email" />

            <label className="label">Password</label>
            <input type="password" name="password" className="input" placeholder="******" />

            <p className="text-right text-sm text-blue-600 cursor-pointer">Forget Password?</p>

            <button className="btn btn-neutral mt-4 w-full" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>

            <div className="flex items-center justify-center gap-2 my-2">
              <div className="h-px w-16 bg-black/30"></div>
              <span className="text-sm text-black/70">or</span>
              <div className="h-px w-16 bg-black/30"></div>
            </div>

            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="flex items-center justify-center gap-3 bg-gray-200 text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-300 transition-colors cursor-pointer"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="google"
                className="w-5 h-5"
              />
              Continue with Google
            </button>

            <p className="font-semibold text-center pt-5">
              Don't have an account?{" "}
              <Link className="text-blue-600" to="/auth/register">Register</Link>
            </p>
          </form>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Login;
