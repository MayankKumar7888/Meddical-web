import { BrowserRouter, Routes, Route } from "react-router-dom";

import { lazy, Suspense } from "react";
const Layout = lazy(() => import("./Layout"));
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Doctors = lazy(() => import("./pages/Doctors"));
const News = lazy(() => import("./pages/News"));
const Contact = lazy(() => import("./pages/Contact"));


function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />} >
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter >
    </Suspense>
  );
}

export default App;