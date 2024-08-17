import './App.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

function App() {
  const[amount,setAmount]=useState(0)
  const[year,setYear]=useState(0)
  const[rate,setRate]=useState(0)


  const [interest,setInterst]=useState(0)

  const calculate= (e)=>{
    const output =(amount*year*rate/100)
    console.log(output);
    setInterst(output);

  }
  const reset=(e)=>{
    setAmount(0)
    setYear(0)
    setRate(0)
  }
  return (
    <>
      <div className="App">
        <div className="container">

          <div className="header">
            <h2>Simple-Interest-Calculator</h2>
            <p>Calculate your simple Interest with us</p>
          </div>

          <div className="total">
            <h3>{interest}</h3>
            <p>Your total Interest</p>
          </div>

          <div className="form">
            <form className='input'>
              <TextField id="outlined-basic" label="Amount" variant="outlined" value={amount||""} onChange={(e)=>setAmount(e.target.value)}/>
              <TextField id="filled-basic" label="Year" variant="filled"value={year||""} onChange={(e)=>setYear(e.target.value)} />
              <TextField id="standard-basic" label="Rate" variant="standard"value={rate||""} onChange={(e)=>setRate(e.target.value)} />
            </form>
          </div>

          <div className="button">
            <Button variant="contained" onClick={e=>calculate(0)}>Calculate</Button>
            <Button variant="outlined"onClick={e=>reset(0)}>Reset</Button>
          </div>

        </div>
      </div>
    </>
  )
}

export default App