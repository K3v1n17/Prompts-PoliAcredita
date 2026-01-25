import React, { useState } from 'react';
import { MarkdownViewerEnhanced } from './MarkdownViewerEnhanced';
import content from '../data/content.json';

export const ReleaseSection: React.FC = () => {
    const [selectedItem, setSelectedItem] = useState<string>(content.release.items[0].id);

    return (
        <section className="w-full mx-auto px-6 py-12">
            <div className="mb-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-1">
                    {content.release.titulo}
                </h2>
                <div className="text-xs text-gray-600">
                    📅 {content.release.fechaInicio} → {content.release.fechaFin}
                </div>
            </div>

            {/* Tabs horizontales */}
            <div className="flex gap-2 border-b border-gray-200 mb-6 overflow-x-auto">
                {content.release.items.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setSelectedItem(item.id)}
                        className={`px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors ${selectedItem === item.id
                                ? 'text-green-600 border-b-2 border-green-600'
                                : 'text-gray-600 hover:text-gray-900'
                            }`}
                    >
                        {item.nombre}
                    </button>
                ))}
            </div>

            {/* Contenido del tab seleccionado */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
                <MarkdownViewerEnhanced
                    filePath={content.release.items.find(i => i.id === selectedItem)?.ruta || ''}
                />
            </div>
        </section>
    );
};
