import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./componets/Navbar";
import Footer from "./componets/Footer";
import Header from "./componets/Header";
import Mobile from "./navbar_page/Mobile";
import Posibillities from "./navbar_page/Posibillities";
import More from "./navbar_page/More";
import Peca from "./navbar_page/Peca";
import Brouzer from "./navbar_page/Brouzer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        {/* <Route path="section" element={<Section/>} /> */}
        <Route path="pc" element={<Peca/>} />
        <Route path="mobil" element={<Mobile/>} />
        <Route path="posibillities" element={<Posibillities/>} />
        <Route path="brouzer" element={<Brouzer/>} />
        <Route path="more" element={<More/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
