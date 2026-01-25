import React from 'react';

export const Hero: React.FC = () => {
    return (
        <div className="relative bg-gradient-to-br from-blue-600 via-blue-500 to-teal-400 text-white overflow-hidden">
            {/* Fondo animado */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
            </div>

            <div className="relative max-w-6xl mx-auto px-4 py-20 text-center">
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                    PoliAcredita <span className="text-3xl">🎓</span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light">
                    Sistema de Acreditación EUR-ACE para la Escuela Politécnica Nacional
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-12">
                    <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                        <span className="text-4xl mb-2 block">🎯</span>
                        <h3 className="font-bold text-lg">Visión Clara</h3>
                        <p className="text-sm mt-2">Definición estratégica del producto</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                        <span className="text-4xl mb-2 block">📊</span>
                        <h3 className="font-bold text-lg">Planificación Ágil</h3>
                        <p className="text-sm mt-2">Sprints organizados y releases definidos</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                        <span className="text-4xl mb-2 block">✅</span>
                        <h3 className="font-bold text-lg">Calidad Garantizada</h3>
                        <p className="text-sm mt-2">DOR y DOD para excelencia</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
