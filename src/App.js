//import logo from './logo.svg';
import './App.css';
import Form from './Form';
import Home from './home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
function App() {
  return (
    <>
      <Navigation></Navigation>
      <div className='maindiv'>
      
        {/* <div className='maindiv'>Welcome</div> */}


        <BrowserRouter>
          <Routes>
            <Route path='/Form' element={<Form />}></Route>
            <Route path='/Home' element={<Home />}></Route>
          </Routes>
        </BrowserRouter>

      </div>
    </>
  );
}

export default App;
