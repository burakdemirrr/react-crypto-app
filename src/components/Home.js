import React from 'react'
import useAxios from '../hooks/useAxios'
import "./Home.css"
function Home() {

  const {data,err,loading} =useAxios();


  return (
    <div className='home'>
      {
        loading ? <div>Loading...</div> :
        data && data.slice(0,10).map((item)=>(
          <div className="">{item.symbol}</div>
        ))
      }
    </div>
  )
}

export default Home