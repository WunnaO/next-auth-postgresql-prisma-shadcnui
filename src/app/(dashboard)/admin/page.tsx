import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import React from "react";

const page = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
  if (session?.user) {
    return (
      <h2 className="text-4xl">
        Admin page -welcome back {session?.user.username}
      </h2>
    );
  }

  return <h2 className="text-4xl">Please login to see this admin page</h2>;
};

export default page;
