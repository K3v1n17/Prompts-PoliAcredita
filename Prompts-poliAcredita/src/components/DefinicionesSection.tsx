import React, { useState } from 'react';
import { MarkdownViewerEnhanced } from './MarkdownViewerEnhanced';
import content from '../data/content.json';

export const DefinicionesSection: React.FC = () => {
    const [selectedDef, setSelectedDef] = useState<string | null>(null);
    return (
        <section className="max-w-6xl mx-auto px-4 py-12">
            <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    📋 Definiciones de Calidad
                </h2>
                <p className="text-gray-600 mb-8">
                    Criterios que garantizan la excelencia del producto
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {/* DOR Card */}
                <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-6">
                    <div className="text-4xl mb-3">{content.definiciones.dor.icono}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {content.definiciones.dor.nombre}
                    </h3>
                    <p className="text-gray-700 mb-5">
                        {content.definiciones.dor.descripcion}
                    </p>
                    <button
                        onClick={() => setSelectedDef('dor')}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                    >
                        Ver criterios DOR
                    </button>
                    <p className="text-xs text-gray-500 mt-4">
                        📄 {content.definiciones.dor.ruta}
                    </p>
                </div>

                {/* DOD Card */}
                <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-6">
                    <div className="text-4xl mb-3">{content.definiciones.dod.icono}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {content.definiciones.dod.nombre}
                    </h3>
                    <p className="text-gray-700 mb-5">
                        {content.definiciones.dod.descripcion}
                    </p>
                    <button
                        onClick={() => setSelectedDef('dod')}
                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                    >
                        Ver criterios DOD
                    </button>
                    <p className="text-xs text-gray-500 mt-4">
                        📄 {content.definiciones.dod.ruta}
                    </p>
                </div>
            </div>

            {/* Se eliminó la sección informativa por solicitud */}

            {/* Contenido seleccionado, sin modal */}
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
