import axios from 'axios';
import { useEffect } from "react";
import { useState } from "react";
const Score=(passedData)=>{
    
    const url = "http://localhost:8080/Result";
    const [data, setData] = useState([]);
    const fetchInfo = () => {
      const config = {
        headers: { Authorization: `Bearer ${passedData}` }
        };
      return axios.get(url, config).then((res) => setData(res.data));
    };
            
    useEffect(() => {
      fetchInfo();
    }, []); 
    return((data.length>0?<div><div  className=' score-container'>
      <h3>Score</h3>
      
         <table className='table' >
          <thead>
            <tr>
              <th scope="col">S.no</th>
              <th scope="col">Name</th>
          <th scope="col">Score</th>
          </tr></thead>
          <tbody>
         {data.map((result, index) => {
        return (
          
            <tr>
              <td>{index+1}</td>
            <td >{result.username}</td>
            <td>{result.score}</td>
            </tr>
         
          )
        }
        
    )}
    </tbody>
 </table>
    </div> </div>:<div><p>Currently no data available</p>
    <div class="spinner-border" role="status">
  
</div> </div>))

} 
export default Score;