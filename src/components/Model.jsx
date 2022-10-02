import Portal from './Portal'

function Model({data, setshowModel, handleSubmit}) {


  return (
    <div className='w-96 h-72 shadow-lg rounded-xl bg-white absolute inset-0 mx-auto my-auto z-50
      flex flex-col py-4 px-4 justify-center items-center'>
        <h5 className='text-2xl font-bold text-center'>Edit Details</h5>

        <form className='flex flex-col items-center space-y-4 pt-6' onSubmit={handleSubmit}>

          <div className='flex items-center'>
            <label htmlFor='name'>Name : &nbsp; </label>
            <input className='px-2 py-1 w-60 outline-none border rounded-lg' defaultValue={data[0]?.name} name='name'/>
          </div>

          <div className='flex items-center'>
            <label htmlFor='email'>Email : &nbsp; </label>
            <input className='px-2 py-1 w-60 outline-none border rounded-lg' defaultValue={data[0]?.email} name='email'/>
          </div>

          <div className='flex items-center space-x-4 '>
        
            <div className='flex space-x-2'>  
              <input type='radio' className='outline-none ' defaultValue={data[0]?.name} name='role' value='admin' defaultChecked={data[0].role == 'admin'}/>
              <label htmlFor='admin'>Admin </label>
            </div>

            <div className='flex space-x-2'>
              <input type='radio' className='outline-none ' defaultValue={data[0]?.name} name='role' value='member' defaultChecked={data[0].role == 'member'}/>
              <label htmlFor='member'>Member</label>
            </div>

          </div>

          <div className='flex space-x-4'>
            <button className='bg-red-600 rounded-lg py-2 px-4 text-white ' onClick={()=>setshowModel(false)}>
              Discard
            </button>
            <button className='bg-zinc-700 rounded-lg py-2 px-4 text-white ' type='submit'>
              Save 
            </button>
          </div>

        </form>
    </div>
  )
}

export default Portal(Model) 
