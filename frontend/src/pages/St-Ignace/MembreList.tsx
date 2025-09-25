import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Eye, Edit, Search } from "lucide-react";

interface Membre {
  id: number;
  code_kristianina: string;
  nom: string;
  prenom: string;
  adresse: string;
  faritra: string;
  apv: string;
}

const MembresList = () => {
  const [membres, setMembres] = useState<Membre[]>([]);
  const [search, setSearch] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/st-ignace/api/membres/")
      .then((res) => setMembres(res.data))
      .catch((err) => console.error(err));
  }, []);

  // Filtrer les membres selon la recherche
  const filteredMembres = membres.filter((m) =>
    `${m.nom} ${m.prenom}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto bg-white rounded-3xl shadow-lg overflow-hidden">
        <div className="p-6 border-b border-gray-200 flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <h1 className="text-2xl font-bold text-gray-900">Kristianina St Ignace de Loyola Soamanandrariny</h1>
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Rechercher par Nom + Prénom"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all shadow-sm hover:border-gray-300"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-indigo-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Code Kristianina</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Nom & Prénom</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Adresse</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Faritra</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">APV</th>
                <th className="px-6 py-3 text-center text-sm font-medium text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredMembres.map((membre) => (
                <tr key={membre.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-800 font-mono">{membre.code_kristianina}</td>
                  <td className="px-6 py-4 text-sm text-gray-800">{membre.nom} {membre.prenom}</td>
                  <td className="px-6 py-4 text-sm text-gray-800">{membre.adresse}</td>
                  <td className="px-6 py-4 text-sm text-gray-800">{membre.faritra}</td>
                  <td className="px-6 py-4 text-sm text-gray-800">{membre.apv}</td>
                  <td className="px-6 py-4 text-center space-x-2">
                    <button
                      onClick={() => navigate(`/membres/${membre.id}`)}
                      className="inline-flex items-center px-3 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-all"
                    >
                      <Eye className="h-4 w-4 mr-1" />
                      Voir détail
                    </button>
                    <button
                      onClick={() => navigate(`/membres/${membre.id}/edit`)}
                      className="inline-flex items-center px-3 py-2 bg-emerald-600 text-white text-sm font-medium rounded-lg hover:bg-emerald-700 transition-all"
                    >
                      <Edit className="h-4 w-4 mr-1" />
                      Modifier
                    </button>
                  </td>
                </tr>
              ))}
              {filteredMembres.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-4 text-center text-gray-500">
                    Aucun membre trouvé.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MembresList;
