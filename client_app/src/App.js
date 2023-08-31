import ItemList from "./components/item-list/ItemList.jsx";
import TempComp from "./components/TempComp.jsx";
import {Routes, Route} from 'react-router-dom';

import Detail from './components/detail.jsx';

function App() {
    return (
        <main>
            {/* HEADER */}
            <header>
                HEADER
            </header>

            {/* item-list */}
            <section className="item-list">
                <ItemList />
            </section>

            {/* <TempComp /> */}

            <Routes>
                <Route path="/detail/:id" element={<Detail/>}></Route>
            </Routes>
            {/* FOOTER */}
            <footer>
                FOOTER
            </footer>
        </main>
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

export default App;``