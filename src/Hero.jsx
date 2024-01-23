import './App.css'
import { useState, useEffect } from 'react'
import Card from './Card';


function Hero ({display, setDisplay}){

    const [stats, setStats] = useState([]);
    const [teamSelect, setTeamSelect] = useState({
        region: "all",
        limit: 20,
        page: 1,
    })
    const regionNames = {
        all: "All",
        na: "North America",
        eu: "Europe",
        br: "Brazil",
        ap: "Asia Pacific",
        ch: "China",
        jp: "Japan",

    }

    function handleChange(event){

        const {name, value} = event.target
        setTeamSelect(prevTeamSelect => {
            return {
                ...prevTeamSelect,
                [name]: value,
            }
        })
    }

    useEffect(()=> {
        async function getData(){
            setDisplay(prevDisplay => {
                return {
                    ...prevDisplay,
                    teamList: false,
                    loadingIcon: true,
                }
            })
            const res = await fetch("https://vlr.orlandomm.net/api/v1/teams?" + new URLSearchParams({
                limit: teamSelect.limit,
                region: teamSelect.region,
            }))
            const data = await res.json()
            setStats(data['data'])
            setDisplay(prevDisplay => {
                return {
                    ...prevDisplay,
                    teamList: true,
                    loadingIcon: false
                };
            });

            
        }
        getData()

    }, [teamSelect])

    return (
        <>
        {display.loadingIcon && 
        (<div class="loading-icon"></div>)}
        
          {display.teamList && (
            <div>
              <div className="hero--chooseTeam">
                <select 
                name="region" 
                id="region"
                value={teamSelect.region}
                onChange={handleChange}>
                  {Object.entries(regionNames).map(([key, value]) => (
                    <option value={key} key={key}>{value}</option>
                  ))}
                </select>
              </div>
              
              <div className='hero--container'>
                {stats.map((data, index) => (
                  <Card teamData={data} key={index} />
                ))}
              </div>
            </div>
          )}
        </>
      );
    }
    

export default Hero