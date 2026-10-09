
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h2>Welcome to the Home Page!</h2>;
}

function About() {
  return <h2>This is the About Page.</h2>;
}

function Contact() {
  return <h2>Contact us at student@example.com</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <div style={{ fontFamily: "Arial", padding: "20px" }}>
        <h1>React Router Navigation</h1>

        <nav style={{ display: "flex", gap: "20px" }}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;