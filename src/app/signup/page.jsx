"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const SignUpPage = () => {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
      image,
    });

    if (!error) {
      router.push("/");
    } else {
      toast.error(error.message);
    }
  }

  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: "google"
    })
  }

  return (
    <section 
      className="flex flex-col items-center justify-center min-h-[80vh] py-10 space-y-10"
    >
      <header className="text-center text-slate-900 space-y-1">
        <h2 className="font-bold text-3xl">
          Create an account
        </h2>
        
        <p>
          <span>Already have an account? </span>
          <Link
            className="font-semibold text-blue-600 underline"
            href="/login"
          >
            Login
          </Link>
        </p>
      </header>
      

      <div 
        className="bg-white border border-gray-300 card max-w-lg rounded-2xl shadow-2xl w-full"
      >
          <form 
            className="card-body" 
            onSubmit={onSubmit}
          >
            <fieldset className="fieldset">
              <label 
                className="font-semibold label text-base text-slate-800"
              >
                Name
              </label>
              <input 
                className="input rounded-full w-full focus:border-0 focus:outline-orange-600" 
                name="name" 
                placeholder="Name"
                required 
                type="text" 
              />

              <label 
                className="font-semibold label text-base text-slate-900"
              >
                Image URL
              </label>
              <input 
                className="input rounded-full w-full focus:border-0 focus:outline-orange-600" 
                name="image" 
                placeholder="Image URL"
                required
                type="text" 
              />

              <label 
                className="font-semibold label text-base text-slate-900"
              >
                Email
              </label>
              <input 
                className="input rounded-full w-full focus:border-0 focus:outline-orange-600" 
                name="email" 
                placeholder="Email"
                required 
                type="email" 
              />

              <label 
                className="font-semibold label text-base text-slate-900"
              >
                Password
              </label>
              <input 
                className="input rounded-full w-full focus:border-0 focus:outline-orange-600"
                name="password" 
                placeholder="Password"
                required 
                type="password" 
              />

              <button 
                type="submit" 
                className="bg-orange-600 btn mt-4 rounded-full text-white"
              >
                Login
              </button>
            </fieldset>
          </form>

          <div className="flex px-6 items-center gap-2">
            <div className="border border-gray-300 grow"></div>
            <span>Or</span>
            <div className="border border-gray-300 grow"></div>
          </div>

          <div className="flex justify-center py-6">
            <button
              onClick={handleGoogleLogin}
              className="border border-gray-400 btn rounded-full text-slate-900"
            >
              <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
              Continue with Google
            </button>
          </div>
      </div>
    </section>
  );
};

export default SignUpPage;