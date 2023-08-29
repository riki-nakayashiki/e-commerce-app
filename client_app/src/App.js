import TextReact from "./components/TextReact.jsx";

function App() {
    return (
        <main>
            {/* HEADER */}
            <header>
                HEADER
            </header>

            {/* item-list */}
            <section className="item-list">
                <TextReact />
            </section>

            {/* FOOTER */}
            <footer>
                FOOTER
            </footer>
        </main>
    );
}

export default App;