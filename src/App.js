import { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState('');
  const [message,setMessage] = useState('');

  function calcBmi(e){
    // TODO document why this function 'calcBmi' is empty
     e.preventDefault();

     if(weight === 0 || height === 0){
      alert("please enter the height or weight")
     }
     else{
      let bmi = (weight/(height*height)*703);
      setBmi(bmi.toFixed(1));
     }

     if(bmi <25){
      setMessage("You are underWeight");
     }else if(bmi>=25 && bmi<=30 ){
      setMessage("You are healthy");
     }else{
      setMessage("you are overweighted");
     }
    
  }
  function reload(){
    window.location.reload();
  }

  return (
    <div className="app">
    <div className='container'>
      <h2 className='center'>BMI Calculator</h2>
      <form onSubmit={calcBmi}>
 
        <div>
          <label>Weight (lbs)</label>
          <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
        </div>
 
        <div>
          <label>Height (in)</label>
          <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
        </div>
 
        <div>
          <button className='btn' type='submit'>Submit</button>
          <button className='btn' onClick={reload} type='submit'>Reload</button>
        </div>
      </form>
 
      <div className='center'>
        <h3>Your BMI is: {bmi}</h3>
        <p>{message}</p>
      </div>
    </div>
  </div>
  );
}

export default App;
