import React, { useState } from 'react'
import useAxios from '../hooks/useAxios'
import "./Home.css"
function Home() {

  const {data,err,loading} =useAxios();
  console.log(data);

  const [form,setForm]=useState({
    name:"",
  })

  const handleInputs=(e)=>{
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
    console.log(form.name)
  }


  if(err){
    return alert(err);
  }

  const filteredcoins=data.filter(coin=>
    coin.name.toLowerCase().includes(form.name.toLowerCase()))
    
  return (
    <div className='home'>
      <h1>Crypto App</h1>
      <form >
        <input type="text" placeholder='Search Coin' name="name" value={form.name} onChange={(e)=>handleInputs(e)} />
      </form>
      {loading ? <h1>Loading...</h1> :
        filteredcoins.map((item)=>(
          <div className="coin-container" key={item.id}>
            <div className="coin-row">
              <div className="coin">
                <img src={item.image} alt="" />
                <h1>{item.name}</h1>
                <p className='coin-symbol'>{item.symbol}</p>
              </div>
              <div className="coin-data">
                <p className="coin-price">${item.current_price}</p>

                {
                  item.price_change_percentage_24h<0 ? 
                  <p className="coin-percent red ">{item.price_change_percentage_24h.toFixed(2)}%</p>
                   :
                  <p className="coin-percent green">{item.price_change_percentage_24h.toFixed(2)}%</p>
                }




                <p className="coin-marketcap">
                Market Cap: {item.market_cap}
                </p>
              </div>
            </div>
          </div>
         
        ))
      }
    </div>
  )
}

export default Home