import React, { useState } from 'react';
import { MarkdownViewerEnhanced } from './MarkdownViewerEnhanced';
import content from '../data/content.json';

type SprintTab = 'planning' | 'ejecucion' | 'dailies' | 'review' | 'retro';

export const SprintsSection: React.FC = () => {
    const [selectedSprint, setSelectedSprint] = useState<number>(1);
    const [selectedTab, setSelectedTab] = useState<SprintTab>('planning');
    const [selectedDaily, setSelectedDaily] = useState<number>(0);

    const sprint = content.sprints.find(s => s.numero === selectedSprint);

    const getTabLabel = (tab: SprintTab): string => {
        const labels: Record<SprintTab, string> = {
            planning: '📋 Planning',
            ejecucion: '✅ Ejecución',
            dailies: '📅 Dailys',
            review: '👀 Review',
            retro: '🔄 Retrospectiva'
        };
        return labels[tab];
    };

    const getFilePath = (): string => {
        if (!sprint) return '';

        switch (selectedTab) {
            case 'planning':
                return sprint.planning;
            case 'ejecucion':
                return sprint.ejecucion;
            case 'dailies':
                return sprint.dailies[selectedDaily] || '';
            case 'review':
                return sprint.review;
            case 'retro':
                return sprint.retro;
            default:
                return '';
        }
    };

    return (
        <section className="w-full mx-auto px-6 py-12">
            <div className="mb-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-2">
                    ⚡ Ejecución de Sprints
                </h2>
                <p className="text-gray-600">
                    Seguimiento detallado de los 4 sprints del proyecto
                </p>
            </div>

            {/* Sprints horizontales en una línea */}
            <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
                {content.sprints.map((s) => (
                    <button
                        key={s.numero}
                        onClick={() => {
                            setSelectedSprint(s.numero);
                            setSelectedTab('planning');
                            setSelectedDaily(0);
                        }}
                        className={`px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition-all transform hover:scale-105 ${selectedSprint === s.numero
                            ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                    >
                        <div className="text-sm">Sprint {s.numero}</div>
                        <div className="text-xs opacity-75">{s.fechas.split(' - ')[0]}</div>
                    </button>
                ))}
            </div>

            {sprint && (
                <>
                    {/* Tabs de secciones del sprint */}
                    <div className="flex gap-2 border-b border-gray-200 mb-6 overflow-x-auto">
                        {['planning', 'ejecucion', 'dailies', 'review', 'retro'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => {
                                    setSelectedTab(tab as SprintTab);
                                    setSelectedDaily(0);
                                }}
                                className={`px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors ${selectedTab === tab
                                    ? 'text-purple-600 border-b-2 border-purple-600'
                                    : 'text-gray-600 hover:text-gray-900'
                                    }`}
                            >
                                {getTabLabel(tab as SprintTab)}
                            </button>
                        ))}
                    </div>

                    {/* Selector de Dailies si se seleccionó esa tab */}
                    {selectedTab === 'dailies' && sprint.dailies.length > 0 && (
                        <div className="mb-6 flex gap-2 flex-wrap">
                            {sprint.dailies.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setSelectedDaily(idx)}
                                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${selectedDaily === idx
                                        ? 'bg-purple-600 text-white'
                                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                        }`}
                                >
                                    Daily {idx + 1}
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Contenido del tab seleccionado */}
                    <div className="bg-white rounded-lg border border-gray-200 p-6">
                        <MarkdownViewerEnhanced filePath={getFilePath()} />
                    </div>
                </>
            )}
        </section>
    );
};
