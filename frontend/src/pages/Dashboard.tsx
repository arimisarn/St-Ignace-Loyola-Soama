import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [totalSoamanandrariny, setTotalSoamanandrariny] = useState<number>(0);

  useEffect(() => {
    const fetchTotal = async () => {
      try {
        const res = await axios.get(
          "http://127.0.0.1:8000/st-ignace/api/membres/"
        );
        const membres = res.data;

        // Le total est simplement le nombre de membres
        setTotalSoamanandrariny(membres.length);
      } catch (err) {
        console.error("Erreur lors de la récupération des membres :", err);
      }
    };

    fetchTotal();
  }, []);

  return (
    <div className="bg-gray-200 flex min-h-screen">
      <div className="flex-1 p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <div className="bg-gradient-to-r from-pink-500 to-orange-400 text-white rounded-lg shadow p-6 transform hover:scale-105 transition-transform duration-300 hover:shadow-xl">
            <h2 className="text-xl font-semibold mb-2">
              Total Kristianina ZP + Paroasy
            </h2>
            <p className="text-2xl font-bold">6700</p>
          </div>

          <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg shadow p-6 transform hover:scale-105 transition-transform duration-300 hover:shadow-xl">
            <h2 className="text-xl font-semibold mb-2">
              Total Kristianina Soamanandrariny
            </h2>
            <p className="text-2xl font-bold">{totalSoamanandrariny}</p>
          </div>

          <div className="bg-gradient-to-r from-green-400 to-teal-500 text-white rounded-lg shadow p-6 transform hover:scale-105 transition-transform duration-300 hover:shadow-xl">
            <h2 className="text-xl font-semibold mb-2">
              Total Kristianina ZP Ankadrina
            </h2>
            <p className="text-2xl font-bold">342</p>
          </div>

          <div className="bg-gradient-to-r from-yellow-400 to-red-400 text-white rounded-lg shadow p-6 transform hover:scale-105 transition-transform duration-300 hover:shadow-xl">
            <h2 className="text-xl font-semibold mb-2">
              Total Kristianina ZP Ankadindramamy
            </h2>
            <p className="text-2xl font-bold">89</p>
          </div>

          <div className="bg-gradient-to-r from-blue-400 to-indigo-600 text-white rounded-lg shadow p-6 transform hover:scale-105 transition-transform duration-300 hover:shadow-xl">
            <h2 className="text-xl font-semibold mb-2">
              Total Kristianina ZP Ambohimahitsy
            </h2>
            <p className="text-2xl font-bold">128</p>
          </div>

          <div className="bg-gradient-to-r from-pink-600 to-purple-700 text-white rounded-lg shadow p-6 transform hover:scale-105 transition-transform duration-300 hover:shadow-xl">
            <h2 className="text-xl font-semibold mb-2">Total Faritra</h2>
            <p className="text-2xl font-bold">14</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
            <p className="text-gray-500">Total vita batemy</p>
            <p className="text-xl font-bold">23</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
            <p className="text-gray-500">Total vita Konfesy Voalohany</p>
            <p className="text-xl font-bold">12</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
            <p className="text-gray-500">Total vita Komnio Voalohany</p>
            <p className="text-xl font-bold">7</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
            <p className="text-gray-500">Total vita Fankaherezana</p>
            <p className="text-xl font-bold">3</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
            <p className="text-gray-500">Total vita Filaharana</p>
            <p className="text-xl font-bold">3</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-4 overflow-x-auto mb-6">
          <h2 className="text-lg font-semibold mb-4">Dernières commandes</h2>

          <div className="grid grid-cols-4 gap-4 bg-gray-50 p-3 rounded-t-lg font-medium text-gray-500 uppercase text-sm">
            <div>Commande</div>
            <div>Client</div>
            <div>Montant</div>
            <div>Statut</div>
          </div>

          <div className="divide-y divide-gray-200">
            <div className="grid grid-cols-4 gap-4 p-3 hover:bg-gray-100 transition rounded">
              <div className="font-medium">#001</div>
              <div>Alice</div>
              <div>150.000 Ar</div>
              <div className="text-green-600 font-semibold">Validée</div>
            </div>

            <div className="grid grid-cols-4 gap-4 p-3 hover:bg-gray-100 transition rounded">
              <div className="font-medium">#002</div>
              <div>Bob</div>
              <div>245.000 Ar</div>
              <div className="text-yellow-600 font-semibold">En attente</div>
            </div>

            <div className="grid grid-cols-4 gap-4 p-3 hover:bg-gray-100 transition rounded">
              <div className="font-medium">#003</div>
              <div>Charlie</div>
              <div>320.000 Ar</div>
              <div className="text-red-600 font-semibold">Annulée</div>
            </div>
          </div>
        </div>

        <footer className="text-center text-gray-500 text-sm mt-6">
          &copy; 2025 Mon Dashboard. Tous droits réservés.
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;
