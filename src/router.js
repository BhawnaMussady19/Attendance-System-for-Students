import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calendar from './components/calendar';
import LoginPage from './components/login'
import BasicTable from "./components/dashboard";
import App from "./App";
import HomePage from "./components/homepage";
export default function Router() {

return (
<BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<BasicTable />} />
          <Route path="calendar" element={<Calendar />} />
        </Route>
      </Routes>
    </BrowserRouter>
)
}