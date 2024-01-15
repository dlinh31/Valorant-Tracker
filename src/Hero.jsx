import './App.css'
import { useState } from 'react'


function Card ({teamData}){
    return (

            <div className='hero--card'>
                <h3>Team ID: {teamData.id}</h3>
                <h3>Team name: {teamData.name}</h3>
                <img src={teamData.img} alt={`Team logo of ${teamData.name}`} />
            </div>

    )
}

function Hero (){
    const [stats, setStats] = useState([{
        'country': 'United States',
        'id': '5248',
        'img': 'https://owcdn.net/img/62a409ad29351.png',
        'name': 'Evil Geniuses',
        'url': 'https://www.vlr.gg/team/5248/evil-geniuses',
    },
    {
        'country': 'United States',
        'id': '5249',
        'img': 'https://owcdn.net/img/62a409ad29351.png',
        'name': 'Evil Geniuses',
        'url': 'https://www.vlr.gg/team/5248/evil-geniuses',
    }
]);
    return (

        <div className='hero--container'>
           
        {stats.map((data,index) => {
            return (<Card teamData={data} key={index}/>)
        })}

        </div>

    )

}

export default Hero