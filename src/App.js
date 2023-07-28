
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav';
import Home from './Pages/Home';

import Food from './Pages/Food';
import Fitness from './Pages/Fitness';
import Technology from './Pages/Technology';
import Hollywood from './Pages/Hollywood';
import Bollywood from './Pages/Bollywood';
import Header from './Components/Header';
import Details from './Pages/Details';

function App() {
  return (
    <div className="App">
      <header className="App-header">
    
        <Header/>
       <BrowserRouter>
       <Nav/>
       <Details>
     
       
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/bollywood' element={<Bollywood/>} />
        <Route path='/hollywood' element={< Hollywood/>} />
        <Route path='/technology' element={<Technology/>} />
        <Route path='/fitness' element={<Fitness/>} />
        <Route path='/food' element={<Food/>} />
    
        {/* <Route path='*' element={<Details/>} /> */}
       </Routes>
       </Details>
       </BrowserRouter>
            
  
      </header>
    </div>
  );
}

export default App;
