import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LayoutMain from "./components/layouts/LayoutMain";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Spinner from "./components/common/Spinner";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Api from "./pages/Api";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import DashboardPage from "./pages/member/dashboard";
function App() {
  return (
    <div className="App">
      <Spinner />
      <ToastContainer autoClose={1000} />
      <Router>
        <Routes>
          <Route path="/" element={<LayoutMain />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="api" element={<Api />} />

            {/* protected routes */}
            <Route element={<ProtectedRoute allowedRoles={[1, 2]} />}>
              <Route path="/member/dashboard" element={<DashboardPage />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
