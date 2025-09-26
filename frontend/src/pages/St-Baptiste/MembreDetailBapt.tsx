import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  User,
  Calendar,
  MapPin,
  Award,
  Building,
  Users,
  ArrowLeft,
  Check,
  X,
  Phone,
  Mail,
  Clock,
  Church,
  Printer,
} from "lucide-react";

interface MembreDetailType {
  id: number;
  code_kristianina: string;
  code_fianakaviana: string;
  code_fianakaviana_niaviana: string;
  nom: string;
  prenom: string;
  date_naissance: string;
  profession: string;
  adresse: string;
  voina_vahatra_tafika: string;
  mariage_ok: boolean;
  mariage_date: string | null;
  batemy_ok: boolean;
  batemy_date: string | null;
  confesy_ok: boolean;
  komnio_ok: boolean;
  kofirmasion_ok: boolean;
  filaharana_ok: boolean;
  faritra: string;
  apv: string;
  andraikitra: string[];
  fm_vm: string[];
}
const calculateAge = (dateString: string) => {
  const today = new Date();
  const birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
};

const MembreDetailBapt = () => {
  const { id } = useParams<{ id: string }>();
  const [membre, setMembre] = useState<MembreDetailType | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/st-baptiste/api/membres/${id}/`)
      .then((res) => setMembre(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!membre) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4 animate-pulse">
            <User className="h-8 w-8 text-indigo-600" />
          </div>
          <p className="text-xl text-gray-600 font-medium">
            Chargement du membre...
          </p>
          <div className="mt-4 flex justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
          </div>
        </div>
      </div>
    );
  }

  const StatusBadge = ({
    status,
    date,
    label,
  }: {
    status: boolean;
    date?: string | null;
    label: string;
  }) => (
    <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 hover:shadow-md transition-all duration-200">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <div
          className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
            status
              ? "bg-emerald-200 text-emerald-800"
              : "bg-red-200 text-red-600"
          }`}
        >
          {status ? (
            <>
              <Check className="h-3 w-3 mr-1" />
              Oui
            </>
          ) : (
            <>
              <X className="h-3 w-3 mr-1" />
              Non
            </>
          )}
        </div>
      </div>
      {status && date && (
        <div className="flex items-center text-xs text-gray-500">
          <Clock className="h-3 w-3 mr-1" />
          {date}
        </div>
      )}
    </div>
  );

  const InfoCard = ({
    icon: Icon,
    title,
    children,
    color = "indigo",
  }: {
    icon: any;
    title: string;
    children: React.ReactNode;
    color?: string;
  }) => {
    const colorClasses = {
      indigo: "bg-indigo-100 text-indigo-600",
      emerald: "bg-emerald-100 text-emerald-600",
      amber: "bg-amber-100 text-amber-600",
      green: "bg-green-100 text-green-600",
      purple: "bg-purple-100 text-purple-600",
    };

    return (
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-6">
            <div
              className={`flex items-center justify-center w-12 h-12 rounded-xl ${
                colorClasses[color as keyof typeof colorClasses]
              }`}
            >
              <Icon className="h-6 w-6" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">{title}</h2>
          </div>
          {children}
        </div>
      </div>
    );
  };

  const DataField = ({
    label,
    value,
    className = "",
  }: {
    label: string;
    value: string | number;
    className?: string;
  }) => (
    <div className={`space-y-1 ${className}`}>
      <dt className="text-sm font-medium text-gray-500 uppercase tracking-wide">
        {label}
      </dt>
      <dd className="text-base font-semibold text-gray-900">{value || "-"}</dd>
    </div>
  );

  const getCategoryBadge = (category: string) => {
    const badges = {
      voina: "bg-blue-100 text-blue-800 border-blue-200",
      vahatra: "bg-green-100 text-green-800 border-green-200",
      tafika: "bg-purple-100 text-purple-800 border-purple-200",
    };

    return (
      <span
        className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${
          badges[category as keyof typeof badges] || badges.voina
        }`}
      >
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-8 px-4">
      <div className=" mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center px-4 py-2 bg-white text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-all duration-200 shadow-sm border border-gray-200 hover:shadow-md mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour
          </button>
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center px-4 py-2 bg-white text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-all duration-200 shadow-sm border border-gray-200 hover:shadow-md mb-6"
          >
            <Printer className="h-4 w-4 mr-2" />
            Enregistrer PDF
          </button>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-16 h-16 bg-indigo-600 rounded-2xl shadow-lg">
                  <User className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">
                    {membre.nom} {membre.prenom}
                  </h1>
                  <p className="text-lg text-gray-600 font-medium">
                    Code: {membre.code_kristianina}
                  </p>
                </div>
              </div>
              <div className="text-right">
                {getCategoryBadge(membre.voina_vahatra_tafika)}
                <div className="flex my-1 items-center justify-end mt-2 space-x-4">
                  <Church className="text-indigo-500" />
                  <p className="text-sm text-gray-400">
                  {" "}
                  St Jean Baptiste Ankadindramamy
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Identification */}
          <InfoCard icon={User} title="Identification" color="indigo">
            <dl className="grid grid-cols-1 gap-4">
              <DataField
                label="Code Kristianina"
                value={membre.code_kristianina}
              />
              <DataField
                label="Code Fianakaviana"
                value={membre.code_fianakaviana}
              />
              <DataField
                label="Code Fianakaviana Niaviana"
                value={membre.code_fianakaviana_niaviana}
              />
            </dl>
          </InfoCard>

          {/* Informations personnelles */}
          <InfoCard
            icon={Calendar}
            title="Informations personnelles"
            color="emerald"
          >
            <dl className="grid grid-cols-1 gap-4">
              <DataField
                label="Date de naissance / Âge"
                value={`${membre.date_naissance} (${calculateAge(
                  membre.date_naissance
                )} ans)`}
              />

              <DataField label="Profession" value={membre.profession} />
              <DataField label="Adresse" value={membre.adresse} />
            </dl>
          </InfoCard>

          {/* Localisation */}
          <InfoCard icon={Building} title="Localisation" color="green">
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <DataField label="Faritra" value={membre.faritra} />
              <DataField label="APV" value={membre.apv} />
            </dl>
          </InfoCard>

          {/* Responsabilités */}
          <InfoCard icon={Users} title="Responsabilités" color="purple">
            <div className="space-y-4">
              <div>
                <dt className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
                  Andraikitra
                </dt>
                <dd>
                  {membre.andraikitra.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {membre.andraikitra.map((item, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 border border-purple-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <span className="text-gray-500 italic">
                      Aucune responsabilité
                    </span>
                  )}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
                  Fikambanana Masina / Vomieran'Asa
                </dt>
                <dd>
                  {membre.fm_vm.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {membre.fm_vm.map((item, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 border border-indigo-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <span className="text-gray-500 italic">Aucun FM/VA</span>
                  )}
                </dd>
              </div>
            </div>
          </InfoCard>
        </div>

        {/* Sacrements & Engagements */}
        <div className="mt-8">
          <InfoCard icon={Award} title="Sacrements & Engagements" color="amber">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <StatusBadge
                status={membre.mariage_ok}
                date={membre.mariage_date}
                label="Mariage"
              />
              <StatusBadge
                status={membre.batemy_ok}
                date={membre.batemy_date}
                label="Batême"
              />
              <StatusBadge status={membre.confesy_ok} label="Confession" />
              <StatusBadge status={membre.komnio_ok} label="Communion" />
              <StatusBadge
                status={membre.kofirmasion_ok}
                label="Confirmation"
              />
              <StatusBadge status={membre.filaharana_ok} label="Filaharana" />
            </div>
          </InfoCard>
        </div>
      </div>
    </div>
  );
};

export default MembreDetailBapt;
