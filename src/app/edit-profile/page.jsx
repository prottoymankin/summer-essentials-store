"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const ProfileEditPage = () => {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const image = e.target.image.value;

    await authClient.updateUser({
      name,
      image
    });

    router.push("/my-profile");
  }

  return (
    <section 
      className="flex flex-col gap-6 items-center justify-center max-w-7xl mx-auto py-10 text-neutral-800"
    >
      <h1 className="text-3xl font-bold">Update your profile</h1>

      <div 
        className="border border-gray-300 card w-full max-w-lg shrink-0 shadow-xl"
      >
        <form 
          className="card-body"
          onSubmit={onSubmit}
        >
          <fieldset className="fieldset">
            <label 
              className="font-medium label text-base text-neutral-800"
            >
              Name
            </label>
            <input 
              className="input rounded-full w-full"
              name="name"
              placeholder="Name"
              required
              type="text"
            />

            <label 
              className="font-medium label text-base text-neutral-800"
            >
              Image URL
            </label>
            <input 
              className="input rounded-full w-full"
              name="image"
              placeholder="Image URL"
              required
              type="text" 
            />
            
            <button 
              className="btn btn-neutral mt-4 rounded-full"
              type="submit"
            >
              Update
            </button>
          </fieldset>
        </form>
      </div>
    </section>
  );
};

export default ProfileEditPage;