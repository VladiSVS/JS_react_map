import logo from './logo.svg';
import './App.css';
import ToDoList from './components/ToDoList';
import FilmsList from './components/FilmsList';
import WeatherList from './components/WeatherList';



function App() {
  return (
    <div>
      <ToDoList />
      <WeatherList />
      <FilmsList />
    </div>
  );
}

export default App;
