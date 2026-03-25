import { Routes,Route,BrowserRouter, } from "react-router-dom"
import LoginPage from "./pages/Login/LoginPage"
export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}