import "./App.css";

import Manager from "./components/Manager";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow bg-green-50">
          <Manager />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
