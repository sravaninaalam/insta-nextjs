
import { FaCamera } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
export default function Model({isModalOpen,setIsModalOpen}) {

 return (isModalOpen)&&( 
    <div className="absolute left-4 md:left-[30%]  my-24 w-[90%] md:w-[40%]" >
      <div className="shadow-lg border rounded-md p-10 flex flex-col items-center">
        <FaCamera className="text-4xl p-1 m-1 text-gray-500"/>
        <input type="text" maxLength='150' placeholder="enter caption here" className="w-full m-4 outline-none"/>
        <button disabled className="disabled:bg-gray-300 disabled:cursor-not-allowed bg-red-600 text-white p-1 rounded w-full m-2">Upload post</button>
        <RxCross2 className="top-2 absolute right-2" onClick={()=>setIsModalOpen(false)}/>
      </div>
    </div>
  
  )

}
