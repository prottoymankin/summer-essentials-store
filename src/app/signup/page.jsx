"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

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
    }
  }

  return (
    <section 
      className="min-h-[80vh] flex flex-col items-center justify-center space-y-10"
    >
      <h2 className="text-2xl font-bold text-neutral-800">Welcome! Please Signup</h2>
      

      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={onSubmit}>
            <fieldset className="fieldset">
              <label className="label text-black">Name</label>
              <input 
                name="name" 
                type="text" 
                className="input" 
                placeholder="Name"
                required 
              />

              <label className="label text-black">Image URL</label>
              <input 
                name="image" 
                type="text" 
                className="input" 
                placeholder="Name"
              />

              <label className="label text-black">Email</label>
              <input 
                name="email" 
                type="email" 
                className="input" 
                placeholder="Email"
                required 
              />

              <label className="label text-black">Password</label>
              <input 
                name="password" 
                type="password" 
                className="input"
                placeholder="Password"
                required 
              />

              <button type="submit" className="btn bg-black mt-4 text-white">Login</button>
            </fieldset>
          </form>
      </div>
    </section>
  );
};

export default SignUpPage;