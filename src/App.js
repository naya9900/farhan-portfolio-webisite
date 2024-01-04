import './App.css';
import About from './about';
import Post from './component/post';
import Home from './home';
import Navbar from './navbar';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/post' element={<Post/>}/>
          <Route path='/about' element={<About/>}/>
      
      </Routes>
    </div>
  );
}

export default App;
