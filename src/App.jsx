import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import About from "./Components/About";
import Events from "./Components/Events";
import VideoIntro from "./Components/VideoIntro";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import LastYearSensation from "./Components/LastYearSensation";
import Sponsors from "./Components/Sponsors";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScroolToTop";
import Contact from "./Components/Contact";
import EventDetails from "./Pages/EventDetails";

function App() {
  const [showVideo, setShowVideo] = useState(true);

  return (
    <div className="bg-[#080808] min-h-screen w-full">
      {showVideo && <VideoIntro onComplete={() => setShowVideo(false)} />}

      <Navbar />
      <ScrollToTop />

      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <section id="home">
                <Hero />
              </section>

              <section id="about">
                <About />
              </section>

              <section id="events">
                <Events />
              </section>

              <section id="last-year">
                <LastYearSensation />
              </section>

              <section id="sponsors">
                <Sponsors />
              </section>

              <section id="contact">
                <Contact />
              </section>

              <Footer />
            </>
          }
        />

        {/* EVENT DETAILS PAGE */}
        <Route path="/events/:id" element={<EventDetails />} />
      </Routes>
    </div>
  );
}

export default App;
