import axios from 'axios';
import {useEffect,useState} from 'react'
import './App.css'
import Contest from './Components/Contest';

function App() {
  const [contest,setContest] = useState([])
  useEffect(()=>{
    axios.get('https://kontests.net/api/v1/all')
    .then((res)=>
    // console.log(res.data),
    setContest(res.data))
  },[])
  console.log(contest)
  

  return (
    <>
    <h1>Coding Contest Calendar</h1>
    <div className='topMain'>
    
{contest.map((value,idx)=>{
  return(
    <Contest value={value} key={idx}/>
  )
})}
      </div>
      </>
  )
}

export default App
