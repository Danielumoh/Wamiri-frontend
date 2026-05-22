import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import BookingPage from "./Pages/BookingPage";

function App() {
  return (
    <Routes>
      {/* Home page */}
      <Route
        path="/"
        element={
          <div>
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Gallery />
            <Footer />
          </div>
        }
      />

      {/* Booking page */}
      <Route path="/booking" element={<BookingPage />} />
    </Routes>
  );
}

export default App;
