import React from 'react';
import Header from "./components/Header.jsx";
import ItemList from "./components/item-list/ItemList.jsx";
import TempComp from "./components/TempComp.jsx";
import FooterComponent from "./components/FooterComponent.jsx"; 

function App() {
    return (
        <main>
            {/* HEADER */}
            <Header /> 
            {/* item-list */}
            <section>
                <ItemList />
            </section>
            <TempComp />
            {/* FOOTER */}
            <FooterComponent /> 
        </main>
    );
}

export default App;
