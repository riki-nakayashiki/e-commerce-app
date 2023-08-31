import Header  from './components/Header.jsx';
import Slider from './components/Slider.jsx';
import './style/styles.css'
import {Routes, Route} from 'react-router-dom';

import Home from './components/home.jsx';
import Detail from './components/detail.jsx';
import Footer from './components/Footer.jsx';
   


function App() {
    return (
            <Routes>
                <Route path="/" element= {<Header/>}></Route>
                <Route path="/" element= {<Slider/>}></Route>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/detail/:id" element={<Detail/>}></Route>
                <Route path="/" element= {<Footer/>}></Route>

            </Routes>
    );
}
// function App() {
//     return (
//       <div className="App">
//         <Routes>
//             <Route path='/detail' element={<Detail />}></Route>
//         </Routes>

//       </div>
//     );
//   }

export default App;