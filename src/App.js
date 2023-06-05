import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClassicSwap from "./components/classicswap/ClassicSwap";
import Landing from "./pages/landing/Landing";
import Dex from "./pages/dex/Dex";
import LimitSwap from "./components/limitswap/LimitSwap";
import Staking from "./Dao/Staking";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       
        <Routes>
          <Route path="" element={<Landing />} />
          <Route path="/dex*" element={<Dex />} />
          <Route path="/dex/classicswap" element={<ClassicSwap/>} />
          <Route path="/dex/limitorder" element={<LimitSwap/>}/>
          <Route path="/dex/dao/staking" element={<Staking/>}/>
            
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// [[redirects]]
// from = "/*"
// to = "/index.html"
// status = 200
