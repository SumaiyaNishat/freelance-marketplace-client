import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from '../../contexts/AuthContext';
import { toast } from "react-toastify";


const Register = () => {
  const { createUser, updateProfileFunc, signOutUser, signInWithGoogle } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setLoading(true);

    const displayName = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    
    if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain at least one uppercase letter");
      setLoading(false);
      return;
    }
    if (!/[a-z]/.test(password)) {
      toast.error("Password must contain at least one lowercase letter");
      setLoading(false);
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      setLoading(false);
      return;
    }

    createUser(email, password)
      .then((res) => {
        updateProfileFunc(displayName, photoURL)
          .then(() => {
            console.log(res);
          })
          .catch((e) => {
            console.error(e);
          });
        console.log(res);
        setLoading(false);
        signOutUser().then(() => {
          toast.success("Signup successful");
          navigate("/auth/login");
        });
      })
      .catch((e) => {
        setLoading(false);
        toast.error(e.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        toast.success("Google login successful!");
        navigate("/"); 
      })
      .catch(error => {
        console.error(error);
        toast.error("Google login failed: " + error.message);
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
          <h1 className="text-3xl font-bold text-blue-800 mb-3">Create Your Account</h1>
          <p className="text-blue-600 font-semibold">
            Join our community and unlock exclusive features. Your journey begins here!
          </p>
        </div>
      </div>

      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">Register your Account</h2>
        <div className="card-body">
          <form onSubmit={handleRegister} className="space-y-2">
            <label className="label">Name</label>
            <input type="text" name="name" className="input" placeholder="Name" />

            <label className="label">Photo URL</label>
            <input type="text" name="photoURL" className="input" placeholder="Photo URL" />

            <label className="label">Email</label>
            <input type="email" name="email" className="input" placeholder="Email" />

            <label className="label">Password</label>
            <input type="password" name="password" className="input" placeholder="******" />

            <button className="btn btn-neutral mt-4 w-full" disabled={loading}>
              {loading ? "Registering..." : "Register"}
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
              Already Have An Account?{" "}
              <Link className="text-blue-600" to="/auth/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
