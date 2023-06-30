import React from 'react'
import './Contest.css';

const Contest = ({value}) => {
    const {name,duration,end_time,start_time,status,site,url} = value;
    console.log(name)
  return (
    <div className='main'>
     <h2>{name}</h2>
     <h4>Start time: <span>{start_time}</span></h4>
     <h4>End time: {end_time}</h4> 
     <h4>Duration: {duration}</h4>
     <h5>Website:<a href={url} target="_blank">{site}</a></h5>
     <h5> status: {status}</h5>
    </div>
  )
}

export default Contest
