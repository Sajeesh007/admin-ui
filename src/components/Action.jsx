import { MdModeEditOutline, MdDelete } from "react-icons/md";

export default function Action({id, handleDeleteClick, handleEditClick, selected}) {


    return (
        <div className='flex space-x-5'>
            <button className={`w-10 h-10 rounded-full bg-red-600 text-white flex justify-center items-center hover:bg-white hover:text-red-600 
                border border-red-600 ${selected && 'border-zinc-700'}`}
            onClick={()=>handleDeleteClick(id)}>
                <MdDelete className="w-5 h-5"/>
            </button>
            <button className={`w-10 h-10 rounded-full bg-zinc-600 text-white flex justify-center items-center border border-zinc-700
            hover:bg-white hover:text-zinc-700 ${selected && 'bg-white text-zinc-700' }`}
                onClick={()=>handleEditClick(id)}>
                <MdModeEditOutline className="w-5 h-5"/>
            </button>
        </div>
    )
}
