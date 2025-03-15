import React, { useState } from 'react'; // ✅ Fix: Added useState
import Footer from '../components/Footer';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Collections from '../components/Collections';

import { Gents,Ladies,Kids } from '../data';
import WomanCollection from '../components/WomanColletion';
import KidsCollection from '../components/KidsCollection';


const MainPage = () => {

    const [gentsFashion, setGentsFashion] = useState(Gents);
    const [ladiesFashion, setLadiesFashion] = useState(Ladies);
    const [kidsFashion, setKidsFashion] = useState(Kids);
    console.log(Gents);
    console.log(Ladies);
    console.log(Kids);
  return (
    <div>
      <Header />
      <Banner />
      <Collections gentsFashion={gentsFashion} />
      <WomanCollection ladiesFashion={ladiesFashion} />
      <KidsCollection  kidsFashion={kidsFashion} />
      <Footer />
    </div>
  );
}

export default MainPage;