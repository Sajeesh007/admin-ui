import { RiUserFill, RiAdminFill } from "react-icons/ri";

export default function Role({role}) {


    return (
        <div  className={`flex space-x-1 items-center justify-center rounded-xl px-1 py-px text-white
        ${role === 'admin' ? 'bg-yellow-400 w-24' : 'bg-green-500 w-28'}`}>
            {role === 'admin' ? <RiAdminFill/> : <RiUserFill/> }
            <p>{role}</p>
        </div>
    )
}
