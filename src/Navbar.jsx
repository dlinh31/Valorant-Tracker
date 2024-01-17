import './App.css'
import logo from './assets/valorant_logo.svg'


function Navbar(){
    return (
        <>
        <div className="navbar--container">
        <img src= {logo} className="navbar--logo" />
            <h2 className='navbar--text'>EVERYTHING VALORANT</h2>
            <div className='navbar--buttons'>
                <button>Teams</button>
                <button>Tournaments</button>
                <button>Watch Live</button>
            </div>
            

        </div>
        </>
    )
}

export default Navbar