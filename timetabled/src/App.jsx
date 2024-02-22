import './App.css';
import Calendar  from './components/Calendar';

const App = () => {

  return (
    <div className="App">
      <h1>Timetabled</h1>
      <h2> You need to go to class in 15 mins</h2>
      <Calendar />
    </div>
  )
}

export default App
