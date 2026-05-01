"use client";

import { authClient } from "@/lib/auth-client"
import Image from "next/image"
import Link from "next/link";

const MyProfilePage = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  return (
    <section className="max-w-7xl mx-auto px-4 py-10 ">
      <div 
        className="border border-gray-300 max-w-xl mx-auto p-6 rounded-2xl  shadow-xl space-y-4"
      >
        <div 
          className="border-4 border-green-500 h-50 mx-auto overflow-hidden relative rounded-full w-50"
        >
          <Image
            alt={user?.name}
            className="object-cover"
            fill
            src={user?.image}
          />
        </div>
        
        <div className="font-bold text-center">
          <h2 className="text-2xl">{user?.name}</h2>
          <h3>{user?.email}</h3>
        </div>

        <div className="flex justify-center">
          <Link 
            className="btn btn-primary rounded-full"
            href="/edit-profile"
          >
            Edit Profile
          </Link>
        </div>
      </div>
    </section>
  )
}

export default MyProfilePage
