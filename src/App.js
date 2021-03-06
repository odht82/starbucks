import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <div className="fixed top-0">
      <div className="App m-0 overflow-hidden box-border p-0 font-inter flex flex-col w-screen h-screen">
        {/* ===Navbar Component in top of column layout=== */}
        <Navbar></Navbar>
        {/* ===Dashboard Component in bottom of column layout=== */}
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
