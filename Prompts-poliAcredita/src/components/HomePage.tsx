import React from 'react';

interface HomePageProps {
    onNavigate: (section: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
    const sections = [
        {
            id: 'producto',
            icon: '📦',
            title: 'Planificación del Producto',
            description: 'Visión, roadmap, backlog y áreas de valor',
            color: 'from-blue-500 to-cyan-500',
            count: '4 documentos'
        },
        {
            id: 'release',
            icon: '🚀',
            title: 'Planificación del Release',
            description: 'Fechas, MRFS, backlog y sprint mapping',
            color: 'from-green-500 to-teal-500',
            count: '4 documentos'
        },
        {
            id: 'sprints',
            icon: '⚡',
            title: 'Ejecución de Sprints',
            description: '4 sprints completos con dailies, reviews y retros',
            color: 'from-purple-500 to-pink-500',
            count: '4 sprints'
        },
        {
            id: 'definiciones',
            icon: '📋',
            title: 'Criterios de Calidad',
            description: 'Definition of Ready (DOR) y Definition of Done (DOD)',
            color: 'from-orange-500 to-red-500',
            count: '2 definiciones'
        }
    ];

    return (
        <>
            <div className="relative bg-gradient-to-br from-blue-600 via-blue-500 to-teal-400 text-white overflow-hidden">
                {/* Fondo animado */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
                </div>

                <div className="relative max-w-6xl mx-auto px-4 py-20 text-center">
                    <img
                        src="/Prompts-PoliAcredita/images/Logo%20PoliAcredita-Photoroom.png"
                        alt="PoliAcredita Logo"
                        className="w-48 h-48 mx-auto mb-6 drop-shadow-lg"
                    />
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

            {/* Secciones principales */}
            <section className="max-w-6xl mx-auto px-4 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Explora el Proyecto</h2>
                    <p className="text-gray-600 text-lg">Selecciona una sección para ver más detalles</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {sections.map((section) => (
                        <button
                            key={section.id}
                            onClick={() => onNavigate(section.id)}
                            className={`group bg-gradient-to-br ${section.color} rounded-lg shadow-lg hover:shadow-2xl transition-all p-8 text-white text-left transform hover:scale-105 cursor-pointer`}
                        >
                            <div className="flex items-start justify-between mb-4">
                                <span className="text-5xl">{section.icon}</span>
                                <span className="text-sm bg-white/30 backdrop-blur px-3 py-1 rounded-full">
                                    {section.count}
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold mb-2 group-hover:translate-x-1 transition-transform">
                                {section.title}
                            </h3>
                            <p className="opacity-90 mb-4">{section.description}</p>
                            <div className="flex items-center gap-2 opacity-75 group-hover:opacity-100 transition-opacity">
                                <span>Ver detalles</span>
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </div>
                        </button>
                    ))}
                </div>
            </section>

            {/* Estadísticas */}
            <section className="bg-gray-100 py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Proyecto en Números</h3>
                    <div className="grid md:grid-cols-4 gap-6">
                        <div className="bg-white rounded-lg p-6 text-center shadow-md">
                            <div className="text-4xl font-bold text-blue-600 mb-2">4</div>
                            <p className="text-gray-600">Sprints</p>
                        </div>
                        <div className="bg-white rounded-lg p-6 text-center shadow-md">
                            <div className="text-4xl font-bold text-green-600 mb-2">14</div>
                            <p className="text-gray-600">Dailies</p>
                        </div>
                        <div className="bg-white rounded-lg p-6 text-center shadow-md">
                            <div className="text-4xl font-bold text-purple-600 mb-2">18+</div>
                            <p className="text-gray-600">Documentos</p>
                        </div>
                        <div className="bg-white rounded-lg p-6 text-center shadow-md">
                            <div className="text-4xl font-bold text-orange-600 mb-2">37</div>
                            <p className="text-gray-600">Días</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
