import React from 'react'

export default function SearchBox({handleChange}) {

    return (
        <div>
            <input type='text' placeholder='Search by name, email, role' onChange={handleChange}
            className='w-[720px] py-2 px-2 rounded-lg outline-none border' />
        </div>
    )
}
