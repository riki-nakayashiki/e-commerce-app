import './style/styles.css'
import Items from './components/item-list/Items.jsx';
import Cart from "./components/Cart.jsx";
import TempComp from "./components/TempComp.jsx";

function App() {
    return (
        <main>
            {/* HEADER */}
            <header>
                HEADER
            </header>

            {/* item-list */}
            <section>
                <Items />
            </section>

            {/* <Cart /> */}
            {/* <TempComp /> */}

            {/* FOOTER */}
            <footer>
                FOOTER
            </footer>
        </main>
    );
}

export default App;