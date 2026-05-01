"use client";

import { authClient } from "@/lib/auth-client";

const LoginPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signIn.email({
      email,
      password,
    });
  }

  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: "google"
    })
  }

  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center space-y-10">
        <h2 className="font-bold text-3xl">Please Login</h2>

        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form 
              className="card-body"
              onSubmit={onSubmit} 
            >
                <fieldset className="fieldset">
                <label className="label text-black">Email</label>
                <input 
                  className="input"
                  name="email" 
                  placeholder="Email" 
                  type="email" 
                />

                <label className="label text-black">Password</label>
                <input 
                  className="input"
                  name="password" 
                  placeholder="Password" 
                  type="password" 
                />

                <button type="submit" className="btn bg-black mt-4 text-white">Login</button>
                </fieldset>
            </form>

            <div className="flex px-6 items-center gap-2">
              <div className="border grow"></div>
              <span>Or</span>
              <div className="border grow"></div>
            </div>

            <div className="py-6 flex justify-center">
              <button
                onClick={handleGoogleLogin}
                className="btn bg-white text-black border-[#e5e5e5]"
              >
                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                Login with Google
              </button>
            </div>
        </div>
    </section>
  )
}

export default LoginPage
