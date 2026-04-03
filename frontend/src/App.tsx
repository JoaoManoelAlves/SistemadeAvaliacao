import { Routes, Route, BrowserRouter } from "react-router-dom";

import LoginPage from "./pages/Login/LoginPage";
import TypesPage from "./pages/Types/TypesPage";
import Users from "./pages/users/UsersPage";
import Presentations from "./pages/Presentations/PreesentationsPage";
import Ranking from "./pages/Ranking/RankingPage";

import DashboardLayout from "./layouts/DashboardLayout";
//Mexi nas rotas, retirei aquelas com arquivos teste lá na pasta Routes, talvez apague ela, mas detalhes. E por fim coloquei só as necessárias.
export default function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<LoginPage />} />
        <Route element={<DashboardLayout />}>

          <Route path="/types" element={<TypesPage />} />
          <Route path="/users" element={<Users />} />
          <Route path="/presentations" element={<Presentations />} />
          <Route path="/ranking" element={<Ranking />} />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}