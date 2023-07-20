import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Companies from "./pages/Companies";
import Images from "./pages/Images";
import Updates from "./pages/Updates";
import Events from "./pages/Events";
import Topics from "./pages/Topics";
import Jobs from "./pages/Jobs";

function App() {
  return (
    <main className="w-full h-full">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/images" element={<Images />} />
        <Route path="/updates" element={<Updates />} />
        <Route path="/events" element={<Events />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/jobs" element={<Jobs />} />
      </Routes>
    </main>
  );
}

export default App;
