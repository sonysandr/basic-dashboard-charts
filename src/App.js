import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Sales from "./pages/sales/Sales";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Industries from "./pages/industries/Industries";
import CountrySales from "./pages/countrysales/CountrySales";
import Overall from "./pages/overall/Overall";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Sales/>} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/population" element={<CountrySales/>} />
          <Route path="/overall" element={<Overall/>} />
          
          
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
