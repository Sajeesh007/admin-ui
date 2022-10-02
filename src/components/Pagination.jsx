
export default function Pagination({content, value, handlePaginationClick, current, disabled, last}) {



    return (
        <button className={` w-10 h-10 rounded-full text-white flex justify-center items-center font-bold border border-zinc-700
            hover:bg-white hover:text-zinc-700 hover:cursor-pointer 
            ${current == value || (value === 'f' && current === 0) || (value === 'l' && current === last) ? 'bg-white text-zinc-700' : 'bg-zinc-700'}`}
            onClick={()=>handlePaginationClick(value)}
            disabled={disabled}>
            {content}
        </button>
    )
}
