import { Route, Routes, Navigate } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Faq from "./Faq";
import Travel from "./Travel";
import Registry from "./Registry";
import RSVP from "./RSVP";

function Navigation() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/registry" element={<Registry />} />
        <Route path="/rsvp" element={<RSVP />} />
      </Routes>
    </>
  );
}

export default Navigation;
