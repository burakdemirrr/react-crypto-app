import axios from 'axios';
import React, { useEffect, useState } from 'react'

function useAxios() {

    const base_url="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd";

    const [data, setData] = useState([]);
    const [err, setErr] = React.useState("");
    const [loading, setLoading] = React.useState(true);

    useEffect(()=>{

        axios.get(base_url)
        .then(res => setData(res.data))
        .catch(err => setErr(err))
        .finally(setLoading(false))
    },[])


    console.log(data);

  return {data,err,loading}
}

export default useAxios