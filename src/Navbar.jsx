import './App.css'
import logo from './assets/valorant_logo.svg'


function Navbar({handleDisplay}){
    
    return (
        <>
        <div className="navbar--container">
        <img src= {logo} className="navbar--logo" />
            <h2 className='navbar--text'>EVERYTHING VALORANT</h2>
            <div className='navbar--buttons'>
                <button onClick={handleDisplay} name='teamList' >Teams</button>
                <button onClick={handleDisplay} name='tournamentList' >Tournaments</button>
                <button>Watch Live</button>
            </div>
            

        </div>
        </>
    )
}

export default Navbar