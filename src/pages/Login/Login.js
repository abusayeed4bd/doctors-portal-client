import React from "react";
import { Link } from "react-router-dom";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="text-xl text-center">Login</h2>
          <form className="grid grid-cols-1 gap-4 my-5">
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Email Address"
                class="input input-bordered w-full max-w-xs"
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                class="input input-bordered w-full max-w-xs"
              />
            </div>
            <input
              type="submit"
              value="Login"
              class="btn btn-accent w-full max-w-xs"
            />
          </form>
          <p>
            New to Doctors Portal ?{" "}
            <Link className=" text-primary" to="/register">
              Create New Account
            </Link>
            <div class="flex flex-col w-full border-opacity-50">
              <div class="divider">OR</div>
            </div>
            <button
              onClick={handleGoogleSignIn}
              className="btn btn-accent btn-outline btn-sm w-full max-w-xs uppercase"
            >
              Continue with Google
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
