import '../style/styles.css'
import Header from "./Header.jsx";
import ItemList from "./item-list/ItemList.jsx";
import Footer from "./FooterComponent.jsx";

import Items from './item-list/Items.jsx';
import Cart from "../components/Cart.jsx";
import Header from "./Header.jsx";
import Footer from "./FooterComponent.jsx";
import TempComp from "../components/TempComp.jsx";

export default function Home() {
    return (
    <main>
        {/* HEADER */}
        <Header/>

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