import React, { useState, useEffect } from "react";
import { toast } from "sonner";
import axios from "axios";
import {
  User,
  Calendar,
  MapPin,
  Award,
  Users,
  Plus,
  X,
  Trash,
  Church,
  Building,
} from "lucide-react";

import { type MembreForm } from "../../interface/st-ignace";
import { useParams } from "react-router-dom";

interface StIgnaceFormProps {
  id: string; // code du membre à éditer
}

const StIgnaceEdit: React.FC<StIgnaceFormProps> = () => {
  const { id } = useParams<{ id: string }>();

  const [form, setForm] = useState<MembreForm>({
    code_kristianina: "",
    code_fianakaviana: "",
    code_fianakaviana_niaviana: "",
    nom: "",
    prenom: "",
    date_naissance: "",
    profession: "",
    adresse: "",
    voina_vahatra_tafika: "voina",
    mariage_ok: false,
    mariage_date: "",
    batemy_ok: false,
    batemy_date: "",
    confesy_ok: false,
    komnio_ok: false,
    kofirmasion_ok: false,
    filaharana_ok: false,
    faritra: "",
    apv: "",
    andraikitra: [],
    fm_vm: [],
  });

  const [newAndraikitra, setNewAndraikitra] = useState<string>("");
  const [newFmVm, setNewFmVm] = useState<string>("");

  // Charger les données du membre à éditer
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/st-augustin/api/membres/${id}/`)
      .then((res) => setForm(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const fieldValue =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
    setForm((prev) => ({ ...prev, [name]: fieldValue }));
  };

  const addAndraikitra = () => {
    if (newAndraikitra.trim()) {
      setForm((prev) => ({
        ...prev,
        andraikitra: [...prev.andraikitra, newAndraikitra],
      }));
      setNewAndraikitra("");
    }
  };

  const removeAndraikitra = (index: number) => {
    setForm((prev) => ({
      ...prev,
      andraikitra: prev.andraikitra.filter((_, i) => i !== index),
    }));
  };

  const addFmVm = () => {
    if (newFmVm.trim()) {
      setForm((prev) => ({ ...prev, fm_vm: [...prev.fm_vm, newFmVm] }));
      setNewFmVm("");
    }
  };

  const removeFmVm = (index: number) => {
    setForm((prev) => ({
      ...prev,
      fm_vm: prev.fm_vm.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://127.0.0.1:8000/st-augustin/api/membres/${id}/`,
        form
      );
      toast.success("Membre mis à jour avec succès !");
    } catch (err) {
      console.error(err);
      toast.error("Erreur lors de la mise à jour du membre !");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-8 px-4">
      <div className="">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-600 rounded-2xl mb-4 shadow-lg">
            <Church className="h-8 w-8 text-white" />
          </div>
          <p className="text-lg text-gray-600">Édition du membre</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          <form onSubmit={handleSubmit} className="p-8 space-y-12">
            {/* Identification */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 pb-4 border-b border-gray-200">
                <div className="flex items-center justify-center w-10 h-10 bg-indigo-100 rounded-xl">
                  <User className="h-5 w-5 text-indigo-600" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900">
                  Identification
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Code Kristianina
                  </label>
                  <input
                    type="text"
                    name="code_kristianina"
                    value={form.code_kristianina}
                    readOnly
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 text-gray-600 font-mono text-center focus:outline-none shadow-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Code Fianakaviana
                  </label>
                  <input
                    type="text"
                    name="code_fianakaviana"
                    value={form.code_fianakaviana}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all shadow-sm hover:border-gray-300"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Code Fianakaviana Niaviana
                  </label>
                  <input
                    type="text"
                    name="code_fianakaviana_niaviana"
                    value={form.code_fianakaviana_niaviana}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all shadow-sm hover:border-gray-300"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Informations personnelles */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 pb-4 border-b border-gray-200">
                <div className="flex items-center justify-center w-10 h-10 bg-emerald-100 rounded-xl">
                  <Calendar className="h-5 w-5 text-emerald-600" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900">
                  Informations personnelles
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Nom
                  </label>
                  <input
                    type="text"
                    name="nom"
                    value={form.nom}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all shadow-sm hover:border-gray-300"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Prénom
                  </label>
                  <input
                    type="text"
                    name="prenom"
                    value={form.prenom}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all shadow-sm hover:border-gray-300"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Date de naissance
                  </label>
                  <input
                    type="date"
                    name="date_naissance"
                    value={form.date_naissance}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all shadow-sm hover:border-gray-300"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Profession
                  </label>
                  <input
                    type="text"
                    name="profession"
                    value={form.profession}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all shadow-sm hover:border-gray-300"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  <span>Adresse</span>
                </label>
                <input
                  type="text"
                  name="adresse"
                  value={form.adresse}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all shadow-sm hover:border-gray-300"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Catégorie
                </label>
                <select
                  name="voina_vahatra_tafika"
                  value={form.voina_vahatra_tafika}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all shadow-sm hover:border-gray-300 bg-white"
                >
                  <option value="voina">Voina</option>
                  <option value="vahatra">Vahatra</option>
                  <option value="tafika">Tafika</option>
                </select>
              </div>
            </div>

            {/* Sacrements & Engagements */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 pb-4 border-b border-gray-200">
                <div className="flex items-center justify-center w-10 h-10 bg-amber-100 rounded-xl">
                  <Award className="h-5 w-5 text-amber-600" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900">
                  Sacrements & Engagements
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { key: "mariage", label: "Mariage", hasDate: true },
                  { key: "batemy", label: "Batême", hasDate: true },
                  { key: "confesy", label: "Confession" },
                  { key: "komnio", label: "Communion" },
                  { key: "kofirmasion", label: "Confirmation" },
                  { key: "filaharana", label: "Filaharana" },
                ].map(({ key, label, hasDate }) => (
                  <div key={key} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="text-base font-medium text-gray-700">
                        {label}
                      </label>
                      <button
                        type="button"
                        onClick={() =>
                          setForm((prev) => ({
                            ...prev,
                            [`${key}_ok`]: !(prev as any)[`${key}_ok`],
                          }))
                        }
                        className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${
                          (form as any)[`${key}_ok`]
                            ? "bg-indigo-600"
                            : "bg-gray-300"
                        }`}
                      >
                        <div
                          className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                            (form as any)[`${key}_ok`]
                              ? "translate-x-6"
                              : "translate-x-0"
                          }`}
                        />
                      </button>
                    </div>

                    {hasDate && (form as any)[`${key}_ok`] && (
                      <input
                        type="date"
                        name={`${key}_date`}
                        value={(form as any)[`${key}_date`] || ""}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all shadow-sm hover:border-gray-300"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Localisation */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 pb-4 border-b border-gray-200">
                <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-xl">
                  <Building className="h-5 w-5 text-green-600" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900">
                  Localisation
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Faritra
                  </label>
                  <input
                    type="text"
                    name="faritra"
                    value={form.faritra}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all shadow-sm hover:border-gray-300"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    APV
                  </label>
                  <input
                    type="text"
                    name="apv"
                    value={form.apv}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all shadow-sm hover:border-gray-300"
                  />
                </div>
              </div>
            </div>

            {/* Responsabilités */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 pb-4 border-b border-gray-200">
                <div className="flex items-center justify-center w-10 h-10 bg-purple-100 rounded-xl">
                  <Users className="h-5 w-5 text-purple-600" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900">
                  Responsabilités
                </h2>
              </div>

              {/* Andraikitra */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Andraikitra
                </h3>
                <div className="flex space-x-3">
                  <input
                    type="text"
                    value={newAndraikitra}
                    onChange={(e) => setNewAndraikitra(e.target.value)}
                    className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all shadow-sm hover:border-gray-300"
                    placeholder="Ajouter une nouvelle responsabilité"
                  />
                  <button
                    type="button"
                    onClick={addAndraikitra}
                    className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 transition-all shadow-sm hover:shadow-md"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Ajouter
                  </button>
                </div>
                {form.andraikitra.length > 0 && (
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="space-y-2">
                      {form.andraikitra.map((item, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center px-3 py-2 bg-white rounded-xl shadow-sm"
                        >
                          <span>{item}</span>
                          <button
                            type="button"
                            onClick={() => removeAndraikitra(index)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <Trash className="h-4 w-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* FM/VM */}
              <div className="space-y-4 mt-4">
                <h3 className="text-lg font-semibold text-gray-800">FM/VM</h3>
                <div className="flex space-x-3">
                  <input
                    type="text"
                    value={newFmVm}
                    onChange={(e) => setNewFmVm(e.target.value)}
                    className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all shadow-sm hover:border-gray-300"
                    placeholder="Ajouter un FM/VM"
                  />
                  <button
                    type="button"
                    onClick={addFmVm}
                    className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition-all shadow-sm hover:shadow-md"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Ajouter
                  </button>
                </div>
                {form.fm_vm.length > 0 && (
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="space-y-2">
                      {form.fm_vm.map((item, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center px-3 py-2 bg-white rounded-xl shadow-sm"
                        >
                          <span>{item}</span>
                          <button
                            type="button"
                            onClick={() => removeFmVm(index)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <Trash className="h-4 w-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Submit */}
            <div className="flex justify-center pt-6">
              <button
                type="submit"
                className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white font-semibold text-lg rounded-2xl hover:bg-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <Users className="h-5 w-5 mr-3" />
                Mettre à jour le membre
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StIgnaceEdit;
