
import cities from './cities.json'
import './App.css';
import CityFilter from './CityFilter';
import CityFilterDebounce from './CityFilterDebounce';
import StopWatch from './StopWatch';

function App() {
  return (
    <div className="App">
      <h1>Debouncing example</h1>
      {/* <CityFilter cities={cities}/> */}
      {/* <CityFilterDebounce cities={cities}/> */}
      <StopWatch/>
    </div>
  );
}

export default App;
