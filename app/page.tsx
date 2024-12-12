// "use client";

// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
// import { IUser } from "@/models/user.model";
// import { CircleX } from "lucide-react";
// import { useSession } from "next-auth/react";
// import Link from "next/link";
// import { signOut } from "next-auth/react";
// import { redirect } from "next/navigation";
// export default function Home() {
//   const { data, update } = useSession();
//   const user = data?.user as IUser;
//   console.log(user)
//     const handleSignOut = () => {
//     signOut();
//     redirect("/login");
//     }

//     const handleUpdate = async () => {
//     const res = update({
//         ...data,
//         user: {
//           ...user,
//           isVerified: true,
//           phoneNo: {
//             ...user.phoneNo,
//             isVerified: true,
//           },
//         },
//       });

//       console.log({res})
//     }
//   return (
//     <div className="flex flex-col p-[1rem] justify-center items-center h-screen">
//       <div className="w-full max-w-md">
//         <h1 className="text-2xl">Welcome, {user?.name}</h1>
//         <button onClick={handleUpdate}>handle cliek</button>
//         {!user?.phoneNo?.isVerified && (
//           <Alert variant="destructive" className="mb-5">
//             <CircleX color="red" />
//             <AlertTitle>Your Phone No is not Verified!</AlertTitle>
//             <AlertDescription>
//               <Link href={"/verify-phoneno"}>
//                 <b>Click Here</b> to verify now.
//               </Link>
//             </AlertDescription>
//           </Alert>
//         )}
//       </div>

//       <button onClick={() => handleSignOut()}>Sign out</button>
//     </div>
//   );
// }


"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { IUser } from "@/models/user.model";
import { CircleX } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

export default function Home() {
  const { data, update } = useSession();
  const user = data?.user as IUser;
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.push("/login");
  };
  async function updateSession() {
    const res = await update({
      ...data,
      user: {
        ...data?.user,
        isVerified: true,
        name: "Nakel ft Lina"
      },
    });
    console.log({ res });
  }

console.log({data, user})

  return (
    <div className="flex flex-col p-[1rem] justify-center items-center h-screen">
      <div className="w-full max-w-md">
        <h1 className="text-2xl">Welcome, {user?.name}</h1>
        <button onClick={updateSession}>Handle Click</button>
        {!user?.phoneNo?.isVerified && (
          <Alert variant="destructive" className="mb-5">
            <CircleX color="red" />
            <AlertTitle>Your Phone No is not Verified!</AlertTitle>
            <AlertDescription>
              <Link href={"/verify-phoneno"}>
                <b>Click Here</b> to verify now.
              </Link>
            </AlertDescription>
          </Alert>
        )}
      </div>

      <button onClick={() => handleSignOut()}>Sign out</button>
    </div>
  );
}
