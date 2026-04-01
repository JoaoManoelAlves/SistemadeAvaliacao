import { Routes, Route, BrowserRouter } from "react-router-dom";

import LoginPage from "./pages/Login/LoginPage";
import DashBoard from "./pages/Dashboard/DashboardPage";

import PrimeiraTela from "./pages/Routes/testfile";
import SegundaTela from "./pages/Routes/testfile2";
import TerceiraTela from "./pages/Routes/testfile3";
import QuartaTela from "./pages/Routes/testfile4";

import DashboardLayout from "./layouts/DashboardLayout";

export default function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<LoginPage />} />

        <Route element={<DashboardLayout />}>

          <Route path="/DashBoard" element={<DashBoard />} />
          <Route path="/First" element={<PrimeiraTela />} />
          <Route path="/Second" element={<SegundaTela />} />
          <Route path="/Third" element={<TerceiraTela />} />
          <Route path="/Four" element={<QuartaTela />} />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}