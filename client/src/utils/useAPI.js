import { useEffect, useState } from "react";

const useApi = (url) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState("Oh no!")
  
    const fetchApi = () => {
      fetch(url)
      .then(response => {
        return response.json()
      })
      .then(json => {
        console.log(json)
        setLoading(false)
        setData(json)
      })
    };
  
    useEffect(() => {
      fetchApi();
    }, []);
  
    return { loading, data }
  };

export default useApi;




// const fetchNBA = async () => {
//     try {
//         const stats = await fetch("https://www.balldontlie.io/api/v1/stats");
//         const data = await stats.json();
//         return data;
//     } catch(err) {
//         console.log(err)
//     }
// };

// export default fetchNBA;