"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import { IoIosAddCircleOutline } from "react-icons/io";
import Image from "next/image"
import { useState } from "react";
import Model from "./Model";

 import { FaCamera } from "react-icons/fa";
 import { RxCross2 } from "react-icons/rx";
export default function Authentication() {
    const {data:session}=useSession()
    const[isModalOpen,setIsModalOpen]=useState(false)
  return (
    <>
    <div className="flex gap-5 items-center "> 
      <IoIosAddCircleOutline className="text-2xl cursor-pointer" onClick={()=>setIsModalOpen(true)}/>
      <div>
        {session ? <div className="flex">
          {session?.user?.image ? <div>
            {/* Profile pic media queries- above medium devices */}
          <Image src={session?.user?.image} alt='userprofilepic' width={40} height={40} className="rounded-full hidden md:block "/>
          {/* Profile pic on small devices  =>onClick signsout of the page */}
          <Image src={session?.user?.image} alt='userprofilepic' width={40} height={40} className="rounded-full  md:hidden"
          onClick={signOut}/>
           </div>
          :
          <div> {/* Username media queries- above medium devices */}
            <h1 className="font-bold hidden md:block">{session?.user?.name}</h1>
             {/* Username on small devices  =>onClick signsout of the page */}
          <h1 className="font-bold md:hidden" onClick={signOut}>{session?.user?.name}</h1>
          </div>}
            <button onClick={signOut} className="mx-3 hidden md:block">Sign out</button>
        </div>:<div>
            <button onClick={signIn}>Sign In</button></div>}
     </div>
    </div>
    {isModalOpen && <Model isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>}
    </>
  )
}
