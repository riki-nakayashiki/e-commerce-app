import '../style/styles.css'
import Header from "./Header.jsx";
import ItemList from "./item-list/ItemList.jsx";
import Footer from "./FooterComponent.jsx";

import Cart from "./Cart.jsx";
import TempComp from "./TempComp.jsx";

export default function Home() {
    return (
    <main>
        {/* HEADER */}
        <Header />

        {/* SLIDER */}

        {/* item-list */}
        <section>
            <ItemList />
        </section>

        {/* <TempComp /> */}

        {/* FOOTER */}
            <Footer/>
        </main>
    );
  }