import React from 'react'
import "./widget.css"
import Argentina_Flag from './Argentina_Flag.png'
import SaudiArabia_Flag from './SaudiArabia_Flag.png'
import Qatar_Flag from './Qatar_Flag.png'
import Netherland_Flag from './Netherland_Flag.png'
import Senegal_Flag from './Senegal_Flag.png'
import Ecuador_Flag from './Ecuador_Flag.png'

export default function Widget() {
  return (
    <div className="Widg">
      <div className="WidgItem">
        <div className="WidgTitle">Groupe A</div>

        <table>
          <thead>
            <tr>
              <th scope="col" className="Main1">Equipe</th>
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
              <th scope="row" className="Main1">
                <img src={Qatar_Flag} className="flagMin1" alt="logo" />
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
              <th scope="row" className="Main1">
                <img src={Ecuador_Flag} className="flagMin1" alt="logo" />
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
            <th scope="row" className="Main1">
                <img src={Netherland_Flag} className="flagMin1" alt="logo" />
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
            <th scope="row" className="Main1">
                <img src={Senegal_Flag} className="flagMin1" alt="logo" />
                Senegal
            </th>
              <td>1</td>
              <td>0</td>
              <td>0</td>
              <td>1</td>
              <td>0</td>
              <td>-2</td>
            </tr>

            <tr>
            <th scope="row" className="Main1">
                <img src={Senegal_Flag} className="flagMin1" alt="logo" />
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

      <div className="WidgItem">
        <div className="WidgTitle">Groupe A</div>

        <table>
          <thead>
            <tr>
              <th scope="col" className="Main1">Equipe</th>
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
              <th scope="row" className="Main1">
                <img src={Qatar_Flag} className="flagMin1" alt="logo" />
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
              <th scope="row" className="Main1">
                <img src={Ecuador_Flag} className="flagMin1" alt="logo" />
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
            <th scope="row" className="Main1">
                <img src={Netherland_Flag} className="flagMin1" alt="logo" />
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
            <th scope="row" className="Main1">
                <img src={Senegal_Flag} className="flagMin1" alt="logo" />
                Senegal
            </th>
              <td>1</td>
              <td>0</td>
              <td>0</td>
              <td>1</td>
              <td>0</td>
              <td>-2</td>
            </tr>

            <tr>
            <th scope="row" className="Main1">
                <img src={Senegal_Flag} className="flagMin1" alt="logo" />
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

      <div className="WidgItem">
        
      </div>
    </div>
  )
}
