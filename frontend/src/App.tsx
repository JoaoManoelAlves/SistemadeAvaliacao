import { Routes,Route,BrowserRouter, } from "react-router-dom"
import LoginPage from "./pages/Login/LoginPage"
import DashBoard from "./pages/Dashboard/DashboardPage"
import PrimeiraTela from "./pages/OtherPages/testfile";
import SegundaTela from "./pages/OtherPages/testfile2";
import TerceiraTela from "./pages/OtherPages/testfile3";
import QuartaTela from "./pages/OtherPages/testfile4";

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/DashBoard" element={<DashBoard />} />
        <Route path="/First" element={< PrimeiraTela/>} />
        <Route path="/Second" element={<SegundaTela />} />
        <Route path="/Third" element={<TerceiraTela />} />
        <Route path="/Four" element={<QuartaTela />} />
      </Routes>
    </BrowserRouter>
  )
}