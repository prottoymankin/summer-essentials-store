"use client";

import { authClient } from "@/lib/auth-client";

const LoginPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);

    const { data, error } = await authClient.signIn.email({
      email,
      password,
    });

    console.log({data, error});
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
        </div>
    </section>
  )
}

export default LoginPage
