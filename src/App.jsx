import { useState } from "react";
import About from "./Components/About";
import Events from "./Components/Events";
import VideoIntro from "./Components/VideoIntro";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";

function App() {
  const [showVideo, setShowVideo] = useState(true);

  return (
    <div className="bg-[#080808] min-h-screen w-full">
      {showVideo && <VideoIntro onComplete={() => setShowVideo(false)} />}

      <Navbar />

      <section id="home" className="w-full">
        <Hero />
      </section>

      <section id="about" className="w-full">
        <About />
      </section>

      <section id="events" className="w-full">
        <Events />
      </section>

      <section id="sponsors">
        {/* <Sponsors /> */}
      </section>

      <section id="contact">
        {/* <Contact /> */}
      </section>
    </div>
  )
}

export default App