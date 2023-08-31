import '../style/styles.css'
import Items from './item-list/Items.jsx';
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
            <Items />
        </section>

        {/* <TempComp /> */}
           {/* FOOTER */}
           <footer>
                FOOTER
            </footer>
        </main>
    );
  }