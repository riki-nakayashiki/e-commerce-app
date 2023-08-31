import '../style/styles.css'
import ItemList from "../components/item-list/ItemList.jsx";
import Cart from "../components/Cart.jsx";
import TempComp from "../components/TempComp.jsx";

export default function Home() {
    return (
    <main>
        {/* HEADER */}
        <header>
            HEADER
        </header>

        {/* item-list */}
        <section>
            <ItemList />
        </section>

        {/* <TempComp /> */}
           {/* FOOTER */}
           <footer>
                FOOTER
            </footer>
        </main>
    );
  }