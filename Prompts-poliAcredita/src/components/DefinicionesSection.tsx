import React, { useState } from 'react';
import { MarkdownViewerEnhanced } from './MarkdownViewerEnhanced';
import content from '../data/content.json';

export const DefinicionesSection: React.FC = () => {
    const [selectedDef, setSelectedDef] = useState<string | null>(null);
    return (
        <section className="max-w-6xl mx-auto px-4 py-16">
            <div className="mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                    📋 Definiciones de Calidad
                </h2>
                <p className="text-gray-600 mb-8">
                    Criterios que garantizan la excelencia del producto
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {/* DOR Card */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg shadow-lg p-8 border-2 border-blue-300">
                    <div className="text-6xl mb-4">{content.definiciones.dor.icono}</div>
                    <h3 className="text-2xl font-bold text-blue-900 mb-3">
                        {content.definiciones.dor.nombre}
                    </h3>
                    <p className="text-blue-800 mb-6">
                        {content.definiciones.dor.descripcion}
                    </p>
                    <button
                        onClick={() => setSelectedDef('dor')}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Ver criterios DOR
                    </button>
                    <p className="text-xs text-blue-600 mt-4 opacity-75">
                        📄 {content.definiciones.dor.ruta}
                    </p>
                </div>

                {/* DOD Card */}
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg shadow-lg p-8 border-2 border-green-300">
                    <div className="text-6xl mb-4">{content.definiciones.dod.icono}</div>
                    <h3 className="text-2xl font-bold text-green-900 mb-3">
                        {content.definiciones.dod.nombre}
                    </h3>
                    <p className="text-green-800 mb-6">
                        {content.definiciones.dod.descripcion}
                    </p>
                    <button
                        onClick={() => setSelectedDef('dod')}
                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                        Ver criterios DOD
                    </button>
                    <p className="text-xs text-green-600 mt-4 opacity-75">
                        📄 {content.definiciones.dod.ruta}
                    </p>
                </div>
            </div>

            {/* Info adicional */}
            <div className="mt-12 p-8 bg-yellow-50 rounded-lg border-2 border-yellow-200">
                <h4 className="text-xl font-bold text-yellow-900 mb-4">💡 ¿Por qué son importantes?</h4>
                <ul className="space-y-3 text-yellow-900">
                    <li className="flex gap-3">
                        <span className="text-2xl">✅</span>
                        <span><strong>Claridad:</strong> Todos saben qué significa "listo" y "hecho"</span>
                    </li>
                    <li className="flex gap-3">
                        <span className="text-2xl">✅</span>
                        <span><strong>Consistencia:</strong> Se aplican los mismos criterios en todos los sprints</span>
                    </li>
                    <li className="flex gap-3">
                        <span className="text-2xl">✅</span>
                        <span><strong>Calidad:</strong> Se garantiza que cada incremento es potencialmente liberable</span>
                    </li>
                    <li className="flex gap-3">
                        <span className="text-2xl">✅</span>
                        <span><strong>Confianza:</strong> El equipo y stakeholders saben en qué confiar</span>
                    </li>
                </ul>
            </div>

            {/* Modal para mostrar contenido */}
            {selectedDef && (
                <div className="mt-8 p-8 bg-gray-50 rounded-lg border-2 border-gray-200">
                    <button
                        onClick={() => setSelectedDef(null)}
                        className="mb-4 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
                    >
                        ← Volver
                    </button>
                    <div className="bg-white rounded-lg p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">
                            {selectedDef === 'dor' ? content.definiciones.dor.nombre : content.definiciones.dod.nombre}
                        </h3>
                        <MarkdownViewerEnhanced
                            filePath={selectedDef === 'dor' ? content.definiciones.dor.ruta : content.definiciones.dod.ruta}
                        />
                    </div>
                </div>
            )}
        </section>
    );
};
