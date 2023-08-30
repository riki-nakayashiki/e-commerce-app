import ItemList from "./components/item-list/ItemList.jsx";
import Cart from "./components/Cart.jsx";

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

            <Cart />

            {/* FOOTER */}
            <footer>
                FOOTER
            </footer>
        </main>
    );
}

export default App;