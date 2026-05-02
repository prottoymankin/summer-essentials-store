"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const LoginPage = () => {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signIn.email({
      email,
      password,
    });

    if (!error) {
      router.replace("/");
      router.refresh();
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
      className="min-h-[80vh] flex flex-col items-center justify-center space-y-10"
    >
      <header className="text-center text-slate-800 space-y-1">
        <h2 className="font-bold text-3xl">
          👋 Welcome back to SunEssentials 👋
        </h2>

        <h3>
          <span>Login to continue shopping, Don’t have an account? </span> 
          <Link 
            className="font-semibold text-blue-600 underline"
            href="/signup"
          >
            Sign up
          </Link>
        </h3>
      </header>

      <div 
        className="border border-gray-300 card max-w-lg overflow-hidden p-6 rounded-2xl shadow-2xl space-y-6 w-full"
      >
        <form 
          className="bg-white card-body p-0"
          onSubmit={onSubmit} 
        >
            <fieldset className="fieldset">
              <label 
                className="font-semibold label text-base text-slate-900"
              >
                Email
              </label>
              <input 
                className="input rounded-full w-full focus:border-0 focus:outline-amber-400"
                name="email" 
                placeholder="Email" 
                type="email" 
              />

              <label 
                className="font-semibold label text-base text-slate-900"
              >
                Password</label>
              <input 
                className="input rounded-full w-full focus:border-0 focus:outline-amber-400"
                name="password" 
                placeholder="Password" 
                type="password" 
              />

              <button 
                type="submit" 
                className="bg-amber-400 btn mt-4 rounded-full text-slate-900"
              >
                Login
              </button>
            </fieldset>
        </form>

        <div className="flex gap-2 items-center">
          <div className="border border-gray-300 grow"></div>
          <span>Or</span>
          <div className="border border-gray-300 grow"></div>
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleGoogleLogin}
            className="border border-gray-400 btn rounded-full text-slate-900"
          >
            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
            Login with Google
          </button>
        </div>
      </div>
    </section>
  )
}

export default LoginPage;