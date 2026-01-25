import React, { useState } from 'react';
import content from '../data/content.json';

export const SprintsSection: React.FC = () => {
    const [expandedSprint, setExpandedSprint] = useState<number | null>(null);
    const [selectedDaily, setSelectedDaily] = useState<string | null>(null);

    return (
        <section className="max-w-6xl mx-auto px-4 py-16">
            <div className="mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                    ⚡ Ejecución de Sprints
                </h2>
                <p className="text-gray-600">
                    Seguimiento detallado de los 4 sprints del proyecto
                </p>
            </div>

            <div className="space-y-4">
                {content.sprints.map((sprint) => (
                    <div key={sprint.numero} className="border-2 border-gray-200 rounded-lg overflow-hidden">
                        {/* Encabezado Sprint */}
                        <button
                            onClick={() => setExpandedSprint(expandedSprint === sprint.numero ? null : sprint.numero)}
                            className="w-full px-6 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold flex items-center justify-between hover:from-purple-600 hover:to-indigo-600 transition-all"
                        >
                            <div className="text-left">
                                <div className="text-xl">Sprint {sprint.numero}</div>
                                <div className="text-sm opacity-90">{sprint.fechas}</div>
                            </div>
                            <span className="text-2xl">{expandedSprint === sprint.numero ? '▼' : '▶'}</span>
                        </button>

                        {/* Contenido Sprint */}
                        {expandedSprint === sprint.numero && (
                            <div className="p-6 bg-gray-50 grid md:grid-cols-2 gap-6">
                                {/* Planning */}
                                <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
                                    <h4 className="font-bold text-blue-600 mb-2">📋 Sprint Planning</h4>
                                    <p className="text-sm text-gray-600 mb-3">{sprint.planning}</p>
                                    <button className="text-sm px-3 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200">
                                        Ver detalles
                                    </button>
                                </div>

                                {/* Ejecución */}
                                <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                                    <h4 className="font-bold text-green-600 mb-2">✅ Ejecución</h4>
                                    <p className="text-sm text-gray-600 mb-3">{sprint.ejecucion}</p>
                                    <button className="text-sm px-3 py-1 bg-green-100 text-green-700 rounded hover:bg-green-200">
                                        Ver detalles
                                    </button>
                                </div>

                                {/* Review */}
                                <div className="bg-white rounded-lg p-4 border-l-4 border-orange-500">
                                    <h4 className="font-bold text-orange-600 mb-2">👀 Sprint Review</h4>
                                    <p className="text-sm text-gray-600 mb-3">{sprint.review}</p>
                                    <button className="text-sm px-3 py-1 bg-orange-100 text-orange-700 rounded hover:bg-orange-200">
                                        Ver detalles
                                    </button>
                                </div>

                                {/* Retrospectiva */}
                                <div className="bg-white rounded-lg p-4 border-l-4 border-red-500">
                                    <h4 className="font-bold text-red-600 mb-2">🔄 Retrospectiva</h4>
                                    <p className="text-sm text-gray-600 mb-3">{sprint.retro}</p>
                                    <button className="text-sm px-3 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200">
                                        Ver detalles
                                    </button>
                                </div>

                                {/* Dailies */}
                                <div className="md:col-span-2 bg-white rounded-lg p-4 border-l-4 border-purple-500">
                                    <h4 className="font-bold text-purple-600 mb-4">📅 Daily Standups</h4>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                                        {sprint.dailies.map((daily, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setSelectedDaily(daily)}
                                                className="px-3 py-2 bg-purple-100 text-purple-700 rounded hover:bg-purple-200 text-sm font-medium"
                                            >
                                                Daily {idx + 1}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {selectedDaily && (
                <div className="mt-8 p-6 bg-purple-50 rounded-lg border-2 border-purple-200">
                    <button
                        onClick={() => setSelectedDaily(null)}
                        className="mb-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                    >
                        ← Cerrar
                    </button>
                    <p className="text-sm text-gray-600">📄 Ver archivo: <code>{selectedDaily}</code></p>
                </div>
            )}
        </section>
    );
};
