import SearchBox from './SearchBox'

export default function TableHeading({ handleSearch}) {

    return (
        <div className='flex justify-between items-center px-4 py-6'>
            <h4 className='text-4xl font-bold '>Users</h4>
            <SearchBox handleChange={handleSearch}/>
        </div>
    )
}
