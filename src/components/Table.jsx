import { useEffect, useState } from 'react';
import TableFooter from "./TableFooter";
import Action from './Action'
import Role from './Role'
import Model from './Model'
import TableHeading from './TableHeading';

export default function Table({data, error, seterror, setallData, setdata, allData}) {

    const [selected, setselected] = useState([])
    const [current, setcurrent] = useState(0)
    const [search, setsearch] = useState([])
    const [searchKey, setsearchKey] = useState('')
    const [showModel, setshowModel] = useState(false)
    const [edit, setedit] = useState(null)

    useEffect(() => {
        if(allData?.length === 0){
            seterror('e')
            setdata(allData?.filter((item, index)=> index >= (current) * 10  && index < (current + 1)*10))
        }else {
            setdata(allData?.filter((item, index)=> index >= (current) * 10  && index < (current + 1)*10))
            seterror(null)
        }
    }, [allData])


    useEffect(() => {
        if(search?.length === 0 )
            searchKey?.length === 0 ?
                setdata(allData?.filter((item, index)=> index >= (current) * 10  && index < (current + 1)*10)) :
                seterror('se')
        else
            setdata(search?.filter((item, index)=> index >= (current) * 10  && index < (current + 1)*10))
    }, [search])
    

    const globalSelectChange = (e) => {
        e.target.checked == true ? setselected(data.map((item)=> item.id)) : setselected([])
    }

    const selectChange = (e, id) => {
        e.target.checked == true ? setselected((prev)=>[...prev, id]) : setselected((prev)=> prev.filter((item)=> item !== id))
    }

    const handleEditClick = (id) => {
        setshowModel(true)
        setedit(id)
    }

    const handleDeleteClick = (id) => {
        setcurrent((prev) => data?.length == 1 ? prev-1 : prev)
        setallData((prev) => prev.filter((item)=> item.id !== id)) 
        search.length > 0 && setsearch((prev) => prev.filter((item)=> item.id !== id)) 
    }

    const deleteSlected = () => {
        setcurrent((prev) => selected?.length === data?.length ? prev-1 : prev)
        for (let j = 0; j < selected?.length; j++) {
            const id = selected[j]
            setallData((prev)=> prev.filter((item)=> item.id !== id))
            search.length > 0 && setsearch((prev) => prev.filter((item)=> item.id !== id)) 
        }
        setselected([])
    }

    console.log(current);

    const handleSearch = (e) => {
        seterror(null)
        const key = e.target.value
        setsearchKey(key)
        const res = allData?.filter((item)=> item?.name.includes(key) || item?.email.includes(key) || item?.role.includes(key))
        setsearch(res)
        key?.length === 0 && setsearch([])
        key?.length !== 0 && res.length === 0 && seterror('se')
    }

    const forceSearch = () => {
        const res = allData?.filter((item)=> item?.name.includes(searchKey) || item?.email.includes(searchKey) || item?.role.includes(searchKey))
        setsearch(res)
        searchKey?.length === 0 && setsearch([])
        searchKey?.length !== 0 && res.length === 0 && seterror('se')
    }

    const handleEditSubmit = (e) => {
        e.preventDefault()
        let a = allData
        for (let i = 0; i < a.length; i++) {
          const b = a[i];
          if(b.id == edit){
            b.email = e.target.email.value
            b.name = e.target.name.value
            b.role = e.target.role.value
          }
        }
        setallData(a)
        setshowModel(false)
        forceSearch()
      }

    return (
        <div className={`flex flex-col rounded-xl shadow-lg border border-zinc-100 relative ${showModel && 'blur-sm'}`}>
            <TableHeading allData={allData} handleSearch={handleSearch} />
            {error ? 
                <div className='w-[1100px] h-[720px] flex justify-center items-center text-6xl text-zinc-400 -rotate-12'>
                    {error == 'se' ? "No Results Found!" : "No Data!"}
                </div>:
                <table className='table-fixed p-4'>
                    <thead >
                        <tr className='text-left'>
                            <th className='w-20'>
                                <input type='checkbox' className='w-5 h-5  accent-red-600 rounded outline-none' onChange={globalSelectChange} checked={selected?.length == data.length}/>
                            </th>
                            <th className='w-72'>Name</th>
                            <th className='w-72' >Email</th>
                            <th className='w-72'>Role</th>
                            <th className='w-40'>Actions</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {data?.map((item)=>
                            <tr key={item.id} className={`${selected?.filter((id)=> id == item.id)?.length > 0 && 'bg-zinc-700 text-white'} `}>
                                <td>
                                    <input type='checkbox' className='w-4 h-4 accent-red-600 rounded' checked={selected?.filter((id)=> id == item.id)?.length > 0} 
                                        onChange={(e)=>selectChange(e, item.id)}/>
                                </td>
                                <td>{item?.name}</td>
                                <td>{item?.email}</td>
                                <td><Role role={item?.role}/></td>
                                <td>
                                    <Action id={item?.id} handleDeleteClick={handleDeleteClick} handleEditClick={handleEditClick} 
                                    selected={selected?.filter((id)=> id == item.id)?.length > 0}/>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>}

            {!error && <TableFooter allData={search.length > 0 ? search : allData} setdata={setdata} selected={selected} 
                current={current} setcurrent={setcurrent} deleteSlected={deleteSlected}/>}

            { showModel &&
                <Model data={data.filter((item=> item.id == edit))}  setshowModel={setshowModel} handleSubmit={handleEditSubmit}/>
            }
        </div>
    )
}
