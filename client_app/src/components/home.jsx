import '../style/styles.css'
import Header from "./Header.jsx";
import ItemList from "./item-list/ItemList.jsx";
import Footer from "./FooterComponent.jsx";

import Items from './item-list/Items.jsx';

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