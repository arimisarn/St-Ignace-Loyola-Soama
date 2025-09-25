import React, { useState, type ReactNode } from "react";
import Sidebar from "./Sidebar";
import { Toaster } from "sonner";
import { PanelRight } from "lucide-react";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <div className="flex min-h-screen bg-gray-200">
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1 p-6">
        <Toaster />
        {!isSidebarOpen && (
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg hover:bg-white hover:shadow-md transition mb-4"
          >
            <PanelRight size={24} className="text-gray-700" />
          </button>
        )}
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
