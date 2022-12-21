import React from 'react'
import './featured.css'
import Argentina_Flag from './Argentina_Flag.png'
import SaudiArabia_Flag from './SaudiArabia_Flag.png'
import Qatar_Flag from './Qatar_Flag.png'
import Netherland_Flag from './Netherland_Flag.png'
import Senegal_Flag from './Senegal_Flag.png'
import Ecuador_Flag from './Ecuador_Flag.png'



export default function Featured() {
  return (
    <div className="feat">
      <div className="featItem">
        <div className="featTitle">Prochain Match</div>

        <div className="featContainer">
          <div className="featFlagContainer">
            <img src={Argentina_Flag} className="flag" alt="logo" />
            <div className="featFlagName">Argentina</div>
          </div>

          <h1>11:00</h1>

          <div className="featFlagContainer">
            <img src={SaudiArabia_Flag} className="flag" alt="logo" />
            <div className="featFlagName">Saudi Arabia</div>
          </div>

        </div>
        
        <span className="featSub">Groupe C - 1re j. beIN Sports 1</span>
      </div>
            
      <div className="featItem">
        <div className="featTitle">Groupe A</div>

        <table>
          <thead>
            <tr>
              <th scope="col" className="Main">Equipe</th>
              <th scope="col">Pts</th>
              <th scope="col">J</th>
              <th scope="col">G</th>
              <th scope="col">N</th>
              <th scope="col">P</th>
              <th scope="col">+/-</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className="Main">
                <img src={Qatar_Flag} className="flagMin" alt="logo" />
                Qatar
              </th>
              <td>1</td>
              <td>0</td>
              <td>0</td>
              <td>1</td>
              <td>0</td>
              <td>-2</td>
            </tr>
          
            <tr>
              <th scope="row" className="Main">
                <img src={Ecuador_Flag} className="flagMin" alt="logo" />
                Ecuador
              </th>
              <td>1</td>
              <td>0</td>
              <td>0</td>
              <td>1</td>
              <td>0</td>
              <td>-2</td>
            </tr>
          
            <tr>
            <th scope="row" className="Main">
                <img src={Netherland_Flag} className="flagMin" alt="logo" />
                Netherland
            </th>
              <td>1</td>
              <td>0</td>
              <td>0</td>
              <td>1</td>
              <td>0</td>
              <td>-2</td>
            </tr>
          
            <tr>
            <th scope="row" className="Main">
                <img src={Senegal_Flag} className="flagMin" alt="logo" />
                Senegal
            </th>
              <td>1</td>
              <td>0</td>
              <td>0</td>
              <td>1</td>
              <td>0</td>
              <td>-2</td>
            </tr>
          </tbody>

        </table>
      </div>
    </div>
    

  )
}


