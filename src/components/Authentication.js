"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image"
export default function Authentication() {
    const {data:session}=useSession()
  console.log(session)
  return (
    <div>
        {session ? <div className="flex">
          {session?.user?.image ? <Image src={session?.user?.image} alt='userprofilepic' width={40} height={40} className="rounded-full"/>
          :<h1 className="font-bold">{session?.user?.name}</h1>}
            <button onClick={signOut} className="mx-3 ">Sign out</button>
        </div>:<div>
            <button onClick={signIn}>Sign In</button></div>}
    </div>
  )
}
