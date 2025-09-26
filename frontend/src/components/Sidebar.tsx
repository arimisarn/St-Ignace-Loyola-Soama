import React from "react";
import {
  Home,
  Users,
  User,
  ShoppingCart,
  MessageCircle,
  X,
  Church,
} from "lucide-react";
import { Link } from "react-router-dom";
interface SidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}
const Sidebar = ({ isSidebarOpen, toggleSidebar }: SidebarProps) => {
  return (
    <div
      className={`bg-white shadow-2xl fixed top-0 left-0 z-50 text-black min-h-screen h-screen overflow-hidden transition-all duration-300 ease-in-out flex flex-col ${
        isSidebarOpen ? "w-64 p-6" : "w-16 p-2 items-center"
      }`}
      style={{ position: "relative" }}
    >
      {/* Close button visible seulement si sidebar ouverte */}
      {isSidebarOpen && (
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 transition"
        >
          <X size={20} />
        </button>
      )}
      {isSidebarOpen && (
        <div className="mb-6 mt-12">
          <h1 className="text-xl font-bold mb-2">St Ignace de Loyola</h1>
          <p className="text-gray-500 text-sm">Soamanandrariny</p>
        </div>
      )}
      <nav className="space-y-4 mt-12">
        <Link
          to="dashboard"
          className={`flex items-center rounded hover:bg-gray-200 transition group ${
            isSidebarOpen ? "py-2 px-3" : "justify-center py-2"
          }`}
          title={!isSidebarOpen ? "Accueil" : undefined}
        >
          <Home size={24} className="text-gray-600 group-hover:text-gray-800" />
          {isSidebarOpen && <span className="ml-3">Accueil</span>}
        </Link>
        <Link
          to="list-soama"
          className={`flex items-center rounded hover:bg-gray-200 transition group ${
            isSidebarOpen ? "py-2 px-3" : "justify-center py-2"
          }`}
          title={!isSidebarOpen ? "P.Soamanandrariny" : undefined}
        >
          <Church
            size={24}
            className="text-gray-600 group-hover:text-gray-800"
          />
          {isSidebarOpen && <span className="ml-3">P.Soamanandrariny</span>}
        </Link>
        <Link
          to="/list-ankadindramamy"
          className={`flex items-center rounded hover:bg-gray-200 transition group ${
            isSidebarOpen ? "py-2 px-3" : "justify-center py-2"
          }`}
          title={!isSidebarOpen ? "ZP Ankadindramamy" : undefined}
        >
          <Church size={24} className="text-gray-600 group-hover:text-gray-800" />
          {isSidebarOpen && <span className="ml-3">ZP Ankadindramamy</span>}
        </Link>
        <a
          href="#"
          className={`flex items-center rounded hover:bg-gray-200 transition group ${
            isSidebarOpen ? "py-2 px-3" : "justify-center py-2"
          }`}
          title={!isSidebarOpen ? "ZP Ankadrina" : undefined}
        >
          <Church
            size={24}
            className="text-gray-600 group-hover:text-gray-800"
          />
          {isSidebarOpen && <span className="ml-3">ZP Ankadrina</span>}
        </a>
        <Link
          to="/list-ambohimahitsy"
          className={`flex items-center rounded hover:bg-gray-200 transition group ${
            isSidebarOpen ? "py-2 px-3" : "justify-center py-2"
          }`}
          title={!isSidebarOpen ? "ZP Ambohimahitsy" : undefined}
        >
          <Church
            size={24}
            className="text-gray-600 group-hover:text-gray-800"
          />
          {isSidebarOpen && <span className="ml-3">ZP Ambohimahitsy</span>}
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
