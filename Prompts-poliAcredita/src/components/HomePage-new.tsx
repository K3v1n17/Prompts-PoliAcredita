import React from 'react';

interface HomePageProps {
    onNavigate: (section: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
    const sections = [
        {
            id: 'producto',
            title: 'Producto',
            description: 'Visión, roadmap y backlog',
            count: '4 docs'
        },
        {
            id: 'release',
            title: 'Release',
            description: 'Fechas, planning y estrategia',
            count: '4 docs'
        },
        {
            id: 'sprints',
            title: 'Sprints',
            description: '4 sprints con dailies y reviews',
            count: '4 sprints'
        },
        {
            id: 'definiciones',
            title: 'Definiciones',
            description: 'DOR y DOD - Criterios',
            count: '2 docs'
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero minimalista con logo */}
            <div className="max-w-6xl mx-auto px-6 py-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Lado izquierdo - Contenido */}
                    <div>
                        <h1 className="text-5xl font-bold text-gray-900 mb-4">
                            PoliAcredita
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            Sistema de Acreditación EUR-ACE para la Escuela Politécnica Nacional
                        </p>
                        <p className="text-gray-600 mb-8">
                            Descubre la planificación estratégica, sprints ejecutados y criterios de calidad del proyecto
                        </p>
                        <div className="flex gap-4">
                            <button
                                onClick={() => onNavigate('producto')}
                                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Explorar Proyecto
                            </button>
                            <button
                                onClick={() => onNavigate('sprints')}
                                className="px-6 py-3 border border-gray-300 text-gray-900 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                            >
                                Ver Sprints
                            </button>
                        </div>
                    </div>

                    {/* Lado derecho - Logo */}
                    <div className="flex justify-center">
                        <img
                            src="/images/Logo PoliAcredita-Photoroom.png"
                            alt="PoliAcredita Logo"
                            className="w-full max-w-sm object-contain"
                            onError={(e) => {
                                (e.target as HTMLImageElement).style.display = 'none';
                            }}
                        />

                    </div>
                </div>
            </div>

            {/* Grid de secciones */}
            <div className="bg-gray-50 py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12">Secciones Principales</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {sections.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => onNavigate(section.id)}
                                className="p-6 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all text-left hover:translate-y-[-2px]"
                            >
                                <div className="flex items-start justify-between mb-2">
                                    <h3 className="text-xl font-bold text-gray-900">{section.title}</h3>
                                    <span className="text-sm px-2 py-1 bg-gray-100 text-gray-600 rounded">{section.count}</span>
                                </div>
                                <p className="text-gray-600 text-sm">{section.description}</p>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Stats */}
            {/* <div className="max-w-6xl mx-auto px-6 py-20">
                <div className="grid md:grid-cols-4 gap-8">
                    <div className="text-center">
                        <div className="text-4xl font-bold text-blue-600 mb-2">4</div>
                        <p className="text-gray-600">Sprints</p>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-blue-600 mb-2">14+</div>
                        <p className="text-gray-600">Dailies</p>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-blue-600 mb-2">18+</div>
                        <p className="text-gray-600">Documentos</p>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-blue-600 mb-2">37</div>
                        <p className="text-gray-600">Días</p>
                    </div>
                </div>
            </div> */}
        </div>
    );
};
