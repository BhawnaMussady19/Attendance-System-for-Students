import Header from './components/header';
import './App.css';
import { Outlet } from 'react-router-dom/dist';

function App() {
  return (
    <div className="App">
      <Header/>
      <Outlet/>
    </div>
  );
}

export default App;
