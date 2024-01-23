function Card ({teamData}){
    return (
        <div className='hero--card'>
            <img className='hero--teamlogo' src={teamData.img} alt={`Team logo of ${teamData.name}`} />
            <h3>{teamData.name}</h3>
        </div>
)
}

export default Card;