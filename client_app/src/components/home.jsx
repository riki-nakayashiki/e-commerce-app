import '../style/styles.css'
import Header from "./Header.jsx";
import ItemList from "./item-list/ItemList.jsx";
import Footer from "./FooterComponent.jsx";

import Items from './item-list/Items.jsx';
import Cart from "../components/Cart.jsx";
import TempComp from "../components/TempComp.jsx";

export default function Home() {
    return (
    <main>
        {/* HEADER */}
        <Header />

        {/* SLIDER */}

        {/* item-list */}
        <section>
            <Items />
        </section>

        {/* <TempComp /> */}

        {/* FOOTER */}
            <Footer/>
        </main>
    );
  }