import ItemList from "./components/item-list/ItemList.jsx";

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

            {/* FOOTER */}
            <footer>
                FOOTER
            </footer>
        </main>
    );
}

export default App;