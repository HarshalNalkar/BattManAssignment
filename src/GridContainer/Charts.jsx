import React from "react";
// import PieChart from "./pieChart.svg";
import FleetHealth from "./FleetHealth";
import BatteryChemistry from "./BatteryChemistry";
import FlightMin from "./FlightMin";

function Charts() {
  return (
    <div className="mainContainer">
      <div className="gridContainer">
        <div className="blocks" id="batteryFleet">
          <h1>Battery Fleet</h1>
          <div className="batterFleet">
            <div id="rectBox">
              <span className="rect" id="rect1">
                A - Z
              </span>
              <span className="rect" id="rect2">
                Last Logged
              </span>
              <span className="rect" id="rect3">
                Health
              </span>
            </div>
            <div className="lists" id="lists">
              <div className="list" id="list1">
                <div className="box" id="box1">
                  <p>
                    Sky Cell <span id="span1">log data</span>
                  </p>

                  <p>
                    <span className="span2">.....</span>22.4V
                  </p>
                </div>
                <div className="box" id="box2">
                  <p>Li-lon</p>
                  <p>10000mAh</p>
                </div>
                <div className="box" id="box3">
                  <p>6S</p>
                  <p>5C</p>
                </div>
              </div>
              <div className="list" id="list2">
                <div className="box" id="box1">
                  <p>
                    Tattu <span id="span1">log data</span>
                  </p>
                  <p>
                    <span className="span2" id="span23">
                      .....
                    </span>
                    22.4V
                  </p>
                </div>
                <div className="box" id="box2">
                  <p>Li-lon</p>
                  <p>14000mAh</p>
                </div>
                <div className="box" id="box3">
                  <p>6S</p>
                  <p>5C</p>
                </div>
              </div>
              <div className="list" id="list3">
                <div className="box" id="box1">
                  <p>Gen X Pro....</p>
                  <p>
                    <span className="span2" id="span22">
                      .....
                    </span>
                    22.4V
                  </p>
                </div>
                <div className="box" id="box2">
                  <p>Li-lon</p>
                  <p>19600mAh</p>
                </div>
                <div className="box" id="box3">
                  <p>6s5P</p>
                  <p>5C</p>
                </div>
              </div>
              <div className="list" id="list4">
                <div className="box" id="box1">
                  <p>Orange</p>
                  <p>
                    <span className="span2" id="span2">
                      .....
                    </span>
                    22.4V
                  </p>
                </div>
                <div className="box" id="box2">
                  <p>Li-lon</p>
                  <p>21700mAh</p>
                </div>
                <div className="box" id="box3">
                  <p>6S</p>
                  <p>5C</p>
                </div>
              </div>
              <div className="list" id="list5">
                <div className="box" id="box1">
                  <p>Orange</p>
                  <p>
                    <span className="span2" id="span2">
                      .....
                    </span>
                    22.4V
                  </p>
                </div>
                <div className="box" id="box2">
                  <p>Li-lon</p>
                  <p>21700mAh</p>
                </div>
                <div className="box" id="box3">
                  <p>6S</p>
                  <p>5C</p>
                </div>
              </div>
              <div className="list" id="list6">
                <div className="box" id="box1">
                  <p>Tattu</p>
                  <p>
                    <span className="span2" id="span2">
                      .....
                    </span>
                    22.4V
                  </p>
                </div>
                <div className="box" id="box2">
                  <p>Li-lon</p>
                  <p>12000mAh</p>
                </div>
                <div className="box" id="box3">
                  <p>6S</p>
                  <p>5C</p>
                </div>
              </div>
              <div className="list" id="list7">
                <div className="box" id="box1">
                  <p>Tattu</p>
                  <p>
                    <span className="span2" id="span2">
                      .....
                    </span>
                    22.4V
                  </p>
                </div>
                <div className="box" id="box2">
                  <p>Li-lon</p>
                  <p>16000mAh</p>
                </div>
                <div className="box" id="box3">
                  <p>6S</p>
                  <p>5C</p>
                </div>
              </div>
              <div className="list" id="list8">
                <div className="box" id="box1">
                  <p>Orange</p>
                  <p>
                    <span className="span2" id="span2">
                      .....
                    </span>
                    22.4V
                  </p>
                </div>
                <div className="box" id="box2">
                  <p>Li-lon</p>
                  <p>21700mAh</p>
                </div>
                <div className="box" id="box3">
                  <p>6S</p>
                  <p>5C</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="blocks" id="quickStats">
          <h1>Quick Stats</h1>
          {/* <img src={PieChart} alt="not found" /> */}
          <div className="pieChart" id="pieChart">
            <div className="pie" id="pie1">
              <div className="fleetHealth" id="fleetHealth">
                <FleetHealth />
              </div>
              <div className="flightMin" id="flightMin">
                <FlightMin />
              </div>
            </div>
            <div className="pie" id="pie2">
              <div className="batteryChemistry" id="batteryChemistry">
                <BatteryChemistry />
              </div>
              <div className="chargingCycle" id="chargingCycle">
                <BatteryChemistry />
              </div>
            </div>
          </div>
        </div>

        <div className="blocks1" id="flightLog">
          <h1>Flight Log</h1>
          <table>
            <tr>
              <td>Date</td>
              <td>Location</td>
              <td>Duration</td>
              <td>Drone</td>
              <td>Battery in Use</td>
            </tr>
            <tr>
              <td>Feb 11 2023</td>
              <td>Gokarna</td>
              <td>13:07</td>
              <td>SkyViper</td>
              <td>
                <a href="#">Sky Cell Li-Ion 22.4V 10000mAh</a>
              </td>
            </tr>
            <tr>
              <td>Feb 12 2023</td>
              <td>Palampur</td>
              <td>10:59</td>
              <td>AeroHawk</td>
              <td>
                <a href="#">Tattu Li-Po 22.8V 16000mAh</a>
              </td>
            </tr>
            <tr>
              <td>Apr 03 2023</td>
              <td>Malappuram</td>
              <td>15:35</td>
              <td>NovaStar</td>
              <td>
                <a href="#">GenX Pro Li-Ion 22.2V 19600mAh</a>
              </td>
            </tr>
            <tr>
              <td>May 05 2023</td>
              <td>Kalpetta</td>
              <td>9:32</td>
              <td>FalconEye</td>
              <td>
                <a href="#">Orange Li-Co 36V 12000mAh</a>
              </td>
            </tr>
            <tr>
              <td>May 28 2023</td>
              <td>Mandya</td>
              <td>17:50</td>
              <td>SkyViper</td>
              <td>
                <a href="#">Sky Cell Li-Ion 22.4V 10000mAh</a>
              </td>
            </tr>
            <tr>
              <td>Aug 17 2023</td>
              <td>Khunti</td>
              <td>5:55</td>
              <td>SkyViper</td>
              <td>
                <a href="#">Sky Cell Li-Ion 22.4V 10000mAh</a>
              </td>
            </tr>
            <tr>
              <td>Aug 30 2023</td>
              <td>Kangra</td>
              <td>14:44</td>
              <td>FalconEye</td>
              <td>
                <a href="#">Orange Li-Co 36V 12000mAh</a>
              </td>
            </tr>
            <tr>
              <td className="td1">Sep 22 2023</td>
              <td className="td1">Gondal</td>
              <td className="td1">10:49</td>
              <td className="td1">AeroHawk</td>
              <td className="td1">
                <a href="#">Orange Li-Co 36V 12000mAh</a>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Charts;
