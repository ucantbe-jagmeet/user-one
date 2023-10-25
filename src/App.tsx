import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Register from "./pages/Register";
import ErrorPage from "./pages/ErrorPage";
import CreateUser from "./component/CreateUser";
import SharedLayout from "./pages/SharedLayout";
import { Toaster } from "react-hot-toast";
import { Providers } from "./redux/Provider";

function App() {
  return (
    <Providers>
      <BrowserRouter>
        <Toaster />
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="createuser" element={<CreateUser />} />
          </Route>
          <Route path="/landing" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </Providers>
  );
}

export default App;
