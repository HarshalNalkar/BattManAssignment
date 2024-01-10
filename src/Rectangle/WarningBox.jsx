import React from "react";
import number5 from './number-5.png'
import number11 from './number-11.png'
import downSign from './770646-200.png'

const WarningBox = () => {
  return (
    <div className="boxes">
      <div className="box" id="box1">
        <div id="warning">
          <span className="circle"></span>
          <span className="text1">Warning</span><span className="text2">Tattu 21021 is RUL is &lt; 20%.</span>
          <img src={number5} alt="not found" className="number5"/>
          <img src={downSign} alt="not found" className="downSign"/>
        </div>
      </div>
      <div className="box" id="box2">
      <div id="quickCheck">
          <span className="circle2"></span>
          <span className="text11">Quick Check</span><span className="text22">Last flight Gokarna - Skydive had 20% more energy consumption that usunal.</span>
          <img src={number11} alt="not found" className="number11"/>
          <img src={downSign} alt="not found" className="downSign"/>
        </div>
      </div>
    </div>
  );
};

export default WarningBox;
