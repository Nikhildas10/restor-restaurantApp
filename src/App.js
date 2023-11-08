import './App.css';
import './index.css'
import Button from "react-bootstrap/Button";
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import View from './pages/View';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/view/:id' element={<View></View>}></Route>
      </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
