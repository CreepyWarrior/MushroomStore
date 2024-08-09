import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './Pages/Layout';
import Menu from './Pages/Menu';
import Tienda1 from './Pages/Tienda1';
import Tienda2 from './Pages/Tienda2';
import Comprado from './Pages/Comprado';

function App() {
  return (
    <div>
      <image src=""></image>
      <Routes>
        <Route path='/' element = {<Layout />}>
          <Route path='/' element = {<Menu />} />
          <Route path='tienda1' element = {<Tienda1 />} />
          <Route path='tienda2' element = {<Tienda2/>} />
          <Route path='comprado' element = {<Comprado/>} />

        </Route>
      </Routes>
    </div>
  );
}

export default App;
