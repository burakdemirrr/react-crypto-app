import React from 'react'
import useAxios from '../hooks/useAxios'
import "./Home.css"
function Home() {

  const {data,err,loading} =useAxios();

  if(err){
    return alert(err);
  }


  return (
    <div className='home'>
      {
        loading ? <div>Loading...</div> :
        data && data.slice(0,25).map((item)=>(
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