import { IoCaretBackOutline, IoCaretForwardOutline, IoPlayBack, IoPlayForward } from "react-icons/io5";
import Pagination from "./Pagination";

export default function TableFooter({allData, setdata, selected, deleteSlected, setcurrent, current}) {


  const handlePaginationClick = (value) => {
    if(value === 'p'){
      setcurrent((prev)=>prev - 1)
      setdata(allData?.filter((item, index)=> index >= (current - 1) * 10  && index < (current)*10))
    }else if(value === 'f'){
      setcurrent(0)
      setdata(allData?.filter((item, index)=> index >= 0  && index < 10))
    }else if(value === 'n'){
      setcurrent((prev)=>prev + 1)
      setdata(allData?.filter((item, index)=> index >= (current + 1) * 10  && index < (current + 2)*10))
    }else if(value === 'l'){
      setcurrent(Math.ceil((allData.length/10)) - 1)
      setdata(allData?.filter((item, index)=> index >= (Math.ceil((allData.length/10)) - 1) * 10  && index < (Math.ceil((allData.length/10))) * 10))
    }else{
      setcurrent(value)
      setdata(allData?.filter((item, index)=> index >= value*10  && index < (value+1)*10))
    }
  }


  return (
    <div className={`flex px-4 py-5 ${selected?.length > 0 ? 'justify-between' : 'justify-end'}`}>

        {selected?.length > 0 && 
        <button className="bg-red-600 rounded-xl px-4 py-2 text-white font-semibold hover:bg-white hover:text-red-600 border border-red-600"
          onClick={deleteSlected}>
          Delete Selected
        </button>}
        
        <div className='flex space-x-4'>
           <Pagination current={current} content={<IoPlayBack className='w-5 h-5'/>} value={'f'} handlePaginationClick={handlePaginationClick}
            disabled={current === 0}/>
          {allData.length > 10 && current !== 0 && <Pagination current={current} content={<IoCaretBackOutline className='w-5 h-5'/>} value={'p'} handlePaginationClick={handlePaginationClick}
            disabled={current === 0}/>}

          {allData.length > 0 && Array.from(Array(Math.ceil((allData.length/10))).keys())?.map((item)=>
            <Pagination key={item} current={current} content={item+1} value={item} handlePaginationClick={handlePaginationClick}/>
          )}

          {allData.length > 10 && current !== Math.ceil((allData.length/10) - 1) && <Pagination current={current} content={<IoCaretForwardOutline className='w-5 h-5'/>} value={'n'} handlePaginationClick={handlePaginationClick}
            disabled={current === Math.ceil((allData.length/10) - 1)} />}
           <Pagination current={current} content={<IoPlayForward className='w-5 h-5'/>} value={'l'} handlePaginationClick={handlePaginationClick}
            disabled={current === Math.ceil((allData.length/10) - 1)} last={Math.ceil((allData.length/10) - 1)}/>
        </div>

    </div>
  )
}
