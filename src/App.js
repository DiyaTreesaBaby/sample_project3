import logo from './logo.svg';
import './App.css';
import AddForm from './components/AddForm';
import AddSearch from './components/AddSearch';
import AddHome from './components/AddHome';
import AddFav from './components/AddFav';
import AddNavbar from './components/AddNavbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
<Route path='/' element={<AddHome/>}/>
<Route path='/form' element={<AddForm/>}/>
<Route path='search/' element={<AddSearch/>}/>
<Route path='/fav' element={<AddFav/>}/>

      </Routes>
      
      
      
      </BrowserRouter>
    </div>
  );
}

export default App;
