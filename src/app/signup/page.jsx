const SignUpPage = () => {
  return (
    <section 
      className="min-h-[80vh] flex flex-col items-center justify-center space-y-10"
    >
      <h2 className="text-2xl font-bold text-neutral-800">Welcome! Please Signup</h2>
      

      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body">
            <fieldset className="fieldset">
              <label className="label text-black">Name</label>
              <input type="name" className="input" placeholder="Name" />

              <label className="label text-black">Email</label>
              <input type="email" className="input" placeholder="Email" />
              <label className="label text-black">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <button type="submit" className="btn bg-black mt-4 text-white">Login</button>
            </fieldset>
          </form>
      </div>
    </section>
  );
};

export default SignUpPage;