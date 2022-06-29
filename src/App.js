import logo from './logo.svg';
import './App.css';


import ShowItems from './components/ShowItems';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateItem from './components/CreateItem';
import EditItem from './components/EditItem';
import ShowItem from './components/ShowItem';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ShowItems />}/>
          <Route path='/create' element={<CreateItem />}/>
          <Route path='/edit/:id' element={<EditItem />}/>
          <Route path='/item/:id' element={<ShowItem />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
