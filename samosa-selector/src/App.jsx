import './App.css';
import { useState } from 'react';

const [count, setCount] = useState(0);
const [multiplier, setMultiplier] = useState(1);
const updateCount = () => setCount(count + multiplier);

const upgrades = [
  { name: 'Double Stuff', description: '2x', cost: 10 },
  { name: 'Party Pack', description: '5x', cost: 100 },
  { name: 'full feast', description: '10x', cost: 1000 }
  // Add more upgrades as needed
];

const App = () => {
  return (
    <div className="App">
      <header className="header">
        <h1>Samosa Selector</h1>
        <h2>Count: {count}</h2>
        <img className='samosa' src='https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/samosa-recipe.jpg' onClick={updateCount} />
      </header>
      <div className="container">
        {upgrades.map((upgrade, index) => (
          <div className="upgrade" key={index}>
            <h3>{upgrade.name}</h3>
            <p>{upgrade.description}</p>
            <button>{`Cost: ${upgrade.cost} samosas`}</button>
          </div>
        ))}
      </div>
    </div>
  );
}

const buyDoubleStuffed = () => {
  if (count >= 10) {
    setMultiplier(multiplier * 2);
  }
}

const buyPartyPack = () => {
  if (count >= 100) {
    setMultiplier(multiplier * 5);
    setCount(count - 100);
  }
}

const buyFullFeast = () => {
  if (count >= 1000) {
    setMultiplier( multiplier * 10);
    setCount(count - 1000);
  }
}



export default App;
