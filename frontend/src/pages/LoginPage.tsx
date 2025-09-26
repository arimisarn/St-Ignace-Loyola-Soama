import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Lock, User } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://127.0.0.1:8000/api/accounts/login/", {
        username,
        password,
      });
      toast.success(res.data.message);
      navigate("/dashboard");
    } catch (err: any) {
      toast.error(err.response?.data ? JSON.stringify(err.response.data) : "Erreur serveur");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <motion.form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Connexion</h2>
        <div className="mb-4 flex items-center gap-2">
          <User />
          <input
            type="text"
            placeholder="Nom d'utilisateur"
            className="w-full border px-3 py-2 rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-4 flex items-center gap-2">
          <Lock />
          <input
            type="password"
            placeholder="Mot de passe"
            className="w-full border px-3 py-2 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
        >
          Se connecter
        </button>
        <div className="flex items-center justify-center pt-4 hover:underline"> <Link to="/register">Créer un compte</Link> </div>
      </motion.form>
    </div>
  );
};

export default LoginPage;
