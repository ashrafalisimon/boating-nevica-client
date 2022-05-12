import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <>
      {/* ------------------
      header components 
      -------------------*/}
      <Header/>

       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
       </Routes> 

       {/* ------------------
        footer components 
        -------------------*/}
        <Footer/>




        
    </>
  );
}

export default App;
