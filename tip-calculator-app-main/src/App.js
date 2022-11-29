import { useState } from 'react';
import './App.css';

function App() {
  const [tipPerPerson, setTipPerPerson] = useState(0);
  const [totalPerPerson, setTotalPerPerson] = useState(0);
  
  return (
    <div>
      <div className='header'>SPLI<br />TTER</div>
      <div className='billContainer'>
        <div className='billFormWrapper'>
          <div style={{marginBottom: "4%"}}>
            <div>Bill</div>
            <input className='inputBox' type="number" />
          </div>
          <div style={{marginBottom: "4%"}}>
            <div>Select Tip %</div>
            <div>
              <button>5%</button>
              <button>10%</button>
              <button>15%</button>
            </div>
            <div>
              <button>25%</button>
              <button>50%</button>
              <button>Custom</button>
            </div>
          </div>
          <div>
            <div>Number of People</div>
            <input className='inputBox' type="number" />
          </div>
        </div>
        <div className='billBoxWrapper'>
          <div>
            <div>Tip Amount<br /><span>/ person</span></div>
            <div>{tipPerPerson}</div>
          </div>
          <div>
          <div>Total<br /><span>/ person</span></div>
            <div>{totalPerPerson}</div>
          </div>
          <button className='resetButton'>RESET</button>
        </div>
      </div>
    </div>
  );
}

export default App;
