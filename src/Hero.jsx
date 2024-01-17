import './App.css'
import { useState, useEffect } from 'react'


function Card ({teamData}){
    return (

            <div className='hero--card'>
                <img className='hero--teamlogo' src={teamData.img} alt={`Team logo of ${teamData.name}`} />
                <h3>{teamData.name}</h3>
            </div>

    )
}

function Hero (){
    const [display, setDisplay] = useState({
        teamList: true,
        

    })
    
    const [stats, setStats] = useState([]);

    useEffect(()=> {
        fetch("https://vlr.orlandomm.net/api/v1/teams?" + new URLSearchParams({
            limit: 20,
            region: 'na',
        }))
        .then(res => res.json())
        .then(data => setStats(data['data']))
    }, [stats])

    return (

        <div className='hero--container'>
           
        {stats.map((data,index) => {
            return (<Card teamData={data} key={index}/>)
        })}

        </div>

    )

}

export default Hero