import './App.css';
import DigitalClock from './Components/DigitalClock';
// import ImageShow2 from './Components/ImageShow2';
import Validation from './Components/Validation';
import Forms from './Forms';
import { BrowserRouter, Route, Routes, Link } from'react-router-dom';
// import AddNumbers from './Components/AddNumbers';
import ImageSlider from './Components/ImageSlider';
import FetchUrl from './FetchWeather';
// import Mainbody from './Components/Mainbody';

function App() {
  return (
    // <BrowserRouter>
    // <div className="App">
    //   <Routes>
    //     <Route path='/' element={<DigitalClock></DigitalClock>} />
    //     <Route path='/images' element={<ImageSlider />}></Route>
    //     <Route path='/forms' element={<Forms />}></Route>
        
    //   </Routes>
    //   <Link to='/images'>ImageSlider</Link>
    //   <Link to='/forms'>Forms</Link>
    // </div>
    // </BrowserRouter>
    <div className="App">
      {/* <Validation /> */}
      <FetchUrl />
    </div>
  );
}

export default App;
