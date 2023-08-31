import './style/styles.css'
import {Routes, Route} from 'react-router-dom';
import Home from './components/home.jsx';
import Detail from './components/detail.jsx';
   


function App() {
    return (
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/detail/:id" element={<Detail/>}></Route>
            </Routes>
    );
}

export default App;