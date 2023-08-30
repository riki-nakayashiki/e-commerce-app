import './style/styles.css'
import ItemList from "./components/item-list/ItemList.jsx";
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
                {/* <ItemList /> */}
            </section>

            <TempComp />

            {/* FOOTER */}
            <footer>
                FOOTER
            </footer>
        </main>
    );
}

export default App;