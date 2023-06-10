import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/'
        index element={
          <>
          <Header/>
          <Home/>
          </>
        }></Route>
          <Route path='/about' 
          element={
            <>
            <Header/>
            <About/>
            </>
          }></Route>
          <Route path='/contact-us'
          element={
            <>
            <Header/>
            <Contact/>
            </>
          }
          ></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
