import '../style/styles.css'
import Header from "./Header.jsx";
import Slider from './Slider.jsx';
import Footer from "./Footer.jsx";
import Items from './item-list/Items.jsx';

export default function Home() {
    return (
    <main>
        {/* HEADER */}
        <Header/>
        <Slider/>

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