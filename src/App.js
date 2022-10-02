import { useEffect, useState } from "react"

import Table from "./components/Table";

function App() {

  const [allData, setallData] = useState([])
  const [data, setdata] = useState([])
  const [error, seterror] = useState(null)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    await fetch('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json'
    ).then((res)=> res.json()
    ).then((data)=> {
      setallData(data)
    }).catch((err)=> seterror('network'))
  }

  
  return (
    <div className="flex flex-col justify-start pt-4 items-center min-h-screen">

        <Table data={data} error={error} seterror={seterror} setallData={setallData} setdata={setdata} allData={allData}/>

    </div>
  )
}

export default App;
