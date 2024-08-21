import { useState } from "react";

export function EMICalculator() {


const [amount,setAmount] = useState(100000);
const [years,setYears] = useState(1);
const [interest,setInterest] = useState(10.45);
const [installment,setInstallment] = useState('');


function handleAmountChange(e){
  setAmount(e.target.value);
}

function handleYearChange(e){
  setYears(e.target.value);
}

function handleRateChange(e){
  setInterest(e.target.value);
}
 
function handleCalculateClick(){
  var P = amount;
  var n = years * 12;
  var r = interest/12/100;
  var EMI = P * r * (Math.pow(1+r,n)) / Math.pow(1+r,n) -1;
  setInstallment(EMI);
}

  return (
    <div className="container-fluid p-4 bg-secondary">
      <div className="bg-light">
        <div className="row p-4">
          <div className="col">
            Amount you need <input  type="text" value={amount} size="16" />
          </div>
          <div className="col">
            for <input type="number" min="1" max="5" value={years} /> years
          </div>
          <div className="col">
            Interest rate <input type="number" min="10.45" max="18.45" step="0.01" value={interest}/> %
          </div>
        </div>
        <div className="row p-4 mt-4">
          <div className="col">
            1,00,000
            <input onChange={handleAmountChange}  type="range" min="100000" max="500000" />
            5,00,000
          </div>
          <div className="col">
            1<input onChange={handleYearChange} type="range" min="1" max="5" />5
          </div>
          <div className="col">
            10.45%
            <input onChange={handleRateChange} type="range" min="10.45" max="18.45" />
            18.45
          </div>
        </div>

        <div className="row p-4 mt-2">
          <div className="col text-end">
            <button onClick={handleCalculateClick} className="btn btn-primary">Calculate</button>
          </div>
        </div>
          <div className="row p-4 mt-3">
            <div className="col">
              Your Installement Amount <b> {installment.toLocaleString('en-in', {style: 'currency', currency: 'INR'})} </b>
            </div>
          </div>
      </div>
    </div>
  );
}
