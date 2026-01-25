import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

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

    useEffect(() => {
        const loadMarkdown = async () => {
            try {
                // Reset al cambiar de archivo
                setSelectedSection(0);
                setLoading(true);
                setError(null);

                const response = await fetch(`/docs/${filePath}`);
                if (!response.ok) throw new Error('No se pudo cargar el archivo');
                const text = await response.text();

                // Dividir en secciones por ## PROMPT
                const parts = text.split(/(?=^## PROMPT)/gm);
                const parsedSections: Section[] = [];

                parts.forEach((part, idx) => {
                    const trimmed = part.trim();
                    if (!trimmed) return;

                    // Extraer título
                    const titleMatch = trimmed.match(/^## (PROMPT.*?)$/m);

                    // Buscar "RESPUESTA" en cualquier formato
                    // Captura: **RESPUESTA:** o RESPUESTA : o ### RESPUESTA
                    const respuestaRegex = /(?:\*\*RESPUESTA:\*\*|RESPUESTA\s*:|###\s*RESPUESTA)\s*([\s\S]*?)(?=\n---|\n## |$)/i;
                    const respuestaMatch = trimmed.match(respuestaRegex);

                    let prompt = '';
                    let responseText = '';

                    if (respuestaMatch) {
                        // Todo antes de RESPUESTA es el prompt
                        const respuestaIndex = trimmed.indexOf(respuestaMatch[0]);
                        prompt = trimmed.substring(0, respuestaIndex).trim();
                        // Todo después de RESPUESTA hasta --- o siguiente ##
                        responseText = respuestaMatch[1].trim();

                        // Debug en consola
                        console.log(`Sección ${idx}:`, {
                            title: titleMatch?.[1],
                            hasResponse: !!responseText,
                            responseLength: responseText.length
                        });
                    } else {
                        prompt = trimmed;
                        console.log(`Sección ${idx}: NO tiene RESPUESTA`, titleMatch?.[1]);
                    }

                    parsedSections.push({
                        id: `section-${idx}`,
                        title: titleMatch ? titleMatch[1] : idx === 0 ? 'Índice' : `Sección ${idx}`,
                        prompt: prompt,
                        response: responseText
                    });
                });

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

    if (loading) return <div className="text-center py-4 text-gray-500 text-sm">Cargando...</div>;
    if (error) return <div className="text-center py-4 text-red-500 text-sm">Error: {error}</div>;
    if (sections.length === 0) return <div className="text-center py-4 text-gray-500 text-sm">Sin contenido</div>;

    const currentSection = sections[selectedSection];

    return (
        <div className="flex gap-6">
            {/* Sidebar con navegación */}
            {sections.length > 1 && (
                <div className="w-48 flex-shrink-0">
                    <div className="sticky top-20 space-y-1 max-h-[calc(100vh-120px)] overflow-y-auto">
                        {sections.map((section, idx) => (
                            <button
                                key={section.id}
                                onClick={() => setSelectedSection(idx)}
                                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${selectedSection === idx
                                    ? 'bg-blue-100 text-blue-900 font-medium'
                                    : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                            >
                                {section.title}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Contenido en dos columnas: PROMPT | RESPUESTA */}
            <div className="flex-1 grid md:grid-cols-2 gap-6">
                {/* Columna PROMPT */}
                <div className="bg-blue-50 rounded-lg p-6 border border-blue-200 overflow-auto max-h-[80vh]">
                    <h3 className="text-sm font-bold text-blue-900 mb-4 uppercase tracking-wide">📝 Prompt</h3>
                    <div className="prose prose-sm max-w-none 
            prose-headings:text-gray-900 prose-headings:font-bold 
            prose-h2:text-lg prose-h3:text-base prose-h4:text-sm
            prose-p:text-gray-700 prose-p:leading-relaxed prose-p:my-2
            prose-code:bg-blue-100 prose-code:text-gray-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-xs
            prose-ul:text-gray-700 prose-ul:my-2 prose-ol:text-gray-700 
            prose-li:my-1 prose-li:text-sm
            prose-strong:text-gray-900">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {currentSection.prompt}
                        </ReactMarkdown>
                    </div>
                </div>

                {/* Columna RESPUESTA */}
                <div className="bg-green-50 rounded-lg p-6 border border-green-200 overflow-auto max-h-[80vh]">
                    <h3 className="text-sm font-bold text-green-900 mb-4 uppercase tracking-wide">✅ Respuesta</h3>
                    {currentSection.response ? (
                        <div className="prose prose-sm max-w-none 
              prose-headings:text-gray-900 prose-headings:font-bold 
              prose-h2:text-lg prose-h3:text-base prose-h4:text-sm
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:my-2
              prose-code:bg-green-100 prose-code:text-gray-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-xs
              prose-ul:text-gray-700 prose-ul:my-2 prose-ol:text-gray-700 
              prose-li:my-1 prose-li:text-sm
              prose-strong:text-gray-900">
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                {currentSection.response}
                            </ReactMarkdown>
                        </div>
                    ) : (
                        <p className="text-gray-500 italic text-sm">Sin respuesta disponible</p>
                    )}
                </div>
            </div>
        </div>
    );
};
