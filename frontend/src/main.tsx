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
          <Route path="/ajout-soama" element={<StIgnaceForm />} />
          <Route path="/list-soama" element={<MembresList />} />
          <Route path="/membres/:id" element={<MembreDetail />} />
          <Route path="/membres/:id/edit" element={<StIgnaceEdit />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  </React.StrictMode>
);
