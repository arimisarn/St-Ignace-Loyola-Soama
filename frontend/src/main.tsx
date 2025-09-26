import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { Navigate } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import MainLayout from "./components/MainLayout";
import StIgnaceForm from "./pages/St-Ignace/StIgnaceForm";
import MembresList from "./pages/St-Ignace/MembreList";
import MembreDetail from "./pages/St-Ignace/MembreDetail";
import StIgnaceEdit from "./pages/St-Ignace/StIgnaceEdit";
import StAugustinForm from "./pages/St-Augustin/StAugustinForm";
import MembresListAug from "./pages/St-Augustin/MembreListAug";
import MembreDetailAug from "./pages/St-Augustin/MembreDetailAug";
import StAugustinEdit from "./pages/St-Augustin/StAugustinEdit";
// Dashboard ou autres pages plus tard

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <MainLayout>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Soama */}
          <Route path="/ajout-soama" element={<StIgnaceForm />} />
          <Route path="/list-soama" element={<MembresList />} />
          <Route path="/membres-soama/:id" element={<MembreDetail />} />
          <Route path="/membres-soama/:id/edit" element={<StIgnaceEdit />} />

          {/* Ambohimahitsy */}
          <Route path="/ajout-ambohimahitsy" element={<StAugustinForm />} />
          <Route path="/list-ambohimahitsy" element={<MembresListAug />} />
          <Route path="/membres-aug/:id" element={<MembreDetailAug />} />
          <Route path="/membres-aug/:id/edit" element={<StAugustinEdit />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  </React.StrictMode>
);
