
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard person={{firstName:"Joe", lastName:"Coats",age:26,hairColor:"Black"}}/>
      <PersonCard person={{firstName:"John", lastName:"Doe",age:55,hairColor:"Brown"}}/>
      <PersonCard person={{firstName:"Sarah", lastName:"Conner",age:38,hairColor:"Blonde"}}/>
      <PersonCard person={{firstName:"Hannah", lastName:"Gayle",age:22,hairColor:"Light-Brown"}}/>
    </div>
  );
}

export default App;
