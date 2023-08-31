import '../style/styles.css'
import ItemList from "../components/item-list/ItemList.jsx";
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
            <ItemList />
        </section>

        {/* <TempComp /> */}
           {/* FOOTER */}
           <Footer/>
        </main>
    );
  }