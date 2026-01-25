import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { MessageSquare, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

interface MarkdownViewerEnhancedProps {
    filePath: string;
}

interface Section {
    id: string;
    title: string;
    prompt: string;
    response: string;
}

export const MarkdownViewerEnhanced: React.FC<MarkdownViewerEnhancedProps> = ({ filePath }) => {
    const [sections, setSections] = useState<Section[]>([]);
    const [selectedSection, setSelectedSection] = useState<number>(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [expandedView, setExpandedView] = useState(true);
    const [promptCollapsed, setPromptCollapsed] = useState(false);
    const [responseCollapsed, setResponseCollapsed] = useState(false);

    useEffect(() => {
        const loadMarkdown = async () => {
            try {
                setSelectedSection(0);
                setLoading(true);
                setError(null);

                const response = await fetch(`${import.meta.env.BASE_URL}docs/${filePath}`);
                if (!response.ok) throw new Error('No se pudo cargar el archivo');
                const text = await response.text();

                const hasPrompt = /(^##\s+PROMPT)/m.test(text);
                const parsedSections: Section[] = [];

                if (!hasPrompt) {
                    // Fallback: render entire markdown as a single response section (for general docs like DOR/DOD)
                    const withoutIndex = text.replace(/##\s*Índice[\s\S]*?(?:\n---|\n##\s|$)/i, '').trim();
                    const titleMatch = withoutIndex.match(/^#{1,2}\s+(.+)$/m);
                    const title = titleMatch ? titleMatch[1] : 'Contenido';
                    parsedSections.push({
                        id: 'section-0',
                        title,
                        prompt: '',
                        response: withoutIndex
                    });
                } else {
                    const parts = text.split(/(?=^## PROMPT)/gm);

                    parts.forEach((part, idx) => {
                        const trimmed = part.trim();
                        if (!trimmed) return;

                        const titleMatch = trimmed.match(/^## (PROMPT.*?)$/m);
                        const respuestaRegex = /(?:\*\*RESPUESTA:\*\*|RESPUESTA\s*:|###\s*RESPUESTA)\s*([\s\S]*?)(?=\n---|\n## |$)/i;
                        const respuestaMatch = trimmed.match(respuestaRegex);

                        let prompt = '';
                        let responseText = '';

                        if (respuestaMatch) {
                            const respuestaIndex = trimmed.indexOf(respuestaMatch[0]);
                            prompt = trimmed.substring(0, respuestaIndex).trim();
                            responseText = respuestaMatch[1].trim();
                            // Limpia el prefijo de RESPUESTA si está en la respuesta
                            responseText = responseText.replace(/^\*\*RESPUESTA:\*\*\s*/, '');
                        } else {
                            prompt = trimmed;
                        }

                        // Filtrar secciones vacías e Índice
                        const title = titleMatch ? titleMatch[1] : idx === 0 ? 'Índice' : `Sección ${idx}`;
                        if (title === 'Índice' || !prompt) return;

                        parsedSections.push({
                            id: `section-${idx}`,
                            title: title,
                            prompt: prompt,
                            response: responseText
                        });
                    });
                }

                setSections(parsedSections);
                setLoading(false);
            } catch (err) {
                console.error('Error cargando markdown:', err);
                setError(err instanceof Error ? err.message : 'Error desconocido');
                setLoading(false);
            }
        };

        loadMarkdown();
    }, [filePath]);

    if (loading) {
        return (
            <div className="flex items-center justify-center py-12">
                <div className="flex flex-col items-center gap-3">
                    <div className="animate-spin rounded-full h-10 w-10 border-4 border-blue-200 border-t-blue-600"></div>
                    <p className="text-sm text-gray-500">Cargando contenido...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="p-6 bg-red-50 border border-red-200 rounded-lg">
                <h3 className="text-red-800 font-semibold mb-2">Error al cargar</h3>
                <p className="text-red-600 text-sm">{error}</p>
            </div>
        );
    }

    if (sections.length === 0) {
        return (
            <div className="text-center py-12 text-gray-500">
                <p>Sin contenido disponible</p>
            </div>
        );
    }

    const currentSection = sections[selectedSection];

    return (
        <div className="space-y-6">
            {/* Navegación superior en pills */}
            {sections.length > 1 && (
                <div className="flex items-center gap-2 pb-4 border-b border-gray-200 flex-wrap">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mr-2">
                        Navegación:
                    </span>
                    {sections.map((section, idx) => (
                        <button
                            key={section.id}
                            onClick={() => setSelectedSection(idx)}
                            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${selectedSection === idx
                                ? 'bg-blue-600 text-white shadow-md'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            {section.title}
                        </button>
                    ))}
                </div>
            )}

            {/* Toggle para vista expandida/compacta */}
            <div className="flex justify-end">
                <button
                    onClick={() => setExpandedView(!expandedView)}
                    className="flex items-center gap-2 px-3 py-1.5 text-xs text-gray-600 hover:text-gray-900 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                >
                    {expandedView ? (
                        <>
                            <ChevronUp className="w-3.5 h-3.5" />
                            Vista Compacta
                        </>
                    ) : (
                        <>
                            <ChevronDown className="w-3.5 h-3.5" />
                            Vista Expandida
                        </>
                    )}
                </button>
            </div>

            {/* Layout: Vertical en vista expandida, horizontal en compacta */}
            <div className={expandedView ? 'space-y-6' : 'grid md:grid-cols-2 gap-6'}>
                {/* PROMPT (oculto si no existe) */}
                {currentSection.prompt && (
                <div className="group">
                    <button
                        onClick={() => setPromptCollapsed(!promptCollapsed)}
                        className="w-full flex items-center justify-between gap-3 mb-4 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-blue-100 rounded-lg">
                                <MessageSquare className="w-5 h-5 text-blue-600" />
                            </div>
                            <div className="text-left">
                                <h3 className="font-semibold text-gray-900">Prompt</h3>
                                <p className="text-xs text-gray-500">Entrada del usuario</p>
                            </div>
                        </div>
                        <div className="text-gray-400">
                            {promptCollapsed ? (
                                <ChevronDown className="w-5 h-5" />
                            ) : (
                                <ChevronUp className="w-5 h-5" />
                            )}
                        </div>
                    </button>

                    {!promptCollapsed && (
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl p-6 border border-blue-200 shadow-sm hover:shadow-md transition-shadow">
                            <div className="prose prose-sm max-w-none
                                prose-headings:text-gray-900 prose-headings:font-bold prose-headings:mt-6 prose-headings:mb-3
                                prose-h2:text-xl prose-h3:text-lg prose-h4:text-base
                                prose-p:text-gray-700 prose-p:leading-relaxed prose-p:my-3
                                prose-code:bg-blue-200 prose-code:text-gray-900 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-xs prose-code:font-mono
                                prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto
                                prose-ul:text-gray-700 prose-ul:my-3 prose-ul:space-y-1
                                prose-ol:text-gray-700 prose-ol:my-3 prose-ol:space-y-1
                                prose-li:my-1 prose-li:text-sm
                                prose-strong:text-gray-900 prose-strong:font-semibold
                                prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-600
                                prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                                prose-hr:my-6 prose-hr:border-gray-300">
                                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                    {currentSection.prompt}
                                </ReactMarkdown>
                            </div>
                        </div>
                    )}
                </div>
                )}

                {/* RESPUESTA */}
                <div className="group">
                    <button
                        onClick={() => setResponseCollapsed(!responseCollapsed)}
                        className="w-full flex items-center justify-between gap-3 mb-4 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-green-100 rounded-lg">
                                <CheckCircle2 className="w-5 h-5 text-green-600" />
                            </div>
                            <div className="text-left">
                                <h3 className="font-semibold text-gray-900">Respuesta</h3>
                                <p className="text-xs text-gray-500">Resultado generado</p>
                            </div>
                        </div>
                        <div className="text-gray-400">
                            {responseCollapsed ? (
                                <ChevronDown className="w-5 h-5" />
                            ) : (
                                <ChevronUp className="w-5 h-5" />
                            )}
                        </div>
                    </button>

                    {!responseCollapsed && (
                        currentSection.response ? (
                            <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-xl p-6 border border-green-200 shadow-sm hover:shadow-md transition-shadow">
                                <div className="prose prose-sm max-w-none
                                    prose-headings:text-gray-900 prose-headings:font-bold prose-headings:mt-6 prose-headings:mb-3
                                    prose-h2:text-xl prose-h3:text-lg prose-h4:text-base
                                    prose-p:text-gray-700 prose-p:leading-relaxed prose-p:my-3
                                    prose-code:bg-green-200 prose-code:text-gray-900 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-xs prose-code:font-mono
                                    prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto
                                    prose-ul:text-gray-700 prose-ul:my-3 prose-ul:space-y-1
                                    prose-ol:text-gray-700 prose-ol:my-3 prose-ol:space-y-1
                                    prose-li:my-1 prose-li:text-sm
                                    prose-strong:text-gray-900 prose-strong:font-semibold
                                    prose-blockquote:border-l-4 prose-blockquote:border-green-500 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-600
                                    prose-a:text-green-600 prose-a:no-underline hover:prose-a:underline
                                    prose-hr:my-6 prose-hr:border-gray-300
                                    prose-table:border-collapse prose-table:w-full
                                    prose-th:bg-green-100 prose-th:p-2 prose-th:text-left prose-th:font-semibold prose-th:border prose-th:border-green-200
                                    prose-td:p-2 prose-td:border prose-td:border-green-200">
                                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                        {currentSection.response}
                                    </ReactMarkdown>
                                </div>
                            </div>
                        ) : (
                            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 text-center">
                                <p className="text-gray-500 italic text-sm">Sin respuesta disponible</p>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default MarkdownViewerEnhanced;